/*
 * Dsign
 * License: MIT
 * (c) 2022 - dlvdls18
 * https://github.com/dlvdls18/Dsign/
 *
 */

function Dsign() {
  for(var style in document.body.style) {
    var sr = style.replace(/(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)/g, "-$1").toLowerCase();
    document.querySelectorAll("*").forEach(function(el) {
      if(el.localName == "dsign") return;
      (el.getAttribute("class") || "").split(" ").forEach(function(c) {
        if(c.startsWith(sr + "-")) {
          var cv = c.replace(sr + "-", "");
          el.style[style] = cv;
        }
      });
    });
    document.querySelectorAll("[" + sr + "]").forEach(function(el) {
      if(el.localName == "dsign") return;
      el.style[style] = el.getAttribute(sr);
    });
  }
}

Dsign();