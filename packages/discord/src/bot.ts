import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { BotTypes } from "./types";
import { RolesService } from "./services/RolesService";

@injectable()
export class Bot {
  @inject(BotTypes.Client)
  private client: Client;
  @inject(BotTypes.Token)
  private readonly token: string;
  @inject(BotTypes.RolesService)
  private rm: RolesService;

  public listen(): Promise<string> {
    this.client.on("message", (message: Message) => {
      console.log(message.content);
    });
    this.client.on("messageReactionAdd", async (reaction, user) => {
      await this.rm.handle(reaction, user);

      // When we receive a reaction we check if the reaction is partial or not
      if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
          await reaction.fetch();
        } catch (error) {
          console.log(
            "Something went wrong when fetching the message: ",
            error,
          );
          // Return as `reaction.message.author` may be undefined/null
          return;
        }
      }
    });

    return this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}
