export class ArgCommand {
  extract(
    args: string[],
    commands: string[][]
  ): { cmd: string; args: string[] } {
    let cmd: string

    args = args.filter((arg) => {
      if (cmd) {
        return true
      }
      for (const cmds of commands) {
        if (cmds.includes(arg)) {
          cmd = cmds[0]
          return false
        }
      }
      return true
    })

    return { cmd, args }
  }
}

export default new ArgCommand()
