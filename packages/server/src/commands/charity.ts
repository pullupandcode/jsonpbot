import { Chat } from "twitch-js";
import { CommandOpts } from "../definitions/command";

export function charity(params: CommandOpts): void {
  const { chat, channel } = params;
  chat.say(
    channel,
    `To celebrate the awesome community we're building, this week we are raising funds for CODE 2040! https://tiltify.com/@jsonp/pull-up-and-code-celebration-for-charity-june-2020`,
  );
}
