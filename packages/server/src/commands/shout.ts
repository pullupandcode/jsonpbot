import { CommandOpts } from "../definitions/command";
import { ApiVersions } from "twitch-js";

export function shout(params: CommandOpts): void {
  const { api, chat, channel, target } = params;
  chat.say(
    channel,
    `Shout out to @${target}! Make sure you hit them up at https://twitch.tv/${target}`,
  );
}
