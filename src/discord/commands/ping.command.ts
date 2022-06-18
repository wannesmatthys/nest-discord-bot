import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, Options } from 'necord';
import { CommandInteraction } from 'discord.js';

@Injectable()
export class PingCommand {
  @SlashCommand('ping', 'Replies with ping!')
  public async onLength(@Context() [interaction]: [CommandInteraction]) {
    return interaction.reply({ content: `Pong!` });
  }
}
