const api = require("../api/function.js");
const config = require("../config.json");
const assetsConfig = require("./assetsConfig.json");
const fs = require("fs");
module.exports = async function () {
    var interval;
    var isStarted = false;
    var time;
    const timer = require("./timer.json");
    if (Number(timer.shrine) === 0 || Number(timer.shrine) < Date.now()) {
        if (assetsConfig.onCaptcha === "true") {
            setTimeout(() => { 
                module.exports(); 
            }, 30000);
        } else {
            api.sendMessage(config.channelID, ">shrine start");
            var before = new Date();

            setTimeout(async () => {
                await api.getMessages(config.channelID).then((msgs) => {
                    var count = 0;
                    msgs.forEach((m) => {
                        var msgDate = new Date(m.timestamp);
                        if (m.content.includes("You started a shrine ritual. Come back in 4 hours, but don't be too late. ;)")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine started.");
                                            count++;
                                            isStarted = true;
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            count++;
                                            isStarted = true;
                                        }
                                    }
                                }
                            }
                        } else if (m.content.includes("The shrine ritual didn't finish yet. Time left : ")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine pas fini.");
                                            count++;
                                            isStarted = true;
                                            time = m.content.split("The shrine ritual didn't finish yet. Time left : ")[1].split(".")[0];
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine pas fini.");
                                            count++;
                                            isStarted = true;
                                            time = m.content.split("The shrine ritual didn't finish yet. Time left : ")[1].split(".")[0];
                                        }
                                    }
                                }
                            }
                        } else if (m.content.includes("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine just broke.");
                                            isStarted = true;
                                            time = m.content.split("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")[1].split(" hours")[0];
                                            var timeAdd = Number(time) * 3600000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine just broke.");
                                            isStarted = true;
                                            time = m.content.split("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")[1].split(" hours")[0];
                                            var timeAdd = Number(time) * 3600000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                }
                            }  
                        } else if (m.content.includes("Cannot start, try")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine already started and claimable.");
                                            isStarted = true;
                                            var timeAdd = 30000
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine already started and claimable.");
                                            isStarted = true;
                                            var timeAdd = 30000
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                }
                            }  
                        } else if (m.content.includes("You cannot start a new ritual for shrine yet. You may do it again in")) {
                            if (before.getUTCDay() === msgDate.getUTCDay()) {
                                if (before.getUTCMinutes() === 59) {
                                    if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine cassé.");
                                            isStarted = true;
                                            time = m.content.split("You cannot start a new ritual for shrine yet. You may do it again in ")[1].split(".")[0];
                                            var hours = time.includes("h") ? time.split("h")[0] : 0;
                                            var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                                            var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                                            var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                                            var timeAdd = totalMilisec + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                } else {
                                    if (before.getUTCHours() === msgDate.getUTCHours()) {
                                        if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                            if (config.showInfo === "true") console.log("Shrine cassé.");
                                            isStarted = true;
                                            time = m.content.split("You cannot start a new ritual for shrine yet. You may do it again in ")[1].split(".")[0];
                                            var hours = time.includes("h") ? time.split("h")[0] : 0;
                                            var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                                            var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                                            var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                                            var timeAdd = totalMilisec + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                            timer.shrine = (Date.now() + timeAdd).toString();
                                            fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                        }
                                    }
                                }
                            } 
                        }
                    })
                    if (count <= 0) {
                        module.exports();
                    } else {
                        if (time === undefined) {
                            var timeAdd = 14400000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            timer.shrine = (Date.now() + timeAdd).toString();
                            fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                if (err) throw err;
                                module.exports();
                            })
                        } else {
                            var hours = time.includes("h") ? time.split("h")[0] : 0;
                            var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                            var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                            var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                            var timeAdd = (14400000 - (14400000 - totalMilisec)) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                            timer.shrine = (Date.now() + timeAdd).toString();
                            fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
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
            if (Date.now() >= Number(timer.shrine)) {
                clearInterval(interval);
                if (assetsConfig.onCaptcha === "true") {
                    setTimeout(() => { 
                        module.exports() 
                    }, 30000);
                } else {
                    api.sendMessage(config.channelID, ">shrine claim");
                    var before = new Date();
                    
                    setTimeout(async () => {
                        await api.getMessages(config.channelID).then((msgs) => {
                            var count = 0;
                            msgs.forEach((m) => {
                                var msgDate = new Date(m.timestamp);
                                if (m.content.includes("Congratulations, you completed the shrine ritual and have been granted")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine recupéré.");
                                                    assetsConfig.manaCount+=Number(m.content.split("Exp and ")[1].split(" ")[0])
                                                    count++;
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine recupéré.");
                                                    assetsConfig.manaCount+=Number(m.content.split("Exp and ")[1].split(" ")[0])
                                                    count++;
                                                }
                                            }
                                        }
                                    }
                                } else if (m.content.includes("The shrine ritual didn't finish yet. Time left : ")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine pas fini.");
                                                    count++;
                                                    isStarted = true;
                                                    time = m.content.split("The shrine ritual didn't finish yet. Time left : ")[1].split(".")[0];
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine pas fini.");
                                                    count++;
                                                    isStarted = true;
                                                    time = m.content.split("The shrine ritual didn't finish yet. Time left : ")[1].split(".")[0];
                                                }
                                            }
                                        }
                                    }
                                } else if (m.content.includes("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine vient être cassé.");
                                                    time = m.content.split("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")[1].split(" hours")[0];
                                                    var timeAdd = Number(time) * 3600000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                                    timer.shrine = (Date.now() + timeAdd).toString();
                                                    fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine vient être cassé.");
                                                    time = m.content.split("Ouch! You failed to complete the shrine ritual on time, as such you attracted to yourself the wrath of the shrine deities, you are no longer allowed to start another ritual for ")[1].split(" hours")[0];
                                                    var timeAdd = Number(time) * 3600000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                                    timer.shrine = (Date.now() + timeAdd).toString();
                                                    fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                                }
                                            }
                                        }
                                    }  
                                } else if (m.content.includes("You cannot start a new ritual for shrine yet. You may do it again in")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine cassé.");
                                                    time = m.content.split("You cannot start a new ritual for shrine yet. You may do it again in ")[1].split(".")[0];
                                                    var hours = time.includes("h") ? time.split("h")[0] : 0;
                                                    var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                                                    var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                                                    var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                                                    var timeAdd = totalMilisec + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                                    timer.shrine = (Date.now() + timeAdd).toString();
                                                    fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine cassé.");
                                                    time = m.content.split("You cannot start a new ritual for shrine yet. You may do it again in ")[1].split(".")[0];
                                                    var hours = time.includes("h") ? time.split("h")[0] : 0;
                                                    var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                                                    var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                                                    var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                                                    var timeAdd = totalMilisec + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                                    timer.shrine = (Date.now() + timeAdd).toString();
                                                    fs.writeFileSync("./assets/timer.json", JSON.stringify(timer, null, 2));
                                                }
                                            }
                                        }
                                    } 
                                } else if (m.content.includes("You must start a shrine ritual before trying to claim a reward")) {
                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                        if (before.getUTCMinutes() === 59) {
                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine pas start.");
                                                    count++
                                                }
                                            }
                                        } else {
                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                    if (config.showInfo === "true") console.log("Shrine pas start.");
                                                    count++
                                                }
                                            }
                                        }
                                    } 
                                } 
                            })
                            if (count <= 0) {
                                module.exports();
                            } else {
                                if (!isStarted) {
                                    api.sendMessage(config.channelID, ">shrine start");
                                    setTimeout(async () => {
                                        await api.getMessages(config.channelID).then((msgs) => {
                                            var count = 0;
                                            msgs.forEach((m) => {
                                                var msgDate = new Date(m.timestamp);
                                                if (m.content.includes("You started a shrine ritual. Come back in 4 hours, but don't be too late. ;)")) {
                                                    if (before.getUTCDay() === msgDate.getUTCDay()) {
                                                        if (before.getUTCMinutes() === 59) {
                                                            if (before.getUTCHours() === msgDate.getUTCHours() || (before.getUTCHours() + 1) === msgDate.getUTCHours()) {
                                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                                    if (config.showInfo === "true") console.log("Shrine started.");
                                                                    count++;
                                                                }
                                                            }
                                                        } else {
                                                            if (before.getUTCHours() === msgDate.getUTCHours()) {
                                                                if (before.getUTCMinutes() === msgDate.getUTCMinutes() || (before.getUTCMinutes() + 1) === msgDate.getUTCMinutes()) {
                                                                    if (config.showInfo === "true") console.log("Shrine started.");
                                                                    count++;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            })
                                            if (count <= 0) {
                                                module.exports();
                                            } else {
                                                var timeAdd = 14400000 + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                                timer.shrine = (Date.now() + timeAdd).toString();
                                                fs.writeFile("./assets/timer.json", JSON.stringify(timer, null, 2), function(err) {
                                                    if (err) throw err;
                                                    module.exports();
                                                })
                                                fs.writeFile("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2), function(err) {
                                                    if (err) throw err;
                                                    module.exports();
                                                })
                                            } 
                                        })
                                    }, 30000)
                                } else {
                                    var hours = time.includes("h") ? time.split("h")[0] : 0;
                                    var minutes = time.includes("m") ? time.split("m")[0].includes("h") ? time.split("m")[0].split("h")[1] : time.split("m")[0] : 0;
                                    var secondes = time.includes("s") ? time.split("s")[0].includes("m") ? time.split("s")[0].split("m")[1] : time.split("s")[0].includes("h") ? time.split("s")[0].split("h")[1] : time.split("s")[0] : 0;
                                    var totalMilisec = Number(hours) * 3600000 + Number(minutes) * 60000 + Number(secondes) * 1000;
                                    var timeAdd = (14400000 - (14400000 - totalMilisec)) + (Math.floor(Math.random() * 600000) + Math.floor(Math.random() * 300000));
                                    timer.shrine = (Date.now() + timeAdd).toString();
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