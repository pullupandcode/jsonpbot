import { Chat } from "twitch-js";
import { CommandMessages } from "../definitions/constants";
import { CommandOpts } from "../definitions/command";

export function theme(params: CommandOpts): void {
  const { chat, channel } = params;

  chat.say(channel, CommandMessages.Theme);
}
