import { ChatInputCommandInteraction } from 'discord.js';

export const handlePingInteraction = (interaction: ChatInputCommandInteraction) => {
  interaction.reply({ content: 'Pong!', ephemeral: true });
};
