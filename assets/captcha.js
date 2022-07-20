const api = require("../api/function.js");
const config = require("../config.json");
const assetsConfig = require("./assetsConfig.json");
const fs = require("fs");
module.exports = async function () {
    if (assetsConfig.onCaptcha === "true") return;
    assetsConfig.onCaptcha = "true";
    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
    api.sendMessage(config.channelID, ">captcha");
    var before = new Date();
    setTimeout(async () => {
        await api.getMessages(config.channelID).then((msgs) => {
            var count = 0;
            msgs.forEach((m) => {
                var msgDate = new Date(m.timestamp);
                if (m.content.includes("[Système de vérification anti-triche]")) {
                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                        if (before.getUTCMinutes() === 59) {
                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                    if (config.showInfo === "true") console.log("Captcha launched.");
                                    count++;
                                }
                            }
                        } else {
                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                    if (config.showInfo === "true") console.log("Captcha launched.");
                                    count++;
                                }
                            }
                        }
                    }
                } else if (m.content.includes("[Anti-Cheat Verification System]")) {
                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                        if (before.getUTCMinutes() === 59) {
                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                    if (config.showInfo === "true") console.log("Captcha launched.");
                                    count++;
                                }
                            }
                        } else {
                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                    if (config.showInfo === "true") console.log("Captcha launched.");
                                    count++;
                                }
                            }
                        }
                    }
                }
            })
            if (count <= 0) {
                module.exports();
            } 
        })
    }, 30000)
}
