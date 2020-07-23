import Twitch from "@jsonpbot/twitch";
import { bot } from "@jsonpbot/discord";
let tw = new Twitch();

tw.run().then(() => {
  console.log("started");
});
bot.listen().then(() => {
  console.log("Logged in!");
}).catch((error) => {
  console.log("Oh no! ", error);
});
