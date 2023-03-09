import { CliCommand, BaseCommand } from '../common/base-command'
import Brand from '../common/brand'
import { Logger } from '@boostercloud/framework-types'
import { UserProject } from '../services/user-project'
import { PackageManager } from '../services/package-manager'
import { TaskLogger } from '../services/task-logger'

@CliCommand()
class Implementation {
  constructor(
    readonly logger: Logger,
    readonly packageManager: PackageManager,
    readonly userProject: UserProject,
    readonly taskLogger: TaskLogger
  ) {}

  async run(): Promise<void> {
    this.logger.info(`boost ${Brand.dangerize('clean')} 🚀`)
    await this.taskLogger.logTask('Cleaning project', async () => {
      await this.userProject.performChecks()
      await this.packageManager.runScript('clean', [])
    })
    this.logger.info('Clean complete!')
  }
}

export default class Clean extends BaseCommand<typeof Clean> {
  public static description = 'Clean the current application as configured in your `index.ts` file.'

  implementation = Implementation
}
