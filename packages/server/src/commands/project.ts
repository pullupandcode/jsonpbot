import { Chat } from "twitch-js";
import { CommandOpts } from "../definitions/command";

export function project(params: CommandOpts): void {
  const { chat, channel } = params;
  chat.say(
    channel,
    `Building more React Components with Tailwind CSS for our Mood Tracker Web App: https://github.com/jaysonjphillips/mood-tracker-app`,
  );
}
