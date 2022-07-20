const jimp = require("jimp");
const fs = require("fs");
module.exports = async function() {
    return new Promise(async function(resolve, reject){
        var emoteColors = [];
        fs.readdir('emotes', function(err, items) { // Lis les emotes 1 à 1
            for (var i = 0; i < items.length; i++) { // Pour toutes les emotes
                const emoteName = items[i].replace('.png',''); // Enlèvez le .png en fin de nom
                jimp.read('emotes/'+items[i], (err, image) => { // Lis l'emote avec jimp
                    if (err) throw err; // Check if error
                    let pixelClor = 0; // Color to ignore ?
                    let pixelColors = []; // Defini l'array de toutes les couleurs trouvés
                    let found = false;
                    emoteColors[emoteName] = []; // Créer une array pour chaque emote
                    for (var y = 0; y < image.bitmap.height - 1; y++) { // Logik
                        for(var x = 0; x < image.bitmap.width - 1; x++) { // Logik

                            pixelClor = image.getPixelColor(x, y); // Recup color du pixel

                            if(pixelClor != 0 ) // Si color != 0 alors ...
                            {
                                found = false; // Ok
                                var i = pixelColors.length; // Mets la longueur de l'array dans i
                                while ( i --> 0 ) { // Créer une boucle pour avoir toutes les valeurs de l'array
                                    if ( pixelColors[i].color == pixelClor ) { // Si la couleur est déjà dans l'array
                                        pixelColors[i].count++; // On ajoute 1 à count
                                        found = true; // On met found sur true pour pas qu'il l'enregistre une autre fois
                                        break; // On stop la boucle car inutile d'aller + loin
                                    }
                                }

                                if(!found) // Si il y était pas
                                {
                                    pixelColors.push({color:pixelClor,count:1,width:x,height:y}); // On le rajoute
                                }


                            }
                        }
                    }
                    pixelColors.sort(function (a, b) { // On les sort par nombre de count
                        if (a.count > b.count) {
                            return -1;
                        }
                        if (b.count > a.count) {
                            return 1;
                        }
                        return 0;
                    });
                    let startingNumber = 0
                    let nbrPerEmote = 200;
                    if(emoteName == 'iron') {
                        nbrPerEmote = 50; 
                    }

                    //if(pixelColors.length > 100)
                        //startingNumber = 10;
                    //console.log(pixelColors);
                    for(x = startingNumber; x < nbrPerEmote && x < pixelColors.length; x++)
                    {
                        let colorFound = jimp.intToRGBA(pixelColors[x].color);
                        if (colorFound.a !== 255) continue;
                        colorFound['found'] = false;
                        colorFound["position"] = {width:pixelColors[x].width, height:pixelColors[x].height}
                        //if(!((colorFound.r == colorFound.g && colorFound.g == colorFound.b) || (colorFound.r > 245 && colorFound.g > 245 && colorFound.b > 245)))
                            emoteColors[emoteName].push(colorFound);
                    }
                    for(x = pixelColors.length-nbrPerEmote; x < pixelColors.length; x++)
                    {
                        let colorFound = jimp.intToRGBA(pixelColors[x].color);
                        if (colorFound.a !== 255) continue;
                        colorFound['found'] = false;
                        colorFound["position"] = {width:pixelColors[x].width, height:pixelColors[x].height}
                        //if(!((colorFound.r == colorFound.g && colorFound.g == colorFound.b) || (colorFound.r > 245 && colorFound.g > 245 && colorFound.b > 245)))
                        emoteColors[emoteName].push(colorFound);
                    }
                    for(x = Math.floor(pixelColors.length/2); x < Math.floor((pixelColors.length/2)) + nbrPerEmote; x++)
                    { 
                        let colorFound = jimp.intToRGBA(pixelColors[x].color);
                        if (colorFound.a !== 255) continue;
                        colorFound['found'] = false;
                        colorFound["position"] = {width:pixelColors[x].width, height:pixelColors[x].height}
                        //if(!((colorFound.r == colorFound.g && colorFound.g == colorFound.b) || (colorFound.r > 245 && colorFound.g > 245 && colorFound.b > 245)))
                            emoteColors[emoteName].push(colorFound);
                    }
                   // console.log(emoteColors);
                   console.log(emoteName + ' Loaded');
                   //if (emoteName === "adamantite") console.log(emoteColors["adamantite"].length)
                   console.log(emoteColors[emoteName].length)
                   if (Object.keys(emoteColors).length === items.length) {
                        resolve(emoteColors);
                   }
                });


            }

        });

    })
}