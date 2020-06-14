import { Chat, Api } from "twitch-js";

export interface CommandContext {
  username: any;
  chat: Chat;
  channel: string;
  api?: Api;
  target?: string;
  cmdParams?: Array<string>;
}

export type CommandListItem = {
  name: string;
  description: string;
};

export type CommandItem = {
  name: string;
  description: string;
  run(ctx: CommandContext): Promise<void>;
};

export type CommandConfig = {
  [index: string]: CommandItem;
};

export interface ICommandManager {
  getCommandList(): Array<CommandListItem>;
  getCommand(name: string): CommandItem | undefined;
}
