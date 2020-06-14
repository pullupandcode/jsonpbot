import { handleRedemptions } from "../redemptions/handlers";
export const handlePubSubMessages = ({ type, utf8Data = "" }) => {
  switch (type) {
    case "RESPONSE":
      console.log(JSON.parse(utf8Data));
      break;
    case "MESSAGE":
      return handleRedemptions(JSON.parse(utf8Data));
  }
};
