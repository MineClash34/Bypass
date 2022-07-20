const jimp = require("jimp");
module.exports = function(image, emoteColors) {
    var emoteArray = {
                      'perfectprism':{found:false,
                            colorFound:0,
                            colorTotal:0,  
                            colors:emoteColors['perfectprism']
                            },
                      'iron':{found:false,
                              colorFound:0,
                              colorTotal:0,  
                              colors:emoteColors['iron']
                              },
                      'gold':{found:false,
                              colorFound:0,
                              colorTotal:0,  
                              colors:emoteColors['gold']
                              },
                      'obsidian':{found:false,
                                  colorFound:0,
                                  colorTotal:0,  
                                  colors:emoteColors['obsidian']
                                  },
                      'ruby':{found:false,
                              colorFound:0,
                              colorTotal:0,  
                              colors:emoteColors['ruby']
                              },
                      'emerald':{found:false,
                                  colorFound:0,
                                  colorTotal:0,  
                                  colors:emoteColors['emerald']
                                  },
                      'sapphire':{found:false,
                                  colorFound:0,
                                  colorTotal:0,  
                                  colors:emoteColors['sapphire']
                                  },
                      'cobalt':{found:false,
                              colorFound:0,
                                  colorTotal:0,  
                              colors:emoteColors['cobalt']
                              },
                      'mithril':{found:false,
                              colorFound:0,
                              colorTotal:0,  
                              colors:emoteColors['mithril']
                              },
                      'adamantite':{found:false,
                                  colorFound:0,
                                  colorTotal:0,  
                                  colors:emoteColors['adamantite']
                                  }
                  } 
  
    for (var y = 0; y < image.bitmap.height; y++) {
        for(var x = 0; x < image.bitmap.width; x++) {
  
            pixelClor = image.getPixelColor(x, y);
  
            if(pixelClor != 0) { 
                convertedColor = jimp.intToRGBA(pixelClor);
                for(key in emoteArray) {
                        for(colorLine in emoteArray[key]['colors']) {
                            if(convertedColor.r == emoteArray[key]['colors'][colorLine]['r'] && convertedColor.g == emoteArray[key]['colors'][colorLine]['g'] && convertedColor.b == emoteArray[key]['colors'][colorLine]['b']) {
                                if(!emoteArray[key]['colors'][colorLine]['found']) {
                                    emoteArray[key]['colors'][colorLine]['found'] = true;
                                    emoteArray[key]['colorFound']++;
                                    if(emoteArray[key]['colorFound'] >= 2) emoteArray[key].found = true;
                                }
                                emoteArray[key]['colorTotal']++;
                            }
                        }
                    }
            }
  
        }
    }  
    return emoteArray;
}