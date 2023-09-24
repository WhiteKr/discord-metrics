import { REST, Routes } from 'discord.js';

import { pingCommandBuilder } from './interactions/ping';

const commands = [pingCommandBuilder];

export const registerCommands = (token: string, clientId: string) => {
  const rest = new REST().setToken(token);
  rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'));
};
