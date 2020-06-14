import { IMessage } from "websocket";
import RedemptionManager from "../RedemptionManager";

export async function socketHandler(msg: IMessage) {
  if (msg.type !== "utf8") return;
  let parsedData = JSON.parse(msg.utf8Data);
  if (parsedData.type === "RESPONSE" || parsedData.type === "PONG") return;

  let redeemedCommand;
  const { type, data } = JSON.parse(parsedData.data.message);
  const { user, reward } = data.redemption;
  switch (type) {
    case "reward-redeemed":
      redeemedCommand = RedemptionManager.getInstance().getReward(
        normalizeName(reward.title),
      );
      break;
  }

  if (redeemedCommand) await redeemedCommand.run();
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-zA-Z0-9 -]/, "");
}

export function socketError(error) {
  console.log("socket error");
  console.error(error.toString());
}

export function socketClose() {
  console.log("socket closed");
  console.log("socket connection closed");
}

export function subscribeHandler(channel, token) {
  return JSON.stringify({
    "type": "LISTEN",
    "data": {
      "topics": [`channel-points-channel-v1.${channel}`],
      "auth_token": token,
    },
  });
}
