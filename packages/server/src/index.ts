/** remove this section */
import { User } from "./entity/User";
import { getConnection } from "typeorm";
import "./db/connection";

import Twitch from "@jsonpbot/twitch";
import { bot } from "@jsonpbot/discord";

import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");

const PORT: string | number = process.env.PORT || 6000;
const app = express();

app.use(bodyParser());
app.use(cookieParser());

// app.get("/test", async (req, res) => {
//   console.log("hit");
//   const result = await getConnection().manager.findAndCount(User);
//   res.json({ result });
// });

/** 
 * instantiate our bot
 */
let tw = new Twitch();

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
  tw.run().then(() => {
    console.log("started");
  });
  bot.listen().then(() => {
    console.log("Logged in!");
  }).catch((error) => {
    console.log("Oh no! ", error);
  });
});
