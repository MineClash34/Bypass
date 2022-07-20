const colorBanned = [ 1940782335, 1974402559, 1957624831, 1957625087, 1974402559, 1819969279, 805437439, 2429026303 ];
var color = [
    255,        16777215,
    65535,      4278190335,
    16711935,   4294902015,
    4278255615, 4294967295
  ];
module.exports = function(image) {
    var numberFinded = [];
    for (let l = 0; l <= 769; l++) {
      for (let h = 0; h <= 149; h++) {
        /*
        * Number : 0
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 18, h  + 43) && image.getPixelColor(l, h) === image.getPixelColor(l + 5, h  + 17) && image.getPixelColor(l, h) === image.getPixelColor(l - 14, h  + 7) && image.getPixelColor(l, h) === image.getPixelColor(l - 16, h  + 21) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "0", largeur: l, hauteur: h})
        /*
        * Number : 1
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 5, h  - 2) && image.getPixelColor(l, h) === image.getPixelColor(l - 11, h  + 39) && image.getPixelColor(l, h) === image.getPixelColor(l - 14, h  + 8) && image.getPixelColor(l, h) === image.getPixelColor(l - 13, h  + 18) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "1", largeur: l, hauteur: h})
        /*
        * Number : 2
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l + 8, h  + 38) && image.getPixelColor(l, h) === image.getPixelColor(l - 11, h  + 39) && image.getPixelColor(l, h) === image.getPixelColor(l - 1, h  + 27) && image.getPixelColor(l, h) === image.getPixelColor(l + 14, h  + 12) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "2", largeur: l, hauteur: h})
        /*
        * Number : 3
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 35, h  + 50) && image.getPixelColor(l, h) === image.getPixelColor(l - 21, h  + 32) && image.getPixelColor(l, h) === image.getPixelColor(l - 17, h  + 23) && image.getPixelColor(l, h) === image.getPixelColor(l - 2, h  + 30) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "3", largeur: l, hauteur: h})
        /*
        * Number : 4
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 12, h  + 31) && image.getPixelColor(l, h) === image.getPixelColor(l - 29, h  + 53) && image.getPixelColor(l, h) === image.getPixelColor(l - 41, h  + 32) && image.getPixelColor(l, h) === image.getPixelColor(l - 31, h  + 33) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "4", largeur: l, hauteur: h})
        /*
        * Number : 5
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 24, h  + 28) && image.getPixelColor(l, h) === image.getPixelColor(l - 20, h  + 19) && image.getPixelColor(l, h) === image.getPixelColor(l - 9, h  + 18) && image.getPixelColor(l, h) === image.getPixelColor(l - 13, h  - 2) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "5", largeur: l, hauteur: h})
        /*
        * Number : 6
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 25, h  + 51) && image.getPixelColor(l, h) === image.getPixelColor(l - 2, h  + 32) && image.getPixelColor(l, h) === image.getPixelColor(l - 24, h  + 25) && image.getPixelColor(l, h) === image.getPixelColor(l - 11, h  + 39) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "6", largeur: l, hauteur: h})      
        /*
        * Number : 7
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 27, h  + 4) && image.getPixelColor(l, h) === image.getPixelColor(l - 36, h  + 55) && image.getPixelColor(l, h) === image.getPixelColor(l - 25, h  + 14) && image.getPixelColor(l, h) === image.getPixelColor(l - 24, h  + 44) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "7", largeur: l, hauteur: h})
        /*
        * Number : 8
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 22, h  + 40) && image.getPixelColor(l, h) === image.getPixelColor(l - 5, h  + 31) && image.getPixelColor(l, h) === image.getPixelColor(l - 16, h  + 18) && image.getPixelColor(l, h) === image.getPixelColor(l - 25, h  + 29) && image.getPixelColor(l, h) === image.getPixelColor(l - 10, h  + 28) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "8", largeur: l, hauteur: h})
        /*
        * Number : 9
        */
       if (image.getPixelColor(l, h) === image.getPixelColor(l - 23, h  + 41) && image.getPixelColor(l, h) === image.getPixelColor(l - 18, h  + 43) && image.getPixelColor(l, h) === image.getPixelColor(l - 13, h  + 12) && image.getPixelColor(l, h) === image.getPixelColor(l - 20, h  + 12) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) numberFinded.push({name: "9", largeur: l, hauteur: h})
      }
    }
    return numberFinded;
  }