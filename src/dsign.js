/*
 * Dsign
 * License: MIT
 * (c) 2022 - dlvdls18
 * https://github.com/dlvdls18/Dsign/
 *
 */

var dsign = {};

function Dsign() {
  document.querySelectorAll("dsign").forEach(function(el) {
    console.log(el);
    el.style.display = "none";
    if(el.innerText != "") dsign[el.getAttribute("name")] =  [0, el.innerText.split(" ")];
    else {
      var attrs = {};
      for(var i in el.attributes) {
        if(!isNaN(parseInt(i)) && i != "name") {
          var attr = el.attributes[i];
          if(attr.name != "name" || attr.name != "data-ignore" || !el.getAttribute("data-ignore").split(" ").includes(attr.name)) attrs[attr.name] = attr.value;
        }
      }
      dsign[el.getAttribute("name")] =  [1, attrs];
    }
  });
  for(var i in dsign) {
    document.querySelectorAll(`[data-dsign="${i}"]`).forEach(function(el) {
      if(dsign[i][0] == 0) dsign[i][1].forEach(function(item) {
        if(!el.classList.contains(item)) el.classList.add(item);
      });
      else {
        var attrs = dsign[i][1];
        for(var name in attrs) {
          if(name != "style") el.setAttribute(name, attrs[name]);
        }
      }
    });
  }
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