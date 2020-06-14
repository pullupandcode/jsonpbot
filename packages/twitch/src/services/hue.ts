import Hue, { HueServiceConfig } from "@jsonpbot/hue";
const { env } = process;

const hueConfig: HueServiceConfig = {
  ip_address: env.HUE_IP,
  hub_id: env.HUB_ID,
  hue_username: env.HUE_USERNAME,
};

/***
 * Hue Service Singleton
 */
export default class HueService extends Hue {
  private static instance: HueService;

  private constructor(params: HueServiceConfig) {
    super(params);
  }

  public static getInstance(): HueService {
    if (!HueService.instance) {
      HueService.instance = new HueService(hueConfig);
    }

    return HueService.instance;
  }

  public getGroupIdByRoom(room: string) {
    return HueService.instance.getGroups().then((groups) => {
      for (const group in groups) {
        return groups[group].name === room && group;
      }
    });
  }

  public async setColorCycle(groupId: string = "4") {
    const groupState = {
      alert: "lselect",
      effect: "colorloop",
      transitiontime: 1,
    };

    await HueService.instance.setGroupState(groupId, groupState);
  }
}
