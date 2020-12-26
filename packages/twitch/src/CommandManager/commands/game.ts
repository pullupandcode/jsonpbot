import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const game: CommandItem = {
  name: "game",
  description: "Find out what we're playing right now!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Game);
  },
};

export default game;
