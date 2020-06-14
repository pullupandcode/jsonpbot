import Twitch from "@jsonpbot/twitch";
let tw = new Twitch();

tw.run().then(() => {
  console.log("started");
});
