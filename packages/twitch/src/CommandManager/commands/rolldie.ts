import { CommandItem, CommandContext } from "../types";
import * as rollHandler from "../../handlers/random";

const rollDie: CommandItem = {
  name: "rolldie",
  description: "roll a die. pass in the sides. may not work yet. ",
  run: async function (ctx: CommandContext) {
    const { chat, channel, cmdParams } = ctx;
    let roll = parseInt(cmdParams[0], 10);
    chat.say(channel, `You rolled a ${rollHandler.rollDie(8)}`);
  },
};

export default rollDie;
