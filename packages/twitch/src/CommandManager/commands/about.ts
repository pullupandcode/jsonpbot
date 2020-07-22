import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const about: CommandItem = {
  name: "aboutme",
  description: "About me!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    console.log("running");
    chat.say(channel, CommandMessages.About);
  },
};

export default about;
