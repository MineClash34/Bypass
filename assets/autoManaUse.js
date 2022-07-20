const api = require("../api/function.js");
const config = require("../config.json");
const assetsConfig = require("./assetsConfig.json");
const fs = require("fs");
module.exports = async function () {
    setInterval(() => {
        if (assetsConfig.manaCount >= 2001) {
            if (config.autoMine === "true") {
                api.sendMessage(config.channelID, ">mi 2001");
                var before = new Date();

                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp);
                            if (m.embeds[0]) {
                                if (m.embeds[0].type !== "rich") return;
                                if (!m.embeds[0].fields) return;
                                if (m.embeds[0].fields.length < 1) return;
                                if (m.embeds[0].fields[0].name === "Ressources minées" || m.embeds[0].fields[0].name === "Resources collected") {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto mine performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto mine performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (m.content === "You don't have enough mana") {
                                if (before.getUTCDay() === msgDate.getUTCDay()) {
                                    if (before.getUTCMinutes() === 59) {
                                        if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto mine");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    } else {
                                        if (before.getUTCHours() === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto mine");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    })
                }, 30000)

            } else if (config.autoChop === "true") {
                api.sendMessage(config.channelID, ">chop 2001");
                var before = new Date();

                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp);
                            if (m.embeds[0]) {
                                if (m.embeds[0].type !== "rich") return;
                                if (!m.embeds[0].fields) return;
                                if (m.embeds[0].fields.length < 1) return;
                                if (m.embeds[0].fields[0].name === "Ressources minées" || m.embeds[0].fields[0].name === "Resources collected") {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto chop performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto chop performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (m.content === "You don't have enough mana") {
                                if (before.getUTCDay() === msgDate.getUTCDay()) {
                                    if (before.getUTCMinutes() === 59) {
                                        if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto chop");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    } else {
                                        if (before.getUTCHours() === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto chop");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    })
                }, 3000)

            } else if (config.autoFish === "true") {
                api.sendMessage(config.channelID, ">fi 2001");
                var before = new Date();

                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp);
                            if (m.embeds[0]) {
                                if (m.embeds[0].type !== "rich") return;
                                if (!m.embeds[0].fields) return;
                                if (m.embeds[0].fields.length < 1) return;
                                if (m.embeds[0].fields[0].name === "Ressources minées" || m.embeds[0].fields[0].name === "Resources collected") {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto fish performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto fish performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (m.content === "You don't have enough mana") {
                                if (before.getUTCDay() === msgDate.getUTCDay()) {
                                    if (before.getUTCMinutes() === 59) {
                                        if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto fish");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    } else {
                                        if (before.getUTCHours() === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto fish");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    })
                }, 30000)

            } else if (config.autoDig === "true") {
                api.sendMessage(config.channelID, ">dig 2001");
                var before = new Date();

                setTimeout(async () => {
                    await api.getMessages(config.channelID).then((msgs) => {
                        msgs.forEach((m) => {
                            var msgDate = new Date(m.timestamp);
                            if (m.embeds[0]) {
                                if (m.embeds[0].type !== "rich") return;
                                if (!m.embeds[0].fields) return;
                                if (m.embeds[0].fields.length < 1) return;
                                if (m.embeds[0].fields[0].name === "Ressources minées" || m.embeds[0].fields[0].name === "Resources collected") {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto dig performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Auto dig performed.");
                                                    assetsConfig.manaCount-=2001;
                                                    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (m.content === "You don't have enough mana") {
                                if (before.getUTCDay() === msgDate.getUTCDay()) {
                                    if (before.getUTCMinutes() === 59) {
                                        if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto dig");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    } else {
                                        if (before.getUTCHours() === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Not enough mana to perform auto dig");
                                                assetsConfig.manaCount = (assetsConfig.manaCount) - 2001 < 0 ? 0 : assetsConfig.manaCount - 2001;
                                                fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    })
                }, 30000)

            }
        }
    }, 6000)
}