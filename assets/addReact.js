const api = require("../api/function.js");
const config = require("../config.json");
module.exports = async function (number, minerai, message, listMinerai, reactionArray) {
    var react = number.toString().split("");
    setTimeout(async () => await api.addReact(message.channel.id, message.id, reactionArray[react[0]]), (Number(config.reactDelay)));
    setTimeout(async () => await api.removeReact(message.channel.id, message.id, reactionArray[react[0]]), (Number(config.reactDelay) * 2));
    setTimeout(async () => await api.addReact(message.channel.id, message.id, reactionArray[react[1]]), (Number(config.reactDelay) * 3));
    setTimeout(async () => await api.removeReact(message.channel.id, message.id, reactionArray[react[1]]), (Number(config.reactDelay) * 4));
    setTimeout(async () => await api.addReact(message.channel.id, message.id, reactionArray[react[2]]), (Number(config.reactDelay) * 5));
    setTimeout(async () => await api.removeReact(message.channel.id, message.id, reactionArray[react[2]]), (Number(config.reactDelay) * 6));
    setTimeout(async () => await api.addReact(message.channel.id, message.id, listMinerai[minerai[0]]), (Number(config.reactDelay) * 7));
    setTimeout(async () => await api.removeReact(message.channel.id, message.id, listMinerai[minerai[0]]), (Number(config.reactDelay) * 8));
    setTimeout(async () => await api.addReact(message.channel.id, message.id, listMinerai[minerai[1]]), (Number(config.reactDelay) * 9));
    setTimeout(async () => await api.removeReact(message.channel.id, message.id, listMinerai[minerai[1]]), (Number(config.reactDelay) * 10));
    setTimeout(async () => await api.addReact(message.channel.id, message.id, "✅"), (Number(config.reactDelay) * 11));
}