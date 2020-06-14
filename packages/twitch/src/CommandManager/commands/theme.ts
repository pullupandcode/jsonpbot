import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const theme: CommandItem = {
  name: "theme",
  description: "Find out what theme we're using",
  run: async (ctx: CommandContext) => {
    ctx.chat.say(ctx.channel, CommandMessages.Theme);
  },
};

export default theme;
