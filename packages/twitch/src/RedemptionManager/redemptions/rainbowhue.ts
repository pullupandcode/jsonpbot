import { RedemptionItem } from "../types";
import Hue from "../../services/hue";

export const rainbow: RedemptionItem = {
  name: "rainbow",
  description: "color cycle the lights on stream",
  run: async () => {
    console.log(await Hue.getInstance().getGroups());
    await Hue.getInstance().setColorCycle();
    setTimeout(async () => {
      await Hue.getInstance().clearColorCycle();
    }, 15000);
  },
};
