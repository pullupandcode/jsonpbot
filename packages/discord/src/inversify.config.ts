import "reflect-metadata";
import { Container } from "inversify";
import { BotTypes } from "./types";
import { Bot } from "./bot";
import { Client } from "discord.js";
import { RolesService } from "./services/RolesService";

let container = new Container();

container.bind<Bot>(BotTypes.Bot).to(Bot).inSingletonScope();
container.bind<RolesService>(BotTypes.RolesService).to(RolesService)
  .inSingletonScope();
container.bind<Client>(BotTypes.Client).toConstantValue(
  new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }),
);
container.bind<string>(BotTypes.Token).toConstantValue(
  process.env.DISCORD_BOT_TOKEN,
);

export default container;
