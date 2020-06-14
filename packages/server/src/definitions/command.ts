import { Chat, Api } from "twitch-js";

export interface CommandOpts {
    chat: Chat;
    channel: string;
    api?: Api;
    target?: string;
}