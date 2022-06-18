import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Intents } from 'discord.js';
import { NecordModule } from 'necord';
import { DiscordService } from './discord.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
      ],
      development: [process.env.GUILD_ID],
    }),
  ],
  providers: [DiscordService],
})
export class DiscordModule {}
