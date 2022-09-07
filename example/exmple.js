/**
 * ulleungdo 모듈은 현재 3개의 type 를 제공합니다. ["cat","curl","js"]
 * interaction 받아 모든것을 처리합니다 deferReply() 쓰지마세요.
*/

/**exmple */

/**index.js */
const { Client, IntentsBitField, Partials } = require('discord.js');
const client = new Client({ intents: new IntentsBitField(130815), partials: [Partials.Message, Partials.Channel, Partials.Reaction] })

const ulleungdo = require('ulleungdo')
const ulleungdoHandler = new ulleungdo(client, { owner: ["오너ID"] ,  owners_Message : "당신을 개발자 또는 소유자가 아닙니다."})
module.exports = ulleungdoHandler

client.login('token')

/** commands/ulleungdo.js */

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