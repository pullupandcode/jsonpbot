import {
  ICommandManager,
  CommandItem,
  CommandConfig,
  CommandListItem,
} from "./types";

import commands from "./commands";

class CommandManager implements ICommandManager {
  private static instance: CommandManager;
  private commands: Map<string, CommandItem>;
  private constructor(commands: CommandConfig) {
    this.commands = new Map<string, CommandItem>();
    for (const name in commands) {
      this.commands.set(name, commands[name]);
    }
  }
  static getInstance() {
    if (!CommandManager.instance) {
      CommandManager.instance = new CommandManager(commands);
    }

    return CommandManager.instance;
  }

  getCommandList(): Array<CommandListItem> {
    let results: Array<CommandListItem> = [];
    console.log(this.commands);
    for (const [key, value] of this.commands) {
      // let reward = this.commands.get(key);
      results.push({
        name: value.name,
        description: value.description,
      });
    }

    return results;
  }

  getCommand(name: string): CommandItem | undefined {
    return this.commands.get(name);
  }
}

export default CommandManager;
