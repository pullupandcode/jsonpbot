import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const podcast: CommandItem = {
  name: "podcast",
  description: "The most recent podcast feature I had!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Podcast);
  },
};

export default podcast;
