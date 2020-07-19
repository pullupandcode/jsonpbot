import * as dot from "dotenv";
dot.config();

import TwitchJs, { ApiVersions } from "twitch-js";
import { client as WebSocketClient, connection } from "websocket";
import * as PubSub from "./handlers/pubsub";
import CommandManager from "./CommandManager";
import RedemptionManager from "./RedemptionManager";
const { env } = process;

export default class Twitch {
  private chat: any;
  private api: any;
  private ws: WebSocketClient;
  private CommandManager: CommandManager;
  private pingTimerId: NodeJS.Timeout | null;

  constructor() {
    const { chat, api } = new TwitchJs({
      token: `${env.TWITCH_ACCESS_TOKEN}`,
      username: `${env.TMI_USER}`,
    });

    this.chat = chat;
    this.api = api;
    this.ws = new WebSocketClient();
    this.CommandManager = CommandManager.getInstance();
    this.pingTimerId = null;
  }

  async run() {
    await this.chatInit();
    console.log("chat connected");
    this.socketInit();
    console.log("pubsub connected");
  }

  async chatInit() {
    await this.chat.connect();
    await this.chat.join(`${env.TMI_CHANNELS}`);
    await this.chat.on(
      TwitchJs.Chat.Events.PRIVATE_MESSAGE,
      async (ctx) => {
        if (!ctx.isSelf && ctx.message.startsWith("!")) {
          let [action, ...params] = ctx.message.substr(1).split(" ");
          ctx.cmdParams = params;
          console.log(this.CommandManager.getCommand(action));
          this.CommandManager.getCommand(action) &&
            this.CommandManager.getCommand(action).run(
              { chat: this.chat, api: this.api, cmdParams: params, ...ctx },
            );
        }
      },
    );
  }

  socketInit() {
    this.ws.on("connect", this.socketListeners);
    this.ws.connect("wss://pubsub-edge.twitch.tv");
  }

  async socketListeners(connection: connection) {
    connection.on("message", PubSub.socketHandler);
    connection.on("error", PubSub.socketError);
    connection.on("close", PubSub.socketClose);

    connection.send(
      PubSub.subscribeHandler(env.TWITCH_CHANNEL_ID, env.USER_TOKEN_ALL_SCOPES),
    );

    if (this.pingTimerId) {
      clearInterval(this.pingTimerId);
    }

    this.pingTimerId = setInterval(() => {
      connection.send(JSON.stringify({
        type: "PING",
      }));
    }, 1000 * 50 * 5); // roughly every 4 minutes, 12 seconds, we send a PING
  }
}
