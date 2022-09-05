/**exmple */

/**index.js */
const { Client, IntentsBitField, Partials } = require('discord.js');
const client = new Client({ intents: new IntentsBitField(130815), partials: [Partials.Message, Partials.Channel, Partials.Reaction] })
const fs = require('fs')

const ulleungdo = require('ulleungdo')
const ulleungdoHandler = new ulleungdo(client, { owner: ["오너ID"] })

// owner 란 미입력가능 없을시 에플리케이션에서 소유자를찿음.
// await interaction.deferReply() 기본적으로탑제 interaction.editReply() 응답

client.once('ready', async () => {
    console.log(`successfully ${client.user.username} bot login success`)
});

module.exports = ulleungdoHandler;
client.login('토큰')

/** commands/ulleungdo.js */

// 어디까지나 예제임 오류뜨면 태정

const { SlashCommandBuilder } = require('discord.js');
const ulleungdoHandler = require('../index.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ulleungdo')
        .setDescription('discord.js v14 debugging tool')
        .addStringOption(option => option.setName('category').setDescription('type').addChoices({ name: 'cat', value: 'cat' },{ name: 'curl', value: 'curl' },{ name: 'js', value: 'js' }))
        .addStringOption(option => option.setName('input').setDescription('args')),
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */
    async execute(interaction, client) {
        const category = interaction.options.getString('category');
        const args = interaction.options.getString('input');
        await ulleungdoHandler.start(interaction, category, args)
    }
}