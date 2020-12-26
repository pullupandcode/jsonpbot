import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const speaking: CommandItem = {
  name: "speaking",
  description: "The last speaking engagement I had!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Webcast);
  },
};

export default speaking;
