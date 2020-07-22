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

  async getCommandList(): Promise<Array<CommandListItem>> {
    const results: Array<CommandListItem> = [];

    await this.commands.forEach(
      (command, key) => {
        results.push(
          {
            name: command.name,
            description: command.description,
          },
        );
      },
    );
    // let reward = this.commands.get(key);
    return results;
  }

  getCommand(name: string): CommandItem | undefined {
    return this.commands.get(name);
  }
}

export default CommandManager;
