import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

import { Command } from '@src/resources/command-constraints';

export const pingCommandBuilder = new SlashCommandBuilder()
  .setName(Command.PING)
  .setNameLocalization('ko', '핑')
  .setDescription('Replies with pong!')
  .setDescriptionLocalization('ko', '퐁 하고 답해줍니다!')
  .addBooleanOption((builder) =>
    builder
      .setRequired(false)
      .setName('ephemeral')
      .setDescription('Make the response ephemeral. True by default')
      .setNameLocalization('ko', '비공개')
      .setDescriptionLocalization('ko', '응답이 나에게만 보일지 여부를 설정합니다. 기본 True'),
  );

export const handlePingInteraction = (interaction: ChatInputCommandInteraction) => {
  const ephemeralOption: boolean = interaction.options.getBoolean('ephemeral', false) ?? true;
  interaction.reply({ content: 'Pong!', ephemeral: ephemeralOption });
};
