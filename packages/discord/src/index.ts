import container from "./inversify.config";
import { BotTypes } from "./types";
import { Bot } from "./bot";
export let bot = container.get<Bot>(BotTypes.Bot);
// bot.listen().then(() => {
//   console.log("Logged in!");
// }).catch((error) => {
//   console.log("Oh no! ", error);
// });
