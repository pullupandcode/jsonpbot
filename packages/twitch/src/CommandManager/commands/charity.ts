import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const charity: CommandItem = {
  name: "charity",
  description: "See what awesome cause we're supporting on the stream!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Charity);
  },
};

export default charity;
