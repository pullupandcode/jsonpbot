import { CommandItem, CommandContext } from "../types";
import { CommandMessages } from "../../constants";

const project: CommandItem = {
  name: "project",
  description: "Find out what we're working on tonight on the stream!",
  run: async function (ctx: CommandContext) {
    const { chat, channel } = ctx;
    chat.say(channel, CommandMessages.Project);
  },
};

export default project;
