import {
  Message,
  MessageReaction,
  User,
  PartialUser,
  GuildMember,
} from "discord.js";
import { inject, injectable } from "inversify";
import { BotTypes } from "../types";

@injectable()
export class RolesService {
  private messageIdsForRoles: Array<string> = [
    "733483593992503309",
    "735539312241672253",
  ];
  private acceptanceReaction: string = "itsjay201337";
  private streamerReaction: string = "📹";
  private gamerReaction: string = "🎮";
  private fightClubReaction: string = "🔥";
  private devReaction: string = "💻";
  private artistReaction: string = "🖌️";

  handle(
    reaction: MessageReaction,
    user: User | PartialUser,
  ): Promise<Boolean> {
    let selectedRole: string;
    const currentUser = reaction.message.guild.members.cache.find((member) =>
      member.id === user.id
    );
    console.log(
      reaction.message.id,
      this.messageIdsForRoles.includes(reaction.message.id.toString()),
      reaction.emoji.name,
    );

    if (this.messageIdsForRoles.includes(reaction.message.id)) {
      switch (reaction.emoji.name) {
        case this.artistReaction:
          selectedRole = "Creatives";
          break;
        case this.devReaction:
          selectedRole = "Developers";
          break;
        case this.acceptanceReaction:
          selectedRole = "The Block";
          break;
        case this.fightClubReaction:
          selectedRole = "Fight Club";
          break;
        case this.streamerReaction:
          selectedRole = "Streamers";
          break;
        case this.gamerReaction:
          selectedRole = "Gamers";
          break;
        default:
          selectedRole = null;
          break;
      }

      if (!selectedRole) return Promise.resolve(false);
      const roleToSet = reaction.message.guild.roles.cache.find((role) =>
        role.name === selectedRole
      );
      currentUser.roles.add(roleToSet.id).catch(console.error);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}
