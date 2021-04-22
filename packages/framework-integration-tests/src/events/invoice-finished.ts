import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class InvoiceFinished {
  public constructor(
    readonly id: UUID,
    readonly latestInvoicePrice: number,
    readonly oldInvoicePrice: number,
    readonly latestInvoiceDate: string,
    readonly oldestInvoiceDate: string
  ) {}

  public entityID(): UUID {
    return this.id
  }
}
