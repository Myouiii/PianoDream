// PIANO TRANSLATION PART
var PIANO_TRANSLATION = {
  url: "piano?",
  buttonNames: {
    markNotes: "Đánh dấu",
    showHideNotes: {
      show: "Ẩn nốt nhạc",
      hide: "Hiển thị nốt nhạc",
    },
    playNotes: "Chơi",
    reset: "Xoá",
  },
  noteNames: {
    c: "Đô",
    cis:
      '<span><span>Đô</span><span class="piano-accidental">♯</span></span></span>' +
      '<span><span>Rê</span><span class="piano-accidental">♭</span></span></span>',
    d: "Rê",
    dis:
      '<span><span>Rê</span><span class="piano-accidental">♯</span></span></span>' +
      '<span><span>Mi</span><span class="piano-accidental">♭</span></span></span>',
    e: "Mi",
    f: "Fa",
    fis:
      '<span><span>Fa</span><span class="piano-accidental">♯</span></span></span>' +
      '<span><span>Sol</span><span class="piano-accidental">♭</span></span></span>',
    g: "Sol",
    gis:
      '<span><span>Sol</span><span class="piano-accidental">♯</span></span></span>' +
      '<span><span>La</span><span class="piano-accidental">♭</span></span></span>',
    a: "La",
    ais:
      '<span><span>La</span><span class="piano-accidental">♯</span></span></span>' +
      '<span><span>Si</span><span class="piano-accidental">♭</span></span></span>',
    b: "Si",
  },
  keys: {
    "1c": [90],
    "1cis": [83],
    "1d": [88],
    "1dis": [68],
    "1e": [67],
    "1f": [81],
    "1fis": [50],
    "1g": [87],
    "1gis": [51],
    "2a": [69],
    "2ais": [52],
    "2b": [82],
    "2c": [84],
    "2cis": [54],
    "2d": [89],
    "2dis": [55],
    "2e": [85],
    "2f": [73],
    "2fis": [57],
    "2g": [79],
    "2gis": [48],
    "3a": [80],
    "3ais": [187, 189, 173, 8],
    "3b": [219],
    "3c": [221],
    "3cis": [70],
    "3d": [86],
    "3dis": [71],
    "3e": [66],
    "3f": [78],
    "3fis": [74],
    "3g": [77],
    "3gis": [75],
    "4a": [188],
    "4ais": [76],
    "4b": [190],
  },
};
jQuery(document).ready(function (e) {
  !(function () {
    NodeList.prototype.forEach ||
      (NodeList.prototype.forEach = Array.prototype.forEach);
    var o = PIANO_TRANSLATION.buttonNames;
    e(".mark").text(o.markNotes),
      e(".playAll").text(o.playNotes),
      e(".btn-reset").text(o.reset),
      e(".hideNotes").text(o.showHideNotes.hide);
    var n = !1,
      t = PIANO_TRANSLATION.noteNames;
    e("[data-note]").each(function () {
      var o = e(this)[0].dataset.note.slice(1);
      e(this).find("i").html(t[o]),
        e(this)
          .find(".piano-accidental")
          .css("font-family", "Arial Unicode MS, Lucida Sans Unicode");
    });
    var l,
      i,
      a = {
        "1c": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"],
        }),
        "1cis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"],
        }),
        "1d": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"],
        }),
        "1dis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"],
        }),
        "1e": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"],
        }),
        "1f": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"],
        }),
        "1fis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"],
        }),
        "1g": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"],
        }),
        "1gis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"],
        }),
        "2a": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"],
        }),
        "2ais": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"],
        }),
        "2b": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"],
        }),
        "2c": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"],
        }),
        "2cis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"],
        }),
        "2d": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"],
        }),
        "2dis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"],
        }),
        "2e": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"],
        }),
        "2f": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"],
        }),
        "2fis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"],
        }),
        "2g": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"],
        }),
        "2gis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"],
        }),
        "3a": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"],
        }),
        "3ais": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"],
        }),
        "3b": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"],
        }),
        "3c": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"],
        }),
        "3cis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"],
        }),
        "3d": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"],
        }),
        "3dis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"],
        }),
        "3e": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"],
        }),
        "3f": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"],
        }),
        "3fis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"],
        }),
        "3g": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"],
        }),
        "3gis": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"],
        }),
        "4a": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"],
        }),
        "4ais": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"],
        }),
        "4b": new Howl({
          src: ["http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"],
        }),
      },
      r = {};
    function s() {
      m[0] &&
        (Object.values(m[0]).length >= 1
          ? (e(".btn-reset").removeClass("hidden"),
            e(".playAll").removeClass("hidden"))
          : (e(".btn-reset").addClass("hidden"),
            e(".playAll").addClass("hidden")));
    }
    function c(o) {
      if (!h) {
        var n = o.attr("data-note");
        r[n] ||
          o
            .find("i")
            .toggleClass("marked")
            .promise()
            .done(function () {
              m.length > 0 && (v = m[0]),
                e(this).hasClass("marked")
                  ? ((v[n] = n), (m[0] = v), (y = Object.values(v)))
                  : (delete m[0][n], (y = Object.values(v)));
            });
      }
      var t;
      (t = y.join(".")),
        e.ajax({
          url: A + t,
          type: "GET",
          success: function (e) {
            window.history.pushState("", "", this.url + "");
          },
          error: function () {
            console.log("There was a problem with the request.");
          },
        });
    }
    e(".piano").bind("selectstart dragstart", function (e) {
      return e.preventDefault(), !1;
    });
    var d = [],
      p = [];
    function w() {
      if (l) {
        var e = Object.values(r).filter(function (e) {
          return e;
        });
        if (Howler._volume < 1 && 0 === e.length) {
          var o = 0;
          d.forEach(function (e, n, t) {
            e.fade(1, 0, 10, p[n]),
              ++o === t.length &&
                setTimeout(() => {
                  Howler.volume(1);
                }, 20);
          });
        }
        0 === e.length &&
          (d.forEach(function (e, o) {
            e.fade(1, 0, 10, p[o]);
          }),
          (d = []),
          (p = []));
      }
    }
    var f = PIANO_TRANSLATION.keys,
      u = {};
    e.map(f, function (e, o) {
      e.forEach((e) => {
        u[e] = o;
      });
    }),
      e(window).bind("keydown keyup", function (o) {
        var n = o.which;
        52 === n && o.preventDefault();
        var t = e('[data-note="' + u[o.which] + '"]'),
          f = a[u[o.which]];
        "keydown" == o.type && f
          ? (h || c(t),
            r[n] ||
              ((l = f.play()),
              new Date() - i > 100 ? w() : d.length >= 2 && Howler.volume(0.8),
              (i = new Date()),
              d.push(f),
              p.push(l),
              (r[n] = !0),
              t.addClass("active"),
              t.parent().addClass("active")))
          : "keyup" == o.type &&
            ((r[n] = !1),
            t.removeClass("active"),
            t.parent().removeClass("active"),
            s()),
          "keydown" == o.type && 32 === o.keyCode && (o.preventDefault(), g());
      });
    var h = !0,
      m = [],
      y = [],
      v = {},
      H = !1;
    function g() {
      var o = document.querySelectorAll(".marked"),
        n = [];
      o.length >= 2 ? Howler.volume(0.8) : Howler.volume(1),
        o.forEach(function (o) {
          var t = a[o.parentNode.dataset.note],
            i = e('[data-note="' + o.parentNode.dataset.note + '"]');
          n.push(i),
            (l = t.play()),
            i.addClass("active"),
            (H = !0),
            d.push(t),
            p.push(l),
            setTimeout(() => {
              n.forEach((e) => e.removeClass("active")), (H = !1);
            }, 200);
        });
    }
    var N = document.querySelector(".mark"),
      C = document.querySelector(".clear"),
      k = document.querySelector(".playAll");
    N.addEventListener("click", function () {
      e(this).toggleClass("active"), (h = !h);
    }),
      C.addEventListener("click", function () {
        document.querySelectorAll(".marked").forEach(function (e) {
          e.classList.remove("marked");
        }),
          (m = []),
          (y = []),
          (v = {}),
          e.ajax({
            url: A.substring(0, A.length - 1),
            type: "GET",
            success: function () {
              window.history.pushState("", "", this.url + "");
            },
            error: function () {
              console.log("There was a problem with the request.");
            },
          }),
          e(this).addClass("hidden"),
          e(".playAll").addClass("hidden");
      }),
      k.addEventListener("click", g),
      document
        .querySelector(".hideNotes")
        .addEventListener("click", function () {
          o.showHideNotes.hide,
            this.innerText == o.showHideNotes.show
              ? (this.innerText = o.showHideNotes.hide)
              : (this.innerText = o.showHideNotes.show),
            (allNotes = document.querySelectorAll(".key i")),
            allNotes.forEach(function (e) {
              e.classList.toggle("hide-notes");
            });
        }),
      e(".key > span")
        .on("touchstart", function (e) {
          e.stopPropagation(), (n = !1);
        })
        .on("mousedown", function (o) {
          o.stopPropagation();
          var n = e(this),
            t = n.attr("data-note");
          (l = a[t].play()),
            new Date() - i > 150 && w(),
            n.addClass("active"),
            d.push(a[t]),
            p.push(l),
            (i = new Date()),
            h || c(n);
        })
        .on("touchmove", function (e) {
          n = !0;
        })
        .on("touchend", function (o) {
          var t = e(this),
            r = t.attr("data-note");
          n ||
            ((l = a[r].play()),
            new Date() - i > 150 && w(),
            t.addClass("active"),
            d.push(a[r]),
            p.push(l),
            (i = new Date()),
            h || c(t)),
            o.cancelable && o.preventDefault(),
            setTimeout(() => {
              e(this).removeClass("active"), s();
            }, 100);
        })
        .on("mouseup", function (o) {
          o.cancelable && o.preventDefault(),
            setTimeout(() => {
              e(this).removeClass("active"), s();
            }, 100);
        })
        .mouseout(function () {
          !H && e(this).removeClass("active");
        });
    var A = PIANO_TRANSLATION.url;
    function T(e) {
      var o,
        n,
        t,
        l,
        i = e.indexOf("?") + 1,
        a = e.indexOf("#") + 1 || e.length + 1,
        r = e.slice(i, a - 1),
        s = r.replace(/\+/g, " ").split("&"),
        c = {},
        d = [];
      if (r !== e && "" !== r) {
        for (o = 0; o < s.length; o++)
          (l = s[o].split("=", 2)),
            (n = decodeURIComponent(l[0])),
            (t = decodeURIComponent(l[1])),
            c.hasOwnProperty(n) || (c[n] = []),
            c[n].push(2 === l.length ? t : null),
            d.push(n);
        return d;
      }
    }
    (window.onload = function () {
      var e, o;
      void 0 !== T(window.location.href) &&
        ((e = T(window.location.href)[0].split(".")),
        (o = {}),
        e.length > 0 &&
          "" != e &&
          e.forEach(function (e) {
            var n = document.querySelector("[data-note='" + e + "']"),
              t = n.dataset.note;
            n.querySelector("i").classList.add("marked"), (o[t] = t);
          }),
        (m[0] = o),
        s());
    }),
      window.addEventListener(
        "popstate",
        function () {
          window.location.href = document.referrer;
        },
        !1
      );
  })();
});
