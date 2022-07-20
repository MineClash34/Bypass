const api = require("../api/function.js");
const config = require("../config.json");
const assetsConfig = require("./assetsConfig.json");
const fs = require("fs");
module.exports = async function () {
    var isEmbed = false;
    var time;
    var interval;
    const timer = require("./timer.json");
    if (isNaN(Number(config.hrTiming))) {
        console.log("SelfBot ERROR : Le Timing du hr n'est pas un chiffre ! Merci d'indiquer un nombre de MINUTES !");
        process.exit(1);
    }
    if (Number(timer.hr) === 0 || Number(timer.hr) < Date.now()) {
        if (assetsConfig.onCaptcha === "true") {
            setTimeout(() => { 
                module.exports() 
            }, 30000);
        } else {
            api.sendMessage(config.channelID, ">hr");
            var before = new Date();

            setTimeout(async () => {
                await api.getMessages(config.channelID).then((msgs) => {
                    var count = 0;
                    msgs.forEach((m) => {
                        var msgDate = new Date(m.timestamp);
                        if (m.content.includes("- You gained :")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Hr claimed.");
                                            assetsConfig.manaCount+=Number(m.content.split(" Mana ")[1].split(" and ")[0]);
                                            count++;
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Hr claimed.");
                                            assetsConfig.manaCount+=Number(m.content.split(" Mana ")[1].split(" and ")[0]);
                                            count++;
                                        }
                                    }
                                }
                            }
                        } else if (m.embeds[0]) {
                            if (m.embeds[0].type === "rich") {
                            if (m.embeds[0].fields) {
                            if (m.embeds[0].fields.length > 0) {
                            if (m.embeds[0].title) {
                            if (m.embeds[0].title === "Timer - Cannot do that yet !" && m.embeds[0].fields[0].name === "Time remaining") {
                                if (before.getUTCDay() === msgDate.getUTCDay()) {
                                    if (before.getUTCMinutes() === 59) {
                                        if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Hr already in cooldown.");
                                                count++;
                                                isEmbed = true;
                                                time = m.embeds[0].fields[0].value;
                                            }
                                        }
                                    } else {
                                        if (before.getUTCHours() === msgDate.getUTCHours()) {
                                            if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                if (config.showInfo === "true") console.log("Hr already in cooldown.");
                                                count++;
                                                isEmbed = true;
                                                time = m.embeds[0].fields[0].value;
                                            }
                                        }
                                    }
                                }
                            }
                            }
                            }
                            }
                            }
                        }
                    })
                    if (count <= 0) {
                        module.exports();
                    } else {
                        if (isEmbed) {
                            var random = Math.random();
                            var minAndSecMilisec = (Number(time.includes("m") ? time.split("m")[0] : 0) * 60000) + (Number(time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0] : 0));
                            if (random < 0.5) var timeAdd = (Number(config.hrTiming) * 60000 - (3600000 - minAndSecMilisec)) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            else var timeAdd = (Number(config.hrTiming) * 60000 - (3600000 - minAndSecMilisec)) - (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            timer.hr = (Date.now() + timeAdd).toString();
                            fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                if (err) throw err;
                                module.exports();
                            })
                            fs.writeFile("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2), function(err) {
                                if (err) throw err;
                                module.exports();
                            })
                        } else {
                            var random = Math.random();
                            if (random < 0.5) var timeAdd = (Number(config.hrTiming) * 60000) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            else var timeAdd = (Number(config.hrTiming) * 60000) - (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            timer.hr = (Date.now() + timeAdd).toString();
                            fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                if (err) throw err;
                                module.exports();
                            })
                            fs.writeFile("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2), function(err) {
                                if (err) throw err;
                                module.exports();
                            })
                        }
                    } 
                })
            }, 30000)
        }
    } else {
        interval = setInterval(function() {
            if (Date.now() >= Number(timer.hr)) {
                clearInterval(interval);
                if (assetsConfig.onCaptcha === "true") {
                    setTimeout(() => { 
                        module.exports() 
                    }, 30000);
                } else {
                    api.sendMessage(config.channelID, ">hr");
                    var before = new Date();
                    
                    setTimeout(async () => {
                        await api.getMessages(config.channelID).then((msgs) => {
                            var count = 0;
                            msgs.forEach((m) => {
                                var msgDate = new Date(m.timestamp);
                                if (m.content.includes("- You gained :")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Hr claimed.");
                                                    assetsConfig.manaCount+=Number(m.content.split(" Mana ")[1].split(" and ")[0]);
                                                    count++;
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Hr claimed.");
                                                    assetsConfig.manaCount+=Number(m.content.split(" Mana ")[1].split(" and ")[0]);
                                                    count++;
                                                }
                                            }
                                        }
                                    }
                                } else if (m.embeds[0]) {
                                    if (m.embeds[0].type === "rich") {
                                    if (m.embeds[0].fields) {
                                    if (m.embeds[0].fields.length > 1) {
                                    if (m.embeds[0].title) {
                                    if (m.embeds[0].title === "Timer - Cannot do that yet !" && m.embeds[0].fields[0].name === "Time remaining") {
                                        if (before.getUTCDay() === msgDate.getUTCDay()) {
                                            if (before.getUTCMinutes() === 59) {
                                                if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                    if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                        if (config.showInfo === "true") console.log("Hr already in cooldown.");
                                                        count++;
                                                        isEmbed = true;
                                                        time = m.embeds[0].fields[0].value;
                                                    }
                                                }
                                            } else {
                                                if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                    if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                        if (config.showInfo === "true") console.log("Hr already in cooldown.");
                                                        count++;
                                                        isEmbed = true;
                                                        time = m.embeds[0].fields[0].value;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    }
                                    }
                                    }
                                    }
                                }
                            })
                            if (count <= 0) {
                                module.exports();
                            } else {
                                if (isEmbed) {
                                    var random = Math.random();
                                    var minAndSecMilisec = (Number(time.includes("m") ? time.split("m")[0] : 0) * 60000) + (Number(time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0] : 0));
                                    if (random < 0.5) var timeAdd = (Number(config.hrTiming) * 60000 - (3600000 - minAndSecMilisec)) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                    else var timeAdd = (Number(config.hrTiming) * 60000 - (3600000 - minAndSecMilisec)) - (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                    timer.hr = (Date.now() + timeAdd).toString();
                                    fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                        if (err) throw err;
                                        module.exports();
                                    })
                                    fs.writeFile("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2), function(err) {
                                        if (err) throw err;
                                        module.exports();
                                    })
                                } else {
                                    var random = Math.random();
                                    if (random < 0.5) var timeAdd = (Number(config.hrTiming) * 60000) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                    else var timeAdd = (Number(config.hrTiming) * 60000) - (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                    timer.hr = (Date.now() + timeAdd).toString();
                                    fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                        if (err) throw err;
                                        module.exports();
                                    })
                                    fs.writeFile("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2), function(err) {
                                        if (err) throw err;
                                        module.exports();
                                    })
                                }
                            } 
                        })
                    }, 30000)
                }
            }
        }, 15000)
    }
    
}