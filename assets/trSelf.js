const api = require("../api/function.js");
const config = require("../config.json");
const assetsConfig = require("./assetsConfig.json");
module.exports = {
    "time": async function () {
        if (assetsConfig.onCaptcha === "true") return setTimeout(() => { this.time() }, 30000);
        if (config.showInfo === "true") console.log("Tr time.");
                api.sendMessage(config.channelID, ">tr t");
                var before = new Date().getTime();
                var args;

                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        var count = 0;
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp).getTime();
                            args = m.content.split("\n");
                            if (args[0].startsWith("[1/2]") && args[1].startsWith("Shard n°") && args[1].includes(" - ")) {
                                if (msgDate > before) {
                                    count++
                                }
                            }
                        })
                        if (count <= 0) {
                            this.time();
                        }
                    })
                }, 30000)
            },
            "jump": async function(message) {
                if (config.showInfo === "true") console.log("Tr jump.");
                var minutes = message.content.split("\n")[1].split(" - ")[1].includes("m") ? message.content.split("\n")[1].split(" - ")[1].split("m")[0] : 0;
                var secondes = message.content.split("\n")[1].split(" - ")[1].includes("s") ? message.content.split("\n")[1].split(" - ")[1].split("s")[0].includes("m") ? message.content.split("\n")[1].split(" - ")[1].split("s")[0].split("m")[1] : message.content.split("\n")[1].split(" - ")[1].split("s")[0] : 0;
                var totalSec = Number(minutes) * 60 + Number(secondes);
                if (Date.now() > (message.createdTimestamp + totalSec * 1000)) return this.time();
                api.sendMessage(config.channelID, `>tr j ${message.content.split("\n")[1].split("Shard n°")[1].split(" - ")[0]}`);
                var before = new Date().getTime();
                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        var count = 0;
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp).getTime();
                            if (m.content.startsWith("You have virtually jumped on the shard")) {
                                if (msgDate > before) {
                                    count++
                                }
                            }
                        })
                        if (count <= 0) {
                            this.jump(message);
                        }
                    })
                }, 30000)
            },
            "spam": async function (message, client) {
                if (config.showInfo === "true") console.log("Tr spam.");
                if (message.content.split("\n")[1].includes("/")) {
                    await api.sendMessage(config.channelID, ">tr .");
                    await api.sendMessage(config.channelID, ">tr .");
                    await api.sendMessage(config.channelID, ">tr .");
                    await this.time();
                } else if (message.content.split("\n")[1].includes("Available")) {
                    await api.sendMessage(config.channelID, ">tr .");
                    await api.sendMessage(config.channelID, ">tr .");
                    await this.time();
                } else {
                    var minutes = message.content.split("\n")[1].split(" - ")[1].includes("m") ? message.content.split("\n")[1].split(" - ")[1].split("m")[0] : 0;
                    var secondes = message.content.split("\n")[1].split(" - ")[1].includes("s") ? message.content.split("\n")[1].split(" - ")[1].split("s")[0].includes("m") ? message.content.split("\n")[1].split(" - ")[1].split("s")[0].split("m")[1] : message.content.split("\n")[1].split(" - ")[1].split("s")[0] : 0;
                    var totalSec = Number(minutes) * 60 + Number(secondes);
                    if (Date.now() > (message.createdTimestamp + totalSec * 1000)) return this.time();
                    setTimeout(async () => {
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await client.channels.cache.get(config.channelID).send(">tr .");
                        await this.time()
                    }, ((totalSec * 1000) - (totalSec * 10)) + Number(config.trDelay))
                }
                
            }

        }