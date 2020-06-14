import { Chat, Api } from "twitch-js";

export interface ChatContext {
  isSelf: boolean;
  message: string;
  channel: string;
  username: string;
  target: string;
}

export interface SingletonClass<T> {
  getInstance(): T;
}
