/*
 * Dsign
 * License: MIT
 * (c) 2022 - dlvdls18
 * https://github.com/dlvdls18/Dsign/
 *
 */

function Dsign() {
  for(var style in document.body.style) {
    //console.log(style);
    var sr = style.replace(/(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)/g, "-$1").toLowerCase();
    document.querySelectorAll(`[class^="${sr}-"]`).forEach(function(el) {
      var c = el.getAttribute("class").split(" ");
      c.forEach(function(ci) {
        var r = new RegExp(sr + "-(.+)", "i");
        if(ci.match(r)) {
          var cv = ci.replace(r, "$1");
          el.style[style] = cv;
        }
      });
    });
    document.querySelectorAll("[" + sr + "]").forEach(function(el) {
      el.style[style] = el.getAttribute(sr);
    });
  }
}

Dsign();