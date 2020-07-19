import { CommandContext, CommandItem } from "../types";
import CommandManager from "../index";

const help: CommandItem = {
  name: "help",
  description: "get all the help we have available",
  run: async (ctx: CommandContext) => {
    const { chat, channel } = ctx;

    let commandList = await CommandManager.getInstance().getCommandList();
    let commandTextArray = [];
    for (let command of commandList) {
      commandTextArray.push(`!${command.name}`);
    }

    let cmdString = commandTextArray.join(" / ");
    console.log(cmdString);
    chat.say(
      channel,
      cmdString,
    );
  },
};

export default help;
