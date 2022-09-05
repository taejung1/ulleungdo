const { inspect } = require('util');

module.exports = async function js(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */
    await interaction.deferReply().catch(() => { });
    if (!interaction.user.id == parent.client.owner[0]) {
        return interaction.editReply('개발자만 사용가능합니다.')
    }
    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    try {
        const data = await eval(`${args}`);
        interaction.editReply("```js\n" + inspect(data) + "```")
    } catch (err) {
        interaction.editReply("ERR" + "```js\n" + `${data}` + "```")
    }
} 