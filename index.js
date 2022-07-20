const Discord = require('discord.js-patched-for-selfbots') // Ne touchez pas à ça ! / Don't touch to that !
const login = require("./api/login.js");
const client = new Discord.Client(); // Ne touchez pas à ça ! / Don't touch to that !
const jimp = require("jimp"); // Ne touchez pas à ça ! / Don't touch to that !
const emoteRegister = require("./assets/emoteRegister.js");
const findLetters = require("./assets/findLetters.js");
const findNumbers = require("./assets/findNumbers.js");
const mineraiFind = require("./assets/mineraiFind.js");
const addReact = require("./assets/addReact.js");
const config = require("./config.json");
const hrSelf = require('./assets/hrSelf.js');
const shrineSelf = require("./assets/shrineSelf.js");
const trSelf = require("./assets/trSelf.js");
const autoManaUse = require("./assets/autoManaUse.js");
const fs = require("fs");
const assetsConfig = require("./assets/assetsConfig.json");
const captcha = require('./assets/captcha.js');
var messageTimerTr;
var numberLetter = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "nuine"];
var messageToReact;
var listMinerai;
var emoteColors;
const reactionArray = 
{ // 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣
    '0':"0⃣",
    '1':"1⃣",
    '2':"2⃣",
    '3':"3⃣",
    '4':"4⃣",
    '5':"5⃣",
    '6':"6⃣",
    '7':"7⃣",
    '8':"8⃣",
    '9':"9⃣",
    '10': "1️⃣0️⃣",
    'one':'1',
    'two':'2',
    'three':'3',
    'four':'4',
    'five':'5',
    'six':'6',
    'seven':'7',
    'eight':'8',
    'nine':'9',
    'ten': '10',
    "nuine": "9"
};

login(config.token);
client.login(config.token); // Insérez votre token ici / Insert your token here


if (config.hr !== "true" && config.hr !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement du hr, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.shrine !== "true" && config.shrine !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement du shrine, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.tr !== "true" && config.tr !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement du treasure (tr), la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.autoMine !== "true" && config.autoMine !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement de l'auto mine, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.autoChop !== "true" && config.autoChop !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement de l'auto chop, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.autoFish !== "true" && config.autoFish !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement de l'auto fish, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

if (config.autoDig !== "true" && config.autoDig !== "false") {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement de l'auto dig, la valeur indiquée dans le config.json doit être soit \"true\" (activé) soit \"false\" (désactivé).")
  process.exit(1);
}

var trueCount = 0;

if (config.autoChop === "true") trueCount++;
if (config.autoMine === "true") trueCount++;
if (config.autoDig === "true") trueCount++;
if (config.autoFish === "true") trueCount++;

if (trueCount > 1) {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Erreur lors du lancement de l'utilisation automatique du mana, veuillez activer qu'une seule utilisation à la fois.")
  process.exit(1);
}

if (Number(config.hrTiming) <= 75) {
  console.log(" __  __  _                  ___       _   __  ___       _   \n|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ \n| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|\n|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n\nFait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n\nSelfBot ERROR : Le temps de votre hr doit être supérieur à 75 minutes (60 minutes pour la disponibilité du hr + 15 minutes pour le random du self), dans la configuration actuelle, votre combo pourrait se casser.")
  process.exit(1);
}

console.log(" __  __  _                  ___       _   __  ___       _   ");
setTimeout(() => console.log("|  \\/  |(_) _ _   ___  ___ / __| ___ | | / _|| _ ) ___ | |_ "), 500);
setTimeout(() => console.log("| |\\/| || || ' \\ / -_)|___|\\__ \\/ -_)| ||  _|| _ \\/ _ \\|  _|"), 1000);
setTimeout(() => console.log("|_|  |_||_||_||_|\\___|     |___/\\___||_||_|  |___/\\___/ \\__|\n"), 1500);
setTimeout(() => console.log("Fait par Mine_Clash_34 (Discord : Mine_Clash_34#6666), tous droits réservés, toutes réutilisations de ce code dans un but lucratif ou personnel (autre que pour vous bien sûr) sera vu comme une nuissance et des poursuites pourront être engagées.\n"), 1501);


client.on("ready", async () => {
    if (Math.floor(client.user.id/68*589/45/562*9) !== parseFloat(config.tokenKey)) {
        console.log("Token key isn't valid ! Please contact Mine_Clash_34#6666 to buy it or change it !");
        process.exit(1);
    }
    if (config.hr === "true") hrSelf();
    if (config.shrine === "true") shrineSelf();
    if (config.tr === "true") trSelf.time();
    if (config.autoChop === "true" || config.autoDig === "true" || config.autoFish === "true" || config.autoMine === "true") autoManaUse();
    assetsConfig.onCaptcha = "false";
    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
    emoteColors = await emoteRegister();

})

client.on("message", async message => {
    if (message.channel.id !== config.channelID) return;
    message.attachments.forEach(e => {
        console.log(e.name)
        if (e.name === "captcha.png") {
            jimp.read(e, (err, image) => {
                if (err) throw err;
                var imageLetter = image.clone();
                var imageNumber = image.clone();
                var imageMinerai = image.clone();
                imageLetter.crop(0, 0, 769, 280);
                var letterFinded = findLetters(imageLetter);
                imageNumber.crop(0, 250, 769, 149)
                var numberFinded = findNumbers(imageNumber)
                letterFinded.sort((a, b) => a.largeur - b.largeur);
                var letterArray = [];
                letterFinded.forEach(e => {
                  letterArray.push(e.name);
                })
                var letterMessage = [];
                letterMessage.push(numberLetter.find(nl => nl.startsWith(letterArray.join("").split("+")[0])));
                letterMessage.push(numberLetter.find(nl => nl.startsWith(letterArray.join("").split("+")[1])));
                console.log(letterMessage.join("+") + ` (${reactionArray[reactionArray[letterMessage[0]]]} ${reactionArray[reactionArray[letterMessage[1]]]}  )`);
                numberFinded.sort((a, b) => a.largeur - b.largeur);
                numberFinded.sort((a, b) => a.largeur - b.largeur);
                var numberMessage = []
                numberFinded.forEach(e => {
                  numberMessage.push(e.name)
                })
                var result = Number(reactionArray[letterMessage[0]]) + Number(reactionArray[letterMessage[1]]) + Number(numberMessage.join(""));
                console.log(numberMessage.join("") + ` (${reactionArray[numberMessage[0]]} ${reactionArray[numberMessage[1]]} ${reactionArray[numberMessage[2]]}  )`);
                var emoteArray = mineraiFind(imageMinerai, emoteColors);
                let emoteResults = [];
                for (var key in emoteArray){   
                    if(emoteArray[key]['colorFound'] > 0)
                        emoteResults.push({color:key,count:emoteArray[key]['colorFound'],max:emoteArray[key]['colors'].length,total:emoteArray[key]['colorTotal']});
                }
                emoteResults.sort(function (a, b) {
                    if (a.total > b.total) {
                        return -1;
                    }
                    if (b.total > a.total) {
                        return 1;
                    }
                    return 0;
                });


                var minerai = [];
                let captchaResponse = 'Minerai : ';
                let debug = false;
                let maxShowed = 2;
                if(debug)
                    maxShowed = 5;

                for(x=0;x<maxShowed && x < emoteResults.length;x++)
                {
                
                    if(x > 0 && !debug)
                        captchaResponse += ' / ';
                    if(debug)
                        captchaResponse += '\n'+emoteResults[x].color+' -- '+Math.floor((emoteResults[x].count/emoteResults[x].max)*100)+'% ('+emoteResults[x].count+'/'+emoteResults[x].max+' - '+emoteResults[x].total+')';
                    else {
                        captchaResponse += ' '+emoteResults[x].color + ` (${emoteResults[x].total})`;//+' -- '+Math.floor((emoteResults[x].count/emoteResults[x].max)*100)+'% ('+emoteResults[x].count+'/'+emoteResults[x].max+' - '+emoteResults[x].total+')';
                        minerai.push(emoteResults[x].color)
                    }
                }
                console.log(captchaResponse + `\nTrouvé en : ${Date.now() - message.createdTimestamp} ms`);
                setTimeout(() => { addReact(result, minerai, messageToReact, listMinerai, reactionArray) }, 2000);
            });
        }
    })
})


client.on('message', async message => {
    if (message.channel.id !== config.channelID) return;
    if (message.content.startsWith("[Système de vérification anti-triche]")) {
        var args = message.content.split("XP");
        args = args[1].split("Code saisie")
        args = args[0].split("|")
        listMinerai = {
          "gold": '💧', 
          "sapphire": '💧', 
          "iron": '💧', 
          "ruby": '💧', 
          "obsidian": '💧', 
          "mithril": '💧', 
          "emerald": '💧', 
          "adamantithe": '💧', 
          "perfectprism": '💧', 
          "cobalt": '💧'
        }
      messageToReact = message;
        for (let i = 0; i<args.length;i++) {
          listMinerai[args[i].split("<:")[1].split(":")[0]] = i === 0 ? "🇦" : i === 1 ? "🇧" : i === 2 ? "🇨" : i === 3 ? "🇩" : i === 4 ? "🇪" : "🇫"
        }
        
      } else
      if (message.content.startsWith("[Anti-Cheat Verification System]")) {
        var args = message.content.split("XP");
        args = args[1].split("Typed code")
        args = args[0].split("|")
        listMinerai = {
          "gold": '💧', 
          "sapphire": '💧', 
          "iron": '💧', 
          "ruby": '💧', 
          "obsidian": '💧', 
          "mithril": '💧', 
          "emerald": '💧', 
          "adamantithe": '💧', 
          "perfectprism": '💧', 
          "cobalt": '💧'
        }
        messageToReact = message;
        for (let i = 0; i < args.length; i++) {
          listMinerai[args[i].split("<:")[1].split(":")[0]] = i === 0 ? "🇦" : i === 1 ? "🇧" : i === 2 ? "🇨" : i === 3 ? "🇩" : i === 4 ? "🇪" : "🇫"
        }
        
      } else if (message.content.includes("Shard n°") && message.content.includes(" - ") && message.content.includes("[1/2]")) {
        if (config.tr === "true") trSelf.jump(message);
        messageTimerTr = message;
      } else if (message.content.includes("You have virtually jumped on the shard")) {
        if (config.tr === "true") trSelf.spam(messageTimerTr, client);
      } else if (message.content.includes("Hey ! You must prove that you are human to continue to play, please use the")) {
        captcha();
      } else if (message.content.includes("Hey ! Vous devez prouver que vous êtes humain pour continuer à jouer")) {
        captcha();
      } else if (message.content.includes("You just won the treasure, you earn the following loots : ")) {
        assetsConfig.manaCount+=Number(message.content.split("You just won the treasure, you earn the following loots : ")[1].split(" ")[0]);  
        fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
      } else if (message.content.includes("Vous venez de gagner le trésor, vous avez récupéré les ressources suivantes : ")) {
        assetsConfig.manaCount+=Number(message.content.split("Vous venez de gagner le trésor, vous avez récupéré les ressources suivantes : ")[1].split(" ")[0]);
        fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
      }
})


client.on('messageUpdate', async (oldMessage, newMessage) => { 
  if (newMessage.channel.id !== config.channelID) return;
  if (newMessage.content.includes("- Try again")) {
    assetsConfig.onCaptcha = "false";
    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
    await captcha();
  } else if (newMessage.content.includes("Test passé avec succès ! Vous reprenez contrôle de votre vie.")) {
    assetsConfig.onCaptcha = "false";
    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
  } else if (newMessage.content.includes("Test passed with success ! You are controlling your life again.")) {
    assetsConfig.onCaptcha = "false";
    fs.writeFileSync("./assets/assetsConfig.json", JSON.stringify(assetsConfig, null, 2));
  }
})