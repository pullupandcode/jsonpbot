import { CommandContext, CommandItem } from "../types";
import { ApiVersions } from "twitch-js";

const uptime: CommandItem = {
  name: "uptime",
  description: "How long have I been running my damn mouth!?!?!",
  run: async (ctx: CommandContext) => {
    const { chat, api, channel, cmdParams, username } = ctx;

    const streamData = await api.get(
      `streams/${process.env.TWITCH_CHANNEL_ID}`,
      { version: ApiVersions.Kraken },
    );

    if (!streamData.stream) {
      return chat.say(channel, `Looks like we're currently offline, homie`);
    }
    const { createdAt } = streamData.stream;
    let startTime = Date.parse(createdAt);
    let uptimeLength = new Date().getTime() - startTime;
    let uptimeString = `${
      Math.floor((uptimeLength / (1000 * 60 * 60)) % 60)
    }h, ${
      Math.floor((uptimeLength / 1000 * 60) % 60)
    }m, ${Math.floor(uptimeLength / 1000) % 60}s `;

    chat.say(
      channel,
      `Hey @${username}, we've been up and running for ${uptimeString}`,
    );
  },
};

export default uptime;
