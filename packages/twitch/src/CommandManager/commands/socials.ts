import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const socials: CommandItem = {
  name: "socials",
  description: "The social accounts where you can find Jay Phillz!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Socials);
  },
};

export default socials;
