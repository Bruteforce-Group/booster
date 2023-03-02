import { Booster, Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { CartItemChanged } from '../events/cart-item-changed'
import { Cart } from '../entities/cart'

@Command({
  authorize: 'all',
})
export class FlushEvents {
  public constructor(
    readonly cartId: UUID,
    readonly previousProducts: number,
    readonly afterProducts: number,
  ) {}

  public static async handle(command: FlushEvents, register: Register): Promise<Array<Cart>> {
    const previousEvents = []
    for (let i = 0; i < command.previousProducts; i++) {
      const uuid = UUID.generate()
      previousEvents.push(new CartItemChanged(command.cartId, uuid, 0))
    }

    const afterEvents = []
    for (let i = 0; i < command.afterProducts; i++) {
      const uuid = UUID.generate()
      afterEvents.push(new CartItemChanged(command.cartId, uuid, 0))
    }

    register.events(...previousEvents)

    await register.flush()
    const previousCart = await FlushEvents.getEntity(command.cartId)

    register.events(...afterEvents)
    const afterCart = await FlushEvents.getEntity(command.cartId)
    return [previousCart, afterCart]
  }

  private static async getEntity(cartId: UUID): Promise<Cart> {
    return (await Booster.entity(Cart, cartId)) as Cart
  }
}
