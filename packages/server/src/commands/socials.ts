import { CommandMessages } from "../definitions/constants";
import { CommandOpts } from "../definitions/command";

export function socials(params: CommandOpts): void {
  const { chat, channel } = params;
  chat.say(channel, CommandMessages.Socials);
}
