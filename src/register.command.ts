import { REST, Routes, SlashCommandBuilder } from 'discord.js';

import { Command } from './resources/command.constraints';

const commands = [
  new SlashCommandBuilder()
    .setName(Command.PING)
    .setNameLocalization('ko', '핑')
    .setDescription('Replies with pong!')
    .setDescriptionLocalization('ko', '퐁 하고 답해줍니다!'),
];

export const registerCommands = (token: string, clientId: string) => {
  const rest = new REST().setToken(token);
  rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'));
};
