const { inspect } = require('util');
const page = require('../function/page.js')

module.exports = async function js(interaction, parent, args) {
    /**
     * @param {import('discord.js').CommandInteraction} interaction 
    */
    await interaction.deferReply().catch(() => { });
    if (!args) return interaction.editReply({ content: "인수가 없습니다." });

    const { client } = parent;
    

    const data = await new Promise(resolve => resolve(eval(args))).catch(async data => {
        return page.page(interaction, ("```js\n" + `${inspect(data)}` + "\n```"), "js")
    })
    return page.page(interaction, inspect(data), "js")
} 