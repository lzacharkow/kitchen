// Site navigation — the ONE place the page list lives.
// To add a page: copy _template.html to <topic>.html, then add one line below.
// Every page picks it up automatically.
var PAGES = [
  { href: "index.html", title: "Overview" },
  { href: "cabinets.html", title: "Cabinets" },
  { href: "countertops.html", title: "Countertops" },
  { href: "tiles.html", title: "Tiles" },
  { href: "paint.html", title: "Paint" },
  { href: "appliances.html", title: "Appliances" },
  { href: "sinks.html", title: "Sinks" },
  { href: "finishes.html", title: "Finishes" },
];

(function () {
  var nav = document.getElementById("site-nav");
  if (!nav) return;
  var here = location.pathname.split("/").pop() || "index.html";
  nav.innerHTML = PAGES.map(function (p) {
    var current = p.href === here;
    return '<a href="' + p.href + '"' +
      (current ? ' class="current" aria-current="page"' : '') +
      '>' + p.title + "</a>";
  }).join("");
})();
