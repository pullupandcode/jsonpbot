import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const discord: CommandItem = {
  name: "discord",
  description: "We got a discord server",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    console.log("running");
    chat.say(channel, CommandMessages.Discord);
  },
};

export default discord;
