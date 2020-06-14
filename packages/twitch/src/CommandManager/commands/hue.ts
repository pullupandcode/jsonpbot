import { CommandMessages } from "../../constants";
import { CommandContext } from "../types";
import HueService from "../../services/hue";
import { CommandItem } from "../types";

const hue: CommandItem = {
  name: "hue",
  description: "command to control hue lights during stream",
  run: async (ctx: CommandContext) => {
    // console.log(ctx);
    switch (ctx.cmdParams[0]) {
      case "rainbow":
      default:
        HueService.getInstance().setColorCycle();
        break;
    }
  },
};

export default hue;

// async function hue(ctx: CommandContext): Promise<any> {
//   const Hue = HueService.getInstance();
//   const { chat, channel } = ctx;
//   console.log(ctx);

//   const lightGroups = await Hue.getGroups();
//   for (const group in lightGroups) {
//     if (lightGroups[group].name === "Office") {
//       let groupId = group;

//       await hue.setGroupState(groupId, groupState);
//       chat.say(channel, CommandMessages.Hue);
//     }
//   }
// }
