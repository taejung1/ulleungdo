# Ulleungdoa
## dokdo에서 영감을 받은 discord.js v14 debugging tool

# Installation
```js
npm i ulleungdo
```
ulleungdo는 discord.js V14 이상만 지원합니다.

# Example
```js
const { Client, IntentsBitField, Partials } = require('discord.js');
const client = new Client({ intents: new IntentsBitField(130815), partials: [Partials.Message, Partials.Channel, Partials.Reaction] })
const fs = require('fs')

const ulleungdo = require('ulleungdo')
const ulleungdoHandler = new ulleungdo(client, { owner: ["오너ID"] , owners_Message : "당신을 개발자 또는 소유자가 아닙니다."  })
module.exports = ulleungdoHandler;

client.once('ready', async () => {
    console.log(`successfully ${client.user.username} bot login success`)
});


client.login('토큰')
```
SlashCommandBuilder
```js
const { SlashCommandBuilder } = require('discord.js');
const ulleungdoHandler = require('../index.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ulleungdo')
        .setDescription('discord.js v14 debugging tool')
        .addStringOption(option => option.setName('category').setDescription('type').addChoices({ name: 'cat', value: 'cat' },{ name: 'curl', value: 'curl' },))
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
```
### ulleungdo 는 현재 3개의 type 를 제공합니다. ["cat","curl","js"]
### ulleungdo 는 상호작용을 받아 모든것을 처리합니다. ex : deferReply()

# Issue

github : [link](https://github.com/taejung1/ulleungdo)  
discord : 태정#9874  
email : taejung@taejung.xyz