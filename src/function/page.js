const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

exports.page = async function (interaction, text, lag) {
    let pages = []
    let page = 0

    for (let i = 0; i < text.length; i += 1950) {
        let data2 = text.substring(i, Math.min(text.length, i + 1950))
        pages.push(data2)
    }

    if (!pages[1]) {
        return interaction.editReply({ content: `page ${page + 1}/${pages.length}` + "```" + `${lag}\n` + `${pages[0]}` + "\n```" })
    } else {
        const but1 = new ButtonBuilder().setCustomId("next").setLabel('다음').setStyle(ButtonStyle.Primary)
        const dedbut1 = new ButtonBuilder().setDisabled(true).setCustomId("next").setLabel('다음').setStyle(ButtonStyle.Primary)
        const but2 = new ButtonBuilder().setCustomId("before").setLabel('이전').setStyle(ButtonStyle.Primary)
        const dedbut2 = new ButtonBuilder().setDisabled(true).setCustomId("before").setLabel('이전').setStyle(ButtonStyle.Primary)
        const but3 = new ButtonBuilder().setCustomId("stop").setLabel('정지').setStyle(ButtonStyle.Danger)
        const dedbut3 = new ButtonBuilder().setDisabled(true).setCustomId("stop").setLabel('정지').setStyle(ButtonStyle.Primary)

        await interaction.editReply({ content: `page ${page + 1}/${pages.length}` + "```" + `${lag}\n` + `${pages[page]}` + "\n```", components: [new ActionRowBuilder().addComponents([but2, but3, but1])] })

        const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 * 10 * 5, idle: 30e3 });

        collector.on("collect", async (button) => {
            if (button.customId === "next") {
                await button.deferUpdate().catch(() => { });
                page = page + 1 < pages.length ? ++page : 0;
                await interaction.editReply({ content: `page ${page + 1}/${pages.length}` + "```" + `${lag}\n` + `${pages[page]}` + "\n```", components: [new ActionRowBuilder().addComponents([but2, but3, but1])] })
            } else if (button.customId === "before") {
                await button.deferUpdate().catch(() => { });
                page = page > 0 ? --page : pages.length - 1;
                await interaction.editReply({ content: `page ${page + 1}/${pages.length}` + "```" + `${lag}\n` + `${pages[page]}` + "\n```", components: [new ActionRowBuilder().addComponents([but2, but3, but1])] })
            } else if (button.customId === "stop") {
                await button.deferUpdate().catch(() => { });
                await collector.stop();
            } else return;
        });

        collector.on("end", async () => { return await interaction.editReply({ content: `page ${page + 1}/${pages.length}` + "```" + `${lag}\n` + `${pages[page]}` + "\n```", components: [new ActionRowBuilder().addComponents([dedbut2, dedbut3, dedbut1])] }); })
    }
}
