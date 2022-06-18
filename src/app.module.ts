import { Module } from '@nestjs/common';
import { PingCommand } from './discord/commands/ping.command';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [DiscordModule],
  controllers: [],
  providers: [PingCommand],
})
export class AppModule {}
