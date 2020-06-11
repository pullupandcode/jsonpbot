import Twitch from "@jsonpbot/twitch";
import { writeSync } from "fs";
let tw = new Twitch();

tw.run().then(() => {
  console.log("started");
});
