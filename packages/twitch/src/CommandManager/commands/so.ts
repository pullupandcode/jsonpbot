import { CommandContext, CommandItem } from "../types";

const so: CommandItem = {
  name: "so",
  description: "command to control hue lights during stream",
  run: async (ctx: CommandContext) => {
    console.log(ctx);
    const { chat, channel, cmdParams } = ctx;
    chat.say(
      channel,
      `Shout out to @${
        cmdParams[0]
      }! Make sure you hit them up at https://twitch.tv/${cmdParams[0]}`,
    );
  },
};

export default so;
