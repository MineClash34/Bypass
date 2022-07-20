const colorBanned = [ 1940782335, 1974402559, 1957624831, 1957625087, 1974402559, 1819969279, 805437439, 2429026303 ];
var color = [
    255,        16777215,
    65535,      4278190335,
    16711935,   4294902015,
    4278255615, 4294967295
  ];
module.exports = function(image) {
    var letterFinded = [];
    for (let l = 0; l <= 769; l++) {
        for (let h = 0; h <= 280; h++) {
            /*
            * Letter : T
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 24, h  + 71) && image.getPixelColor(l, h) === image.getPixelColor(l - 45, h + 94) && image.getPixelColor(l, h) === image.getPixelColor(l - 55, h + 53) && image.getPixelColor(l, h) === image.getPixelColor(l + 10, h + 29) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "g", largeur: l, hauteur: h})
            /*
            * Letter : G
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l + 24, h - 47) && image.getPixelColor(l, h) === image.getPixelColor(l - 2, h + 67) && image.getPixelColor(l, h) === image.getPixelColor(l + 30, h - 27) && image.getPixelColor(l, h) === image.getPixelColor(l - 10, h + 65) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "t", largeur: l, hauteur: h})
            /*
            * Letter : X
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l + 3, h  + 25) && image.getPixelColor(l, h) === image.getPixelColor(l + 10, h  + 19) && image.getPixelColor(l, h) === image.getPixelColor(l - 13, h  + 21) && image.getPixelColor(l, h) === image.getPixelColor(l + 16, h  + 3) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "x", largeur: l, hauteur: h})
            /*
            * Letter : S
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 17, h  + 18) && image.getPixelColor(l, h) === image.getPixelColor(l - 8, h  + 21) && image.getPixelColor(l, h) === image.getPixelColor(l - 2, h  + 21) && image.getPixelColor(l, h) === image.getPixelColor(l - 9, h  + 26) && image.getPixelColor(l, h) === image.getPixelColor(l - 4, h  + 9) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "s", largeur: l, hauteur: h})
            /*
            * Letter : V
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 2, h  + 20) && image.getPixelColor(l, h) === image.getPixelColor(l - 19, h  + 30) && image.getPixelColor(l, h) === image.getPixelColor(l - 22, h  + 6) && image.getPixelColor(l, h) === image.getPixelColor(l - 20, h  + 14) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "v", largeur: l, hauteur: h})
            /*
            * Letter : I
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l + 1, h  + 16) && image.getPixelColor(l, h) === image.getPixelColor(l - 4, h  + 22) && image.getPixelColor(l, h) === image.getPixelColor(l - 7, h  + 5) && image.getPixelColor(l, h) === image.getPixelColor(l - 9, h  + 24) && image.getPixelColor(l, h) === image.getPixelColor(l + 6, h  - 20) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "i", largeur: l, hauteur: h})
            /*
            * Letter : U
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 14, h  - 4) && image.getPixelColor(l, h) === image.getPixelColor(l - 8, h  + 24) && image.getPixelColor(l, h) === image.getPixelColor(l - 19, h  + 5) && image.getPixelColor(l, h) === image.getPixelColor(l - 21, h  + 24) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "u", largeur: l, hauteur: h})
            /*
            * Letter : F
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 31, h  + 24) && image.getPixelColor(l, h) === image.getPixelColor(l - 74, h  + 109) && image.getPixelColor(l, h) === image.getPixelColor(l - 27, h  + 59) && image.getPixelColor(l, h) === image.getPixelColor(l - 62, h  + 107) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "f", largeur: l - 45, hauteur: h})
            /*
            * Letter : R
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l - 21, h  + 3) && image.getPixelColor(l, h) === image.getPixelColor(l - 5, h  + 0) && image.getPixelColor(l, h) === image.getPixelColor(l - 26, h  + 24) && image.getPixelColor(l, h) === image.getPixelColor(l - 9, h  + 16) && image.getPixelColor(l, h) === image.getPixelColor(l - 12, h  + 1) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "r", largeur: l, hauteur: h})
            /*
            * Letter : H
            */
          if (image.getPixelColor(l, h) === image.getPixelColor(l + 53, h  - 29) && image.getPixelColor(l, h) === image.getPixelColor(l + 39, h  - 49) && image.getPixelColor(l, h) === image.getPixelColor(l + 1, h  + 33) && image.getPixelColor(l, h) === image.getPixelColor(l - 17, h  + 33) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "h", largeur: l, hauteur: h})
            /*
            * Letter : W
            */
           if (image.getPixelColor(l, h) === image.getPixelColor(l + 12, h  + 0) && image.getPixelColor(l, h) === image.getPixelColor(l + 10, h  + 17) && image.getPixelColor(l, h) === image.getPixelColor(l - 20, h  + 20) && image.getPixelColor(l, h) === image.getPixelColor(l - 3, h  + 25) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "w", largeur: l, hauteur: h})
            /*
            * Letter : E
            */
           if (image.getPixelColor(l, h) === image.getPixelColor(l + 8, h  + 0) && image.getPixelColor(l, h) === image.getPixelColor(l + 6, h  - 9) && image.getPixelColor(l, h) === image.getPixelColor(l - 8, h  + 15) && image.getPixelColor(l, h) === image.getPixelColor(l - 12, h  + 2) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "e", largeur: l, hauteur: h})
            /*
            * Letter : N
            */
           if (image.getPixelColor(l, h) === image.getPixelColor(l - 8, h  + 25) && image.getPixelColor(l, h) === image.getPixelColor(l + 6, h  + 37) && image.getPixelColor(l, h) === image.getPixelColor(l - 15, h  + 1) && image.getPixelColor(l, h) === image.getPixelColor(l - 26, h  + 24) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "n", largeur: l, hauteur: h})
            /*
            * Letter : O
            */
           if (image.getPixelColor(l, h) === image.getPixelColor(l + 6, h  + 17) && image.getPixelColor(l, h) === image.getPixelColor(l - 12, h  + 25) && image.getPixelColor(l, h) === image.getPixelColor(l - 4, h  + 23) && image.getPixelColor(l, h) === image.getPixelColor(l - 13, h  + 11) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "o", largeur: l, hauteur: h})
            /*
            * Letter : O
            */
           if (image.getPixelColor(l, h) === image.getPixelColor(l + 6, h  + 7) && image.getPixelColor(l, h) === image.getPixelColor(l - 7, h  + 16) && image.getPixelColor(l, h) === image.getPixelColor(l - 12, h  + 7) && image.getPixelColor(l, h) === image.getPixelColor(l - 3, h  + 8) && colorBanned.includes(image.getPixelColor(l, h)) === false && color.includes(image.getPixelColor(l, h))) letterFinded.push({name: "+", largeur: l, hauteur: h})
          }
    }
    return letterFinded;
}