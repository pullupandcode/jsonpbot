import * as dot from "dotenv";
dot.config();

import TwitchJs from "twitch-js";
import WebSocket from "ws";

const { env } = process;

const commandHandler = (twitchMessage) => console.log(twitchMessage.username);

export default class Twitch {
  chat: any;
  api: any;
  pubSub: WebSocket;

  constructor() {
    const { chat, api } = new TwitchJs({
      token: `${env.TWITCH_ACCESS_TOKEN}`,
      username: `${env.TMI_USER}`,
    });

    this.chat = chat;
    this.api = api;
    this.pubSub = new WebSocket("wss://pubsub-edge.twitch.tv");
  }

  async run() {
    await this.chatInit();
    await this.pubSubInit();
  }

  async chatInit() {
    await this.chat.connect();
    await this.chat.join(`${env.TMI_CHANNELS}`);
    await this.chat.on(TwitchJs.Chat.Events.PRIVATE_MESSAGE, commandHandler);
  }

  async pubSubInit() {
    this.pubSub.on("open", (ws) => {
      ws.send(JSON.stringify({
        "type": "LISTEN",
        "data": {
          "topics": [`channel-points-channel-v1.${env.TWITCH_CHANNEL_ID}`],
          "auth_token": env.USER_TOKEN_ALL_SCOPES,
        },
      }));
    });
  }
}
