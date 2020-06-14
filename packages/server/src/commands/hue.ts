// import { Chat } from "twitch-js";
// import { CommandOpts } from "../definitions/command";
// import { HueService } from "../services";

// const Hue = new HueService({
//   ip_address: process.env.HUE_IP,
//   hue_username: process.env.HUE_USERNAME,
//   hub_id: process.env.HUE_ID,
// });

// let type = "lights";

// export async function hue(params: CommandOpts): void {
//   const { chat, channel } = params;
//   Hue.getGroups().then((lightGroups) => {
//     for (const group in lightGroups) {
//       if (lightGroups[group].name === "Office") {
//         // switch lights on/off/colors

//         let groupId = group;
//         const groupState = {
//           alert: "lselect",
//           effect: "none",
//         };
//         Hue.setGroupState(groupId, groupState).then((response) => {} // chat.say(channel, 'succeeded')
//         );
//       }
//     }
//   });
//   // chat.say(channel, `${lightData['1']['state']}`);
// }
