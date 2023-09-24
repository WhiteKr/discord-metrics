import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

import { handlePingInteraction } from './interactions/ping';
import { registerCommands } from './register-command';
import { Command } from './resources/command-constraints';

dotenv.config();

if (typeof process.env.TOKEN !== 'string') throw new Error('TOKEN env error');
if (typeof process.env.CLIENT_ID !== 'string') throw new Error('CLIENT_ID env error');

const { TOKEN, CLIENT_ID } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  registerCommands(TOKEN, CLIENT_ID);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case Command.PING:
      handlePingInteraction(interaction);
      break;
    default:
      throw new Error(`Unknown command: ${interaction.commandName}`);
  }
});

client.login(TOKEN);
