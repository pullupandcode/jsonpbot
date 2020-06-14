import { CommandContext, CommandItem } from "../types";
import CommandManager from "../index";

const commands: CommandItem = {
  name: "commands",
  description: "get all the commands we have available",
  run: async (ctx: CommandContext) => {
    let commandList = CommandManager.getInstance().getCommandList();
    let commandTextArray = [];
    for (let command of commandList) {
      commandTextArray.push(`!${command.name}: ${command.description};\n `);
    }
    const { chat, channel, cmdParams } = ctx;
    chat.say(
      channel,
      `Commands: ${commandTextArray.join(" ")}`,
    );
  },
};

export default commands;
