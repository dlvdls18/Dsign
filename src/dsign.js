/*
 * Dsign
 * License: MIT
 * (c) 2022 - dlvdls18
 * https://github.com/dlvdls18/Dsign/
 *
 */

function Dsign(conf) {
  document.querySelectorAll("[data-dsign]").forEach(function(el) {
    var s = conf[el.getAttribute("data-dsign")];
    if(!s) return;
    if(s.
  });
  for(var style in document.body.style) {
    var sr = style.replace(/(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)/g, "-$1").toLowerCase();
    document.querySelectorAll("*").forEach(function(el) {
      (el.getAttribute("class") || "").split(" ").forEach(function(c) {
        if(c.startsWith(sr + "-")) {
          var cv = c.replace(sr + "-", "");
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