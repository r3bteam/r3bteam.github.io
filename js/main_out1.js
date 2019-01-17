var _0x373f = [ "setName", "jagged", "ejected", "born", "#E5E5E5", "dead", "diedBy", "nameSize", "drawNameSize", "skin", ".png", "sColor", "drawText", "showColor", "sin", "cos", "showSkins", "clip", "showMass", "showNames", "accessTime", "showTextOutline", "center", "strokeText", "keys", "canvases", "size", "getElementById", "chat_textbox", "wheelDelta", "detail", "userAgent", "DOMMouseScroll", "body", "onmousewheel", "onkeydown", "blur", "value", "focus", "space", "esc", "onkeyup", "keyCode", "onblur", "onmousemove", "clientX", "clientY", "sqrt", "onresize", "touchCircle", "addEventListener", "style", "display", "target", "splitBtn", "ejectBtn", "block", "touchmove", "pageX", "pageY", "touchend", "touches", "none", "init done in ", "allowGETipSet", "search", "requestAnimationFrame", "setserver", "setDarkTheme", "setSkins", "setNames", "setGrid", "setChatHide", "#chat_textbox", "fadeOut", "slow", "setMinimap", "spectate", "play", "openSkinsList", "#inPageModalTitle", "Skins", "get", "include/gallery.php", "then", "text", "#inPageModalBody", "html", "onload", "keyup", "trigger", "Event", "keydown", "random", "innerHeight", "mousemove", "innerWidth", "current_players", " &#47; ", "max_players", "ajax", "/status.json?p=", "option_ffa1", "FFA (1)", "FFA 1", "option_ffa2", "FFA (2)", "FFA 2", "option_ffa3", "FFA (3)", "FFA 3", "option_ffa4", "FFA (4)", "FFA 4", "FFA (5)", "FFA 5", "option_ffa6", "FFA (6)", "FFA 6", "FFA (7)", "option_ffaplus8", "FFA 8", "option_ffaplus9", "FFA (9)", "FFA 9", "option_ffaplus10", "FFA (10)", "FFA 10", "option_ffaplus11", "FFA (11)", "FFA 11", "option_ffaplus12", "FFA (12)", "FFA 12", "FFA (13)", "FFA 13", "option_ffaplus14", "FFA 14", "option_ffaplus15", "FFA (15)", "FFA 15", "jQuery", "MSIE", "You're using a pretty old browser, some parts of the website might not work properly.", "now", "getTime", "prototype", "peek", "length", "remove", "indexOf", "splice", "toString", "slice", "invalid color ", "reset", "push", "setUint16", "_move", "setInt16", "setUint32", "setFloat32", "setFloat64", "getUint8", "charCodeAt", "repurpose", "view", "getUint16", "getInt16", "getUint32", "getFloat32", "fromCharCode", "verbosity", "warn", "info", "debug", "https:", "location", "protocol", "onopen", "onerror", "onclose", "close", "ws init on existing conn", "#connecting", "show", "ws://", "hostname", "binaryType", "onmessage", "hide", "ws disconnected ", "code", "reason", "readyState", "build", "send", "data", "byId", "hasOwnProperty", "getInt32", "getStringUTF8", "update", "updated", "setColor", "setSkin", "list", "destroyed", "destroy", "mine", "got packer 0x15 (draw line) which is unsupported", "items", "type", "ffa", "pie", "left", "getFloat64", "top", "right", "bottom", "width", "height", "centerY", "byteLength", "centerX", "test", "pingLoopId", "pingLoopStamp", "trim", "replace", "SERVER", "[SERVER] ", "[MOD] ", "max", "waitUntil", "messages", "parse", "latency", "play trigger", "setUint8", "setStringUTF8", "%*^", "create", "createElement", "canvas", "#33F", "createTouch", "localStorage", "load", "each", "box-id", "getItem", "true", "prop", "checked", "change", "val", ".save", "POST", "json", "checkdir.php", "getSkins", "fadeIn", "translate", "scale", "showChat", "visible", "getContext", "name", "color", "message", "darkTheme", "#FFF", "font", "18px Ubuntu", "measureText", "fillStyle", "Restart in ", "uptime", "14px Ubuntu", "#AAA", "#555", "textBaseline", "fillText", "<1 min", "min", "#000", "fillRect", "globalAlpha", "بدون اسم", "teams", "beginPath", "moveTo", "arc", "fill", "exec", "#DE1B1B", "#2400F2", "#A8CD1B", "#CBE32D", "#F3FAB6", "save", "lineWidth", "closePath", "stroke", "strokeStyle", "lineCap", "round", "lineTo", "12345", "#666", "middle", "textAlign", "px Ubuntu", "#FAA", "restore", "framesPerSecond", "#111", "#F2FBFF", "showGrid", "draw", "score", "30px Ubuntu", "20px Ubuntu", "Max: ", "maxScore", "13px Ubuntu", "ms - ", "drawImage", "pow" ];

!function(a, b) {
    var c = function(b) {
        while (--b) a["push"](a["shift"]());
    };
    c(++b);
}(_0x373f, 471);

var _0x28d3 = function(a, b) {
    a -= 0;
    var c = _0x373f[a];
    return c;
};

var wHandle = window;

var wjQuery = window[_0x28d3("0x0")];

if (navigator["appVersion"]["indexOf"](_0x28d3("0x1")) != -1) alert(_0x28d3("0x2"));

Date[_0x28d3("0x3")] || (Date[_0x28d3("0x3")] = function() {
    return (+new Date())[_0x28d3("0x4")]();
});

var LOAD_START = Date["now"]();

Array[_0x28d3("0x5")][_0x28d3("0x6")] = function() {
    return this[this[_0x28d3("0x7")] - 1];
};

Array[_0x28d3("0x5")][_0x28d3("0x8")] = function(a) {
    var b = this[_0x28d3("0x9")](a);
    if (b !== -1) this[_0x28d3("0xa")](b, 1);
    return b !== -1;
};

function bytesToColor(a, b, c) {
    var d = ("00" + (~~a)[_0x28d3("0xb")](16))[_0x28d3("0xc")](-2);
    var e = ("00" + (~~b)[_0x28d3("0xb")](16))[_0x28d3("0xc")](-2);
    var f = ("00" + (~~c)[_0x28d3("0xb")](16))[_0x28d3("0xc")](-2);
    return "#" + d + e + f;
}

function colorToBytes(a) {
    if (4 === a["length"]) return {
        r: parseInt(a[1] + a[1], 16),
        g: parseInt(a[2] + a[2], 16),
        b: parseInt(a[3] + a[3], 16)
    }; else if (7 === a[_0x28d3("0x7")]) return {
        r: parseInt(a[1] + a[2], 16),
        g: parseInt(a[3] + a[4], 16),
        b: parseInt(a[5] + a[6], 16)
    };
    throw new Error(_0x28d3("0xd") + a);
}

function darkenColor(a) {
    var b = colorToBytes(a);
    return bytesToColor(.9 * b["r"], .9 * b["g"], .9 * b["b"]);
}

function cleanupObject(a) {
    for (var b in a) delete a[b];
}

var __buf = new DataView(new ArrayBuffer(8));

function Writer(a) {
    this["_e"] = a;
    this[_0x28d3("0xe")]();
    return this;
}

Writer[_0x28d3("0x5")] = {
    writer: !![],
    reset: function(a) {
        this["_b"] = [];
        this["_o"] = 0;
    },
    setUint8: function(a) {
        if (a >= 0 && a < 256) this["_b"][_0x28d3("0xf")](a);
        return this;
    },
    setInt8: function(a) {
        if (a >= -128 && a < 128) this["_b"][_0x28d3("0xf")](a);
        return this;
    },
    setUint16: function(a) {
        __buf[_0x28d3("0x10")](0, a, this["_e"]);
        this[_0x28d3("0x11")](2);
        return this;
    },
    setInt16: function(a) {
        __buf[_0x28d3("0x12")](0, a, this["_e"]);
        this["_move"](2);
        return this;
    },
    setUint32: function(a) {
        __buf[_0x28d3("0x13")](0, a, this["_e"]);
        this[_0x28d3("0x11")](4);
        return this;
    },
    setInt32: function(a) {
        __buf["setInt32"](0, a, this["_e"]);
        this[_0x28d3("0x11")](4);
        return this;
    },
    setFloat32: function(a) {
        __buf[_0x28d3("0x14")](0, a, this["_e"]);
        this[_0x28d3("0x11")](4);
        return this;
    },
    setFloat64: function(a) {
        __buf[_0x28d3("0x15")](0, a, this["_e"]);
        this[_0x28d3("0x11")](8);
        return this;
    },
    _move: function(a) {
        for (var b = 0; b < a; b++) this["_b"][_0x28d3("0xf")](__buf[_0x28d3("0x16")](b));
    },
    setStringUTF8: function(a) {
        var b = unescape(encodeURIComponent(a));
        for (var c = 0, d = b[_0x28d3("0x7")]; c < d; c++) this["_b"][_0x28d3("0xf")](b[_0x28d3("0x17")](c));
        this["_b"][_0x28d3("0xf")](0);
        return this;
    },
    build: function() {
        return new Uint8Array(this["_b"]);
    }
};

function Reader(a, b, c) {
    this["_e"] = c;
    if (a) this[_0x28d3("0x18")](a, b);
}

Reader[_0x28d3("0x5")] = {
    reader: !![],
    repurpose: function(a, b) {
        this["view"] = a;
        this["_o"] = b || 0;
    },
    getUint8: function() {
        return this[_0x28d3("0x19")][_0x28d3("0x16")](this["_o"]++, this["_e"]);
    },
    getInt8: function() {
        return this[_0x28d3("0x19")]["getInt8"](this["_o"]++, this["_e"]);
    },
    getUint16: function() {
        return this[_0x28d3("0x19")][_0x28d3("0x1a")]((this["_o"] += 2) - 2, this["_e"]);
    },
    getInt16: function() {
        return this[_0x28d3("0x19")][_0x28d3("0x1b")]((this["_o"] += 2) - 2, this["_e"]);
    },
    getUint32: function() {
        return this["view"][_0x28d3("0x1c")]((this["_o"] += 4) - 4, this["_e"]);
    },
    getInt32: function() {
        return this[_0x28d3("0x19")]["getInt32"]((this["_o"] += 4) - 4, this["_e"]);
    },
    getFloat32: function() {
        return this["view"][_0x28d3("0x1d")]((this["_o"] += 4) - 4, this["_e"]);
    },
    getFloat64: function() {
        return this[_0x28d3("0x19")]["getFloat64"]((this["_o"] += 8) - 8, this["_e"]);
    },
    getStringUTF8: function() {
        var a = "", b;
        while (0 !== (b = this[_0x28d3("0x19")][_0x28d3("0x16")](this["_o"]++))) a += String[_0x28d3("0x1e")](b);
        return decodeURIComponent(escape(a));
    }
};

var log = {
    verbosity: 4,
    error: function(a) {
        if (log[_0x28d3("0x1f")] <= 0) return;
        console["error"](a);
    },
    warn: function(a) {
        if (log["verbosity"] <= 1) return;
        console[_0x28d3("0x20")](a);
    },
    info: function(a) {
        if (log[_0x28d3("0x1f")] <= 2) return;
        console[_0x28d3("0x21")](a);
    },
    debug: function(a) {
        if (log["verbosity"] <= 3) return;
        console[_0x28d3("0x22")](a);
    }
};

var wsUrl = null, SKIN_URL = "./skins/", USE_HTTPS = _0x28d3("0x23") == wHandle[_0x28d3("0x24")][_0x28d3("0x25")], PI_2 = 2 * Math["PI"], SEND_254 = new Uint8Array([ 254, 6, 0, 0, 0 ]), SEND_255 = new Uint8Array([ 255, 1, 0, 0, 0 ]), UINT8_CACHE = {
    1: new Uint8Array([ 1 ]),
    17: new Uint8Array([ 17 ]),
    21: new Uint8Array([ 21 ]),
    18: new Uint8Array([ 18 ]),
    19: new Uint8Array([ 19 ]),
    22: new Uint8Array([ 22 ]),
    23: new Uint8Array([ 23 ]),
    24: new Uint8Array([ 24 ]),
    254: new Uint8Array([ 254 ])
};

function wsCleanup() {
    if (!ws) return;
    log[_0x28d3("0x22")]("ws cleanup trigger");
    ws[_0x28d3("0x26")] = null;
    ws["onmessage"] = null;
    ws[_0x28d3("0x27")] = null;
    ws[_0x28d3("0x28")] = null;
    ws[_0x28d3("0x29")]();
    ws = null;
}

function wsInit(a, b) {
    if (ws) {
        log[_0x28d3("0x22")](_0x28d3("0x2a"));
        wsCleanup();
    }
    wjQuery(_0x28d3("0x2b"))[_0x28d3("0x2c")]();
    ws = new WebSocket(_0x28d3("0x2d") + a, window["location"][_0x28d3("0x2e")] + "x");
    ws[_0x28d3("0x2f")] = "arraybuffer";
    ws[_0x28d3("0x26")] = function(a) {
        wsOpen();
        if (1006 == b) showESCOverlay();
    };
    ws[_0x28d3("0x30")] = wsMessage;
    ws[_0x28d3("0x27")] = wsError;
    ws["onclose"] = wsClose;
}

function wsOpen() {
    disconnectDelay = 1e3;
    wjQuery("#connecting")[_0x28d3("0x31")]();
    wsSend(SEND_254);
    wsSend(SEND_255);
    log[_0x28d3("0x22")]("ws connected, using https: " + USE_HTTPS);
}

function wsError(a) {
    log[_0x28d3("0x20")](a);
}

function wsClose(a) {
    log[_0x28d3("0x22")](_0x28d3("0x32") + a[_0x28d3("0x33")] + " '" + a[_0x28d3("0x34")] + "'");
    wsCleanup();
    gameReset();
    setTimeout(function() {
        if (ws && 1 === ws[_0x28d3("0x35")]) return;
        wsInit(wsUrl, a["code"]);
    }, disconnectDelay *= 1.5);
}

function wsSend(a) {
    if (!ws) return;
    if (1 !== ws["readyState"]) return;
    if (a[_0x28d3("0x36")]) ws[_0x28d3("0x37")](a[_0x28d3("0x36")]()); else ws[_0x28d3("0x37")](a);
}

function wsMessage(a) {
    syncUpdStamp = Date[_0x28d3("0x3")]();
    var b = new Reader(new DataView(a[_0x28d3("0x38")]), 0, !![]);
    var c = b[_0x28d3("0x16")]();
    switch (c) {
      case 16:
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
        p = b[_0x28d3("0x1a")]();
        for (var t = 0; t < p; t++) {
            d = b[_0x28d3("0x1c")]();
            e = b[_0x28d3("0x1c")]();
            if (!cells["byId"]["hasOwnProperty"](d) || !cells[_0x28d3("0x39")][_0x28d3("0x3a")](e)) continue;
            cells["byId"][e]["destroy"](d);
        }
        while (!![]) {
            f = b[_0x28d3("0x1c")]();
            if (0 === f) break;
            h = b[_0x28d3("0x3b")]();
            i = b["getInt32"]();
            j = b[_0x28d3("0x1a")]();
            k = b["getUint8"]();
            m = !!(2 & k);
            n = !!(8 & k);
            o = !!(4 & k);
            q = m ? bytesToColor(b[_0x28d3("0x16")](), b[_0x28d3("0x16")](), b["getUint8"]()) : null;
            s = o ? b["getStringUTF8"]() : null;
            r = n ? b[_0x28d3("0x3c")]() : null;
            if (cells["byId"][_0x28d3("0x3a")](f)) {
                l = cells[_0x28d3("0x39")][f];
                l[_0x28d3("0x3d")](syncUpdStamp);
                l[_0x28d3("0x3e")] = syncUpdStamp;
                l["ox"] = l["x"];
                l["oy"] = l["y"];
                l["os"] = l["s"];
                l["nx"] = h;
                l["ny"] = i;
                l["ns"] = j;
                if (q) l[_0x28d3("0x3f")](q);
                if (s) l[_0x28d3("0x40")](s);
                if (r) l["setName"](r);
            } else {
                l = new Cell(f, h, i, j, r, q, s, k);
                cells[_0x28d3("0x39")][f] = l;
                cells[_0x28d3("0x41")][_0x28d3("0xf")](l);
            }
        }
        p = b[_0x28d3("0x1a")]();
        for (t = 0; t < p; t++) {
            e = b[_0x28d3("0x1c")]();
            if (cells["byId"][_0x28d3("0x3a")](e) && !cells["byId"][e][_0x28d3("0x42")]) cells[_0x28d3("0x39")][e][_0x28d3("0x43")](null);
        }
        break;

      case 17:
        targetX = b[_0x28d3("0x1d")]();
        targetY = b[_0x28d3("0x1d")]();
        targetZ = b[_0x28d3("0x1d")]();
        break;

      case 18:
        for (var t in cells["byId"]) cells["byId"][t][_0x28d3("0x43")](null);

      case 20:
        cells[_0x28d3("0x44")] = [];
        break;

      case 21:
        log["warn"](_0x28d3("0x45"));
        break;

      case 32:
        cells[_0x28d3("0x44")][_0x28d3("0xf")](b[_0x28d3("0x1c")]());
        break;

      case 48:
        leaderboard[_0x28d3("0x46")] = [];
        leaderboard[_0x28d3("0x47")] = "text";
        var p = b[_0x28d3("0x1c")]();
        for (t = 0; t < p; ++t) leaderboard[_0x28d3("0x46")][_0x28d3("0xf")](b[_0x28d3("0x3c")]());
        drawLeaderboard();
        break;

      case 49:
        leaderboard[_0x28d3("0x46")] = [];
        leaderboard[_0x28d3("0x47")] = _0x28d3("0x48");
        var p = b[_0x28d3("0x1c")]();
        for (t = 0; t < p; ++t) leaderboard[_0x28d3("0x46")][_0x28d3("0xf")]({
            me: !!b[_0x28d3("0x1c")](),
            name: b[_0x28d3("0x3c")]() || "Leaderboard"
        });
        drawLeaderboard();
        break;

      case 50:
        leaderboard[_0x28d3("0x46")] = [];
        leaderboard[_0x28d3("0x47")] = _0x28d3("0x49");
        var p = b[_0x28d3("0x1c")]();
        for (t = 0; t < p; ++t) leaderboard[_0x28d3("0x46")][_0x28d3("0xf")](b[_0x28d3("0x1d")]());
        drawLeaderboard();
        break;

      case 64:
        border[_0x28d3("0x4a")] = b[_0x28d3("0x4b")]();
        border[_0x28d3("0x4c")] = b[_0x28d3("0x4b")]();
        border[_0x28d3("0x4d")] = b[_0x28d3("0x4b")]();
        border[_0x28d3("0x4e")] = b["getFloat64"]();
        border[_0x28d3("0x4f")] = border[_0x28d3("0x4d")] - border["left"];
        border[_0x28d3("0x50")] = border[_0x28d3("0x4e")] - border[_0x28d3("0x4c")];
        border["centerX"] = (border[_0x28d3("0x4a")] + border["right"]) / 2;
        border[_0x28d3("0x51")] = (border["top"] + border[_0x28d3("0x4e")]) / 2;
        if (33 === a["data"][_0x28d3("0x52")]) break;
        if (!mapCenterSet) {
            mapCenterSet = !![];
            cameraX = targetX = border[_0x28d3("0x53")];
            cameraY = targetY = border[_0x28d3("0x51")];
            cameraZ = targetZ = 1;
        }
        b["getUint32"]();
        if (!/MultiOgar/[_0x28d3("0x54")](b[_0x28d3("0x3c")]()) || stats[_0x28d3("0x55")]) break;
        stats[_0x28d3("0x55")] = setInterval(function() {
            wsSend(UINT8_CACHE[254]);
            stats[_0x28d3("0x56")] = Date[_0x28d3("0x3")]();
        }, 2e3);
        break;

      case 99:
        var k = b[_0x28d3("0x16")]();
        var q = bytesToColor(b[_0x28d3("0x16")](), b[_0x28d3("0x16")](), b[_0x28d3("0x16")]());
        var r = b[_0x28d3("0x3c")]()[_0x28d3("0x57")]();
        var u = /\{([\w\W]+)\}/["exec"](r);
        if (u) r = r[_0x28d3("0x58")](u[0], "")[_0x28d3("0x57")]();
        var v = b[_0x28d3("0x3c")]();
        var w = !!(128 & k), x = !!(64 & k), y = !!(32 & k);
        if (w && r !== _0x28d3("0x59")) r = _0x28d3("0x5a") + r;
        if (x) r = "[ADMIN] " + r;
        if (y) r = _0x28d3("0x5b") + r;
        var z = Math[_0x28d3("0x5c")](3e3, 1e3 + 150 * v[_0x28d3("0x7")]);
        chat["waitUntil"] = syncUpdStamp - chat[_0x28d3("0x5d")] > 1e3 ? syncUpdStamp + z : chat[_0x28d3("0x5d")] + z;
        chat[_0x28d3("0x5e")]["push"]({
            server: w,
            admin: x,
            mod: y,
            color: q,
            name: r,
            message: v,
            time: syncUpdStamp
        });
        drawChat();
        break;

      case 254:
        stats["info"] = JSON[_0x28d3("0x5f")](b[_0x28d3("0x3c")]());
        stats[_0x28d3("0x60")] = syncUpdStamp - stats["pingLoopStamp"];
        drawStats();
        break;

      default:
        wsCleanup();
    }
}

function sendMouseMove(a, b) {
    var c = new Writer(!![]);
    c["setUint8"](16);
    c[_0x28d3("0x13")](a);
    c[_0x28d3("0x13")](b);
    c["_b"][_0x28d3("0xf")](0, 0, 0, 0);
    wsSend(c);
}

function sendPlay(a) {
    log[_0x28d3("0x22")](_0x28d3("0x61"));
    var b = !![];
    var c = new Writer(!![]);
    c[_0x28d3("0x62")](0);
    c[_0x28d3("0x63")](a + _0x28d3("0x64"));
    wsSend(c);
}

function sendChat(a) {
    var b = new Writer();
    b[_0x28d3("0x62")](99);
    b["setUint8"](0);
    b["setStringUTF8"](a);
    wsSend(b);
}

function gameReset() {
    cleanupObject(cells);
    cleanupObject(border);
    cleanupObject(leaderboard);
    cleanupObject(chat);
    cleanupObject(stats);
    chat[_0x28d3("0x5e")] = [];
    leaderboard[_0x28d3("0x46")] = [];
    cells[_0x28d3("0x44")] = [];
    cells[_0x28d3("0x39")] = {};
    cells["list"] = [];
    cameraX = cameraY = targetX = targetY = 0;
    cameraZ = targetZ = 1;
    mapCenterSet = ![];
}

var cells = Object[_0x28d3("0x65")]({
    mine: [],
    byId: {},
    list: []
});

var border = Object["create"]({
    left: -2e3,
    right: 2e3,
    top: -2e3,
    bottom: 2e3,
    width: 4e3,
    height: 4e3,
    centerX: -1,
    centerY: -1
});

var leaderboard = Object[_0x28d3("0x65")]({
    type: 0/0,
    items: null,
    canvas: document[_0x28d3("0x66")](_0x28d3("0x67")),
    teams: [ "#F33", "#3F3", _0x28d3("0x68") ]
});

var chat = Object["create"]({
    messages: [],
    waitUntil: 0,
    canvas: document["createElement"](_0x28d3("0x67")),
    visible: ![]
});

var stats = Object[_0x28d3("0x65")]({
    framesPerSecond: 0,
    latency: 0/0,
    supports: null,
    info: null,
    pingLoopId: 0/0,
    pingLoopStamp: null,
    canvas: document[_0x28d3("0x66")](_0x28d3("0x67")),
    visible: ![],
    score: 0/0,
    maxScore: 0
});

var ws = null;

var wsUrl = null;

var disconnectDelay = 1e3;

var syncUpdStamp = Date[_0x28d3("0x3")]();

var syncAppStamp = Date[_0x28d3("0x3")]();

var mainCanvas = null;

var mainCtx = null;

var knownSkins = {};

var loadedSkins = {};

var escOverlayShown = ![];

var isTyping = ![];

var chatBox = null;

var mapCenterSet = ![];

var cameraX = 0;

var cameraY = 0;

var cameraZ = 1;

var cameraZInvd = 1;

var targetX = 0;

var targetY = 0;

var targetZ = 1;

var viewMult = 1;

var mouseX = 0/0;

var mouseY = 0/0;

var mouseZ = 1;

var settings = {
    mobile: _0x28d3("0x69") in document,
    showMass: ![],
    showNames: !![],
    showLeaderboard: !![],
    showChat: !![],
    showGrid: !![],
    showTextOutline: !![],
    showColor: !![],
    showSkins: !![],
    showMinimap: !![],
    darkTheme: ![],
    allowGETipSet: ![]
};

var pressed = {
    space: ![],
    w: ![],
    e: ![],
    r: ![],
    t: ![],
    p: ![],
    q: ![],
    esc: ![]
};

if (null !== wHandle[_0x28d3("0x6a")]) wjQuery(window)[_0x28d3("0x6b")](function() {
    wjQuery(".save")[_0x28d3("0x6c")](function() {
        var a = wjQuery(this)[_0x28d3("0x38")](_0x28d3("0x6d"));
        var b = wHandle["localStorage"][_0x28d3("0x6e")]("checkbox-" + a);
        if (b && b == _0x28d3("0x6f") && (0 != a || 10 != a)) {
            wjQuery(this)[_0x28d3("0x70")](_0x28d3("0x71"), _0x28d3("0x6f"));
            wjQuery(this)["trigger"](_0x28d3("0x72"));
        } else if ((0 == a || 10 == a) && null != b) wjQuery(this)[_0x28d3("0x73")](b);
    });
    wjQuery(_0x28d3("0x74"))["change"](function() {
        var a = wjQuery(this)["data"](_0x28d3("0x6d"));
        var b = 0 == a || 10 == a ? wjQuery(this)[_0x28d3("0x73")]() : wjQuery(this)[_0x28d3("0x70")](_0x28d3("0x71"));
        wHandle[_0x28d3("0x6a")]["setItem"]("checkbox-" + a, b);
    });
});

wjQuery["ajax"]({
    type: _0x28d3("0x75"),
    dataType: _0x28d3("0x76"),
    url: _0x28d3("0x77"),
    data: {
        action: _0x28d3("0x78")
    },
    success: function(a) {
        var b = Date[_0x28d3("0x3")]();
        response = JSON[_0x28d3("0x5f")](a["names"]);
        for (var c = 0; c < response[_0x28d3("0x7")]; c++) knownSkins[response[c]] = b;
        for (var c in knownSkins) if (knownSkins[c] !== b) delete knownSkins[c];
    }
});

function hideESCOverlay() {
    escOverlayShown = ![];
    wjQuery("#overlays")[_0x28d3("0x31")]();
}

function showESCOverlay() {
    escOverlayShown = !![];
    wjQuery("#overlays")[_0x28d3("0x79")](300);
}

function toCamera(a) {
    a[_0x28d3("0x7a")](mainCanvas[_0x28d3("0x4f")] / 2, mainCanvas[_0x28d3("0x50")] / 2);
    scaleForth(a);
    a["translate"](-cameraX, -cameraY);
}

function scaleForth(a) {
    a[_0x28d3("0x7b")](cameraZ, cameraZ);
}

function scaleBack(a) {
    a[_0x28d3("0x7b")](cameraZInvd, cameraZInvd);
}

function fromCamera(a) {
    a[_0x28d3("0x7a")](cameraX, cameraY);
    scaleBack(a);
    a["translate"](-mainCanvas[_0x28d3("0x4f")] / 2, -mainCanvas[_0x28d3("0x50")] / 2);
}

function drawChat() {
    if (0 === chat[_0x28d3("0x5e")]["length"] && settings[_0x28d3("0x7c")]) return chat[_0x28d3("0x7d")] = ![];
    if (!settings[_0x28d3("0x7c")]) return chat[_0x28d3("0x7d")] = ![];
    chat["visible"] = !![];
    var a = chat[_0x28d3("0x67")];
    var b = a[_0x28d3("0x7e")]("2d");
    var c = chat[_0x28d3("0x5e")][_0x28d3("0xc")](-15);
    var d = [];
    for (var e = 0, f = c[_0x28d3("0x7")]; e < f; e++) d[_0x28d3("0xf")]([ {
        text: c[e][_0x28d3("0x7f")],
        color: c[e][_0x28d3("0x80")]
    }, {
        text: " " + c[e][_0x28d3("0x81")],
        color: settings[_0x28d3("0x82")] ? _0x28d3("0x83") : "#666"
    } ]);
    var g = 0;
    var h = 20 * f + 2 + 5;
    for (var e = 0; e < f; e++) {
        var i = 0;
        var j = d[e];
        for (var k = 0; k < j[_0x28d3("0x7")]; k++) {
            b[_0x28d3("0x84")] = _0x28d3("0x85");
            j[k][_0x28d3("0x4f")] = b[_0x28d3("0x86")](j[k]["text"])[_0x28d3("0x4f")] + 5;
            i += j[k][_0x28d3("0x4f")] + 5;
        }
        g = Math[_0x28d3("0x5c")](i, g);
    }
    a["width"] = g;
    a[_0x28d3("0x50")] = h;
    for (var e = 0; e < f; e++) {
        g = 0;
        var j = d[e];
        for (var k = 0; k < j["length"]; k++) {
            b[_0x28d3("0x84")] = _0x28d3("0x85");
            b[_0x28d3("0x87")] = j[k][_0x28d3("0x80")];
            b["fillText"](j[k]["text"], g, 20 * (1 + e) - 5);
            g += j[k][_0x28d3("0x4f")];
        }
    }
}

function drawStats() {
    if (!stats.info) return stats.visible = false;
    stats.visible = true;

    var canvas = stats.canvas;
    var ctx = canvas.getContext("2d");
    ctx.font = "14px Ubuntu";
    var rows = [
        stats.info.playersTotal + " / " + stats.info.playersLimit + " players",
        prettyPrintTime(stats.info.uptime)
    ];
    var width = 0;
    for (var i = 0; i < rows.length; i++)
        width = Math.max(width, 2 + ctx.measureText(rows[i]).width + 2);
    canvas.width = width;
    canvas.height = rows.length * (14 + 2);
    ctx.font = "14px Ubuntu";
    ctx.fillStyle = settings.darkTheme ? "#AAA" : "#555";
    ctx.textBaseline = "top";
    for (var i = 0; i < rows.length; i++)
        ctx.fillText(rows[i], 2, -2 + i * (14 + 2));
}

function prettyPrintTime(a) {
    a = ~~a;
    var b = 14400;
    var c = b - a;
    var d = ~~(c / 60);
    if (d < 1) return _0x28d3("0x8f");
    var e = ~~(d / 60);
    if (e < 1) return d + _0x28d3("0x90");
    var f = ~~(e / 24);
    if (f < 1) return e + "h";
    return f + "d";
}

function drawLeaderboard() {
    if (leaderboard[_0x28d3('0x47')] === NaN) return leaderboard[_0x28d3('0x7d')] = ![];
    if (leaderboard[_0x28d3('0x46')][_0x28d3('0x7')] === 0x0) return leaderboard['visible'] = ![];
    leaderboard[_0x28d3('0x7d')] = !![];
    var _0x3b1361 = leaderboard[_0x28d3('0x67')];
    var _0x11ec91 = _0x3b1361['getContext']('2d');
    var _0x120017 = leaderboard[_0x28d3('0x46')]['length'];
    _0x3b1361[_0x28d3('0x4f')] = 0xc8;
    _0x3b1361[_0x28d3('0x50')] = leaderboard[_0x28d3('0x47')] !== _0x28d3('0x49') ? 0x3c + 0x18 * _0x120017 : 0xf0;
    _0x11ec91['globalAlpha'] = 0.4;
    _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x91');
    _0x11ec91[_0x28d3('0x92')](0x0, 0x0, 0xc8, _0x3b1361[_0x28d3('0x50')]);
    _0x11ec91[_0x28d3('0x93')] = 0x1;
    _0x11ec91['fillStyle'] = _0x28d3('0x83');
    _0x11ec91[_0x28d3('0x84')] = '30px Ubuntu';
    if (stats[_0x28d3('0x21')]) {
            var _0x535601 = stats[_0x28d3('0x21')][_0x28d3('0x7f')] || _0x28d3('0x94');
    } else {
            var _0x535601 = 'بدون اسم';
    }
    _0x11ec91[_0x28d3('0x8e')](_0x535601, 0x64 - _0x11ec91['measureText'](_0x535601)[_0x28d3('0x4f')] / 0x2, 0x28);
    if (leaderboard[_0x28d3('0x47')] === _0x28d3('0x49')) {
            var _0x11b1b2 = 0x0;
            for (var _0x26d460 = 0x0; _0x26d460 < _0x120017; _0x26d460++) {
                    _0x11ec91[_0x28d3('0x87')] = leaderboard[_0x28d3('0x95')][_0x26d460];
                    _0x11ec91[_0x28d3('0x96')]();
                    _0x11ec91[_0x28d3('0x97')](0x64, 0x8c);
                    _0x11ec91[_0x28d3('0x98')](0x64, 0x8c, 0x50, _0x11b1b2, _0x11b1b2 += leaderboard[_0x28d3('0x46')][_0x26d460] * PI_2, ![]);
                    _0x11ec91['closePath']();
                    _0x11ec91[_0x28d3('0x99')]();
            }
    } else {
            var _0x31562d, _0x461bf2 = ![]
                    , _0x508a19, _0x40f1f1;
            _0x11ec91['font'] = '20px Ubuntu';
            for (var _0x26d460 = 0x0; _0x26d460 < _0x120017; _0x26d460++) {
                    if (leaderboard['type'] === 'text') _0x31562d = leaderboard[_0x28d3('0x46')][_0x26d460];
                    else _0x31562d = leaderboard[_0x28d3('0x46')][_0x26d460][_0x28d3('0x7f')], _0x461bf2 = leaderboard[_0x28d3('0x46')][_0x26d460]['me'];
                    var _0x389c0d = /\{([\w\W]+)\}/ [_0x28d3('0x9a')](_0x31562d);
                    if (_0x389c0d) _0x31562d = _0x31562d['replace'](_0x389c0d[0x0], '')['trim']();
                    _0x11ec91['fillStyle'] = _0x461bf2 ? '#FAA' : _0x28d3('0x83');
                    if (0x0 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x9b');
                    }
                    if (0x1 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = '#7D1935';
                    }
                    if (0x2 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x9c');
                    }
                    if (0x3 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x9d');
                    }
                    if (0x4 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x9e');
                    }
                    if (0x5 == _0x26d460) {
                            _0x11ec91[_0x28d3('0x87')] = _0x28d3('0x9f');
                    }
                    if (leaderboard[_0x28d3('0x47')] === _0x28d3('0x48')) _0x31562d = _0x26d460 + 0x1 + '. ' + (_0x31562d || 'بدون اسم');
                    var _0x40f1f1 = (_0x508a19 = _0x11ec91[_0x28d3('0x86')](_0x31562d)[_0x28d3('0x4f')]) > 0xc8 ? 0x2 : 0x64 - _0x508a19 * 0.5;
                    _0x11ec91[_0x28d3('0x8e')](_0x31562d, _0x40f1f1, 0x46 + 0x18 * _0x26d460);
            }
    }
}


function drawGrid() {
    mainCtx[_0x28d3("0xa0")]();
    mainCtx[_0x28d3("0xa1")] = 1;
    mainCtx["strokeStyle"] = settings[_0x28d3("0x82")] ? _0x28d3("0x8b") : "#000";
    mainCtx["globalAlpha"] = .2;
    var a = 50, b;
    cW = mainCanvas[_0x28d3("0x4f")] / cameraZ, cH = mainCanvas["height"] / cameraZ, 
    startLeft = (-cameraX + cW / 2) % a, startTop = (-cameraY + cH / 2) % a;
    scaleForth(mainCtx);
    mainCtx[_0x28d3("0x96")]();
    for (b = startLeft; b < cW; b += a) {
        mainCtx["moveTo"](b, 0);
        mainCtx["lineTo"](b, cH);
    }
    for (b = startTop; b < cH; b += a) {
        mainCtx[_0x28d3("0x97")](0, b);
        mainCtx["lineTo"](cW, b);
    }
    mainCtx[_0x28d3("0xa2")]();
    mainCtx[_0x28d3("0xa3")]();
    mainCtx["restore"]();
}

function drawBorders() {
    mainCtx[_0x28d3("0xa4")] = "#ff0000";
    mainCtx[_0x28d3("0xa1")] = 20;
    mainCtx[_0x28d3("0xa5")] = _0x28d3("0xa6");
    mainCtx["lineJoin"] = _0x28d3("0xa6");
    mainCtx[_0x28d3("0x96")]();
    mainCtx[_0x28d3("0x97")](border[_0x28d3("0x4a")], border["top"]);
    mainCtx[_0x28d3("0xa7")](border[_0x28d3("0x4d")], border[_0x28d3("0x4c")]);
    mainCtx["lineTo"](border["right"], border[_0x28d3("0x4e")]);
    mainCtx["lineTo"](border[_0x28d3("0x4a")], border[_0x28d3("0x4e")]);
    mainCtx[_0x28d3("0xa2")]();
    mainCtx[_0x28d3("0xa3")]();
}

function drawMinimap() {
    if (border.centerX !== 0 || border.centerY !== 0 || !settings.showMinimap) return;
    mainCtx.save();
    var targetSize = 200;
    var width = targetSize * (border.width / border.height);
    var height = targetSize * (border.height / border.width);
    var beginX = mainCanvas.width / viewMult - width;
    var beginY = mainCanvas.height / viewMult - height;

    mainCtx.fillStyle = "#000";
    mainCtx.globalAlpha = 0.4;
    mainCtx.fillRect(beginX, beginY, width, height);
    mainCtx.globalAlpha = 1;

    var sectorCount = 5;
    var sectorNames = ["ABCDE", "12345"];
    var sectorWidth = width / sectorCount;
    var sectorHeight = height / sectorCount;
    var sectorNameSize = Math.min(sectorWidth, sectorHeight) / 3;

    mainCtx.fillStyle = settings.darkTheme ? "#666" : "#DDD";
    mainCtx.textBaseline = "middle";
    mainCtx.textAlign = "center";
    mainCtx.font = sectorNameSize + "px Ubuntu";

    for (var i = 0; i < sectorCount; i++) {
        var x = sectorWidth / 2 + i * sectorWidth;
        for (var j = 0; j < sectorCount; j++) {
            var y = sectorHeight / 2 + j * sectorHeight;
            mainCtx.fillText(sectorNames[0][i] + sectorNames[1][j], beginX + x, beginY + y);
        }
    }

    var xScaler = width / border.width;
    var yScaler = height / border.height;
    var halfWidth = border.width / 2;
    var halfHeight = border.height / 2;
    var myPosX = beginX + (cameraX + halfWidth) * xScaler;
    var myPosY = beginY + (cameraY + halfHeight) * yScaler;
    mainCtx.beginPath();
    if (cells.mine.length) {
        for (var i = 0; i < cells.mine.length; i++) {
            var cell = cells.byId[cells.mine[i]];
            if (cell) {
                mainCtx.fillStyle = cell.color; // repeat assignment of same color is OK
                var x = beginX + (cell.x + halfWidth) * xScaler;
                var y = beginY + (cell.y + halfHeight) * yScaler;
                var r = cell.s * xScaler; // if map is square, both scalers should be the same
                mainCtx.moveTo(x + r, y);
                mainCtx.arc(x, y, r, 0, PI_2);
            }
        }
    } else {
        mainCtx.fillStyle = "#FAA";
        mainCtx.arc(myPosX, myPosY, 5, 0, PI_2);
    }
    mainCtx.fill();

    // draw name above user's pos if they have a cell on the screen
    var cell = null;
    for (var i = 0, l = cells.mine.length; i < l; i++)
        if (cells.byId.hasOwnProperty(cells.mine[i])) {
            cell = cells.byId[cells.mine[i]];
            break;
        }
    if (cell !== null) {
        mainCtx.fillStyle = settings.darkTheme ? "#DDD" : "#222";
        var textSize = sectorNameSize;
        mainCtx.font = textSize + "px Ubuntu";
        mainCtx.fillText(cell.name, myPosX, myPosY - 7 - textSize / 2);
    }

    mainCtx.restore();
}
function drawGame() {
    stats[_0x28d3("0xaf")] += (1e3 / Math[_0x28d3("0x5c")](Date[_0x28d3("0x3")]() - syncAppStamp, 1) - stats[_0x28d3("0xaf")]) / 10;
    syncAppStamp = Date["now"]();
    var a = cells[_0x28d3("0x41")][_0x28d3("0xc")](0)["sort"](cellSort);
    for (var b = 0, c = a[_0x28d3("0x7")]; b < c; b++) a[b][_0x28d3("0x3d")](syncAppStamp);
    cameraUpdate();
    mainCtx["save"]();
    mainCtx[_0x28d3("0x87")] = settings[_0x28d3("0x82")] ? _0x28d3("0xb0") : _0x28d3("0xb1");
    mainCtx[_0x28d3("0x92")](0, 0, mainCanvas[_0x28d3("0x4f")], mainCanvas[_0x28d3("0x50")]);
    if (settings[_0x28d3("0xb2")]) drawGrid();
    toCamera(mainCtx);
    drawBorders();
    for (var b = 0, c = a[_0x28d3("0x7")]; b < c; b++) a[b][_0x28d3("0xb3")](mainCtx);
    fromCamera(mainCtx);
    mainCtx[_0x28d3("0x7b")](viewMult, viewMult);
    var d = 2;
    mainCtx[_0x28d3("0x87")] = settings[_0x28d3("0x82")] ? _0x28d3("0x83") : _0x28d3("0x91");
    mainCtx[_0x28d3("0x8d")] = _0x28d3("0x4c");
    if (!isNaN(stats[_0x28d3("0xb4")])) {
        mainCtx["font"] = _0x28d3("0xb5");
        mainCtx[_0x28d3("0x8e")]("Score: " + stats[_0x28d3("0xb4")], 2, d);
        d += 30;
        mainCtx["font"] = _0x28d3("0xb6");
        mainCtx[_0x28d3("0x8e")](_0x28d3("0xb7") + stats[_0x28d3("0xb8")], 2, d);
        d += 30;
    }
    mainCtx[_0x28d3("0x84")] = _0x28d3("0xb9");
    var e = "";
    if (!isNaN(stats["latency"])) e += "Ping: " + stats["latency"] + _0x28d3("0xba");
    e += "FPS: " + ~~stats[_0x28d3("0xaf")];
    mainCtx[_0x28d3("0x8e")](e, 2, d);
    d += 15;
    if (stats["visible"]) mainCtx[_0x28d3("0xbb")](stats[_0x28d3("0x67")], 2, d);
    if (leaderboard[_0x28d3("0x7d")]) mainCtx[_0x28d3("0xbb")](leaderboard[_0x28d3("0x67")], mainCanvas["width"] / viewMult - 10 - leaderboard[_0x28d3("0x67")][_0x28d3("0x4f")], 10);
    if (chat[_0x28d3("0x7d")] || isTyping) {
        mainCtx[_0x28d3("0x93")] = isTyping ? 1 : Math[_0x28d3("0x5c")](1e3 - syncAppStamp + chat[_0x28d3("0x5d")], 0) / 1e3;
        mainCtx[_0x28d3("0xbb")](chat[_0x28d3("0x67")], 10 / viewMult, (mainCanvas["height"] - 150) / viewMult - chat["canvas"][_0x28d3("0x50")]);
        mainCtx[_0x28d3("0x93")] = 1;
    }
    drawMinimap();
    mainCtx["restore"]();
    cacheCleanup();
    wHandle["requestAnimationFrame"](drawGame);
}

function cellSort(a, b) {
    return a["s"] === b["s"] ? a["id"] - b["id"] : a["s"] - b["s"];
}

function cameraUpdate() {
    var a = [];
    for (var b = 0; b < cells[_0x28d3("0x44")][_0x28d3("0x7")]; b++) if (cells[_0x28d3("0x39")]["hasOwnProperty"](cells[_0x28d3("0x44")][b])) a[_0x28d3("0xf")](cells[_0x28d3("0x39")][cells["mine"][b]]);
    if (a[_0x28d3("0x7")] > 0) {
        var c = 0, d = 0, e = 0, f = 0;
        for (var b = 0, g = a[_0x28d3("0x7")]; b < g; b++) {
            var h = a[b];
            f += ~~(h["ns"] * h["ns"] / 100);
            c += h["x"];
            d += h["y"];
            e += h["s"];
        }
        targetX = c / g;
        targetY = d / g;
        targetZ = Math[_0x28d3("0xbc")](Math[_0x28d3("0x90")](64 / e, 1), .4);
        cameraX += (targetX - cameraX) / 2;
        cameraY += (targetY - cameraY) / 2;
        stats[_0x28d3("0xb4")] = f;
        stats[_0x28d3("0xb8")] = Math[_0x28d3("0x5c")](stats[_0x28d3("0xb8")], f);
    } else {
        stats[_0x28d3("0xb4")] = 0/0;
        stats[_0x28d3("0xb8")] = 0;
        cameraX += (targetX - cameraX) / 20;
        cameraY += (targetY - cameraY) / 20;
    }
    cameraZ += (targetZ * viewMult * mouseZ - cameraZ) / 9;
    cameraZInvd = 1 / cameraZ;
}

function Cell(a, b, c, d, e, f, g, h) {
    this["id"] = a;
    this["x"] = this["nx"] = this["ox"] = b;
    this["y"] = this["ny"] = this["oy"] = c;
    this["s"] = this["ns"] = this["os"] = d;
    this[_0x28d3("0x3f")](f);
    this[_0x28d3("0xbd")](e);
    this[_0x28d3("0x40")](g);
    this[_0x28d3("0xbe")] = 1 & h || 16 & h;
    this[_0x28d3("0xbf")] = !!(32 & h);
    this[_0x28d3("0xc0")] = syncUpdStamp;
}

Cell["prototype"] = {
    destroyed: ![],
    id: 0,
    diedBy: 0,
    ox: 0,
    x: 0,
    nx: 0,
    oy: 0,
    y: 0,
    ny: 0,
    os: 0,
    s: 0,
    ns: 0,
    nameSize: 0,
    drawNameSize: 0,
    color: "#FFF",
    sColor: _0x28d3("0xc1"),
    skin: null,
    jagged: ![],
    born: null,
    updated: null,
    dead: null,
    destroy: function(a) {
        delete cells[_0x28d3("0x39")][this["id"]];
        if (cells["mine"][_0x28d3("0x8")](this["id"]) && 0 === cells["mine"][_0x28d3("0x7")]) showESCOverlay();
        this[_0x28d3("0x42")] = !![];
        this[_0x28d3("0xc2")] = syncUpdStamp;
        if (a && !this[_0x28d3("0xc3")]) this[_0x28d3("0xc3")] = a;
    },
    update: function(a) {
        var b = (a - this["updated"]) / 215;
        b = Math[_0x28d3("0x5c")](Math[_0x28d3("0x90")](b, 1), 0);
        if (this[_0x28d3("0x42")] && Date[_0x28d3("0x3")]() > this["dead"] + 200) cells["list"][_0x28d3("0x8")](this); else if (this[_0x28d3("0xc3")] && cells["byId"][_0x28d3("0x3a")](this["diedBy"])) {
            this["nx"] = cells["byId"][this[_0x28d3("0xc3")]]["x"];
            this["ny"] = cells["byId"][this[_0x28d3("0xc3")]]["y"];
        }
        this["x"] = this["ox"] + (this["nx"] - this["ox"]) * b;
        this["y"] = this["oy"] + (this["ny"] - this["oy"]) * b;
        this["s"] = this["os"] + (this["ns"] - this["os"]) * b;
        this[_0x28d3("0xc4")] = 3 * ~~(~~Math[_0x28d3("0x5c")](~~(.3 * this["ns"]), 24) / 3);
        this[_0x28d3("0xc5")] = 3 * ~~(~~Math["max"](~~(.3 * this["s"]), 24) / 3);
    },
    setName: function(a) {
        a = a;
        var b = /\{([\w\W]+)\}/[_0x28d3("0x9a")](a);
        if (null === this[_0x28d3("0xc6")] && null !== b) {
            this["name"] = a[_0x28d3("0x58")](b[0], "")[_0x28d3("0x57")]();
            this[_0x28d3("0x40")](b[1]);
        } else this[_0x28d3("0x7f")] = a;
    },
    setSkin: function(a) {
        this[_0x28d3("0xc6")] = (a && "%" === a[0] ? a[_0x28d3("0xc")](1) : a) || this[_0x28d3("0xc6")];
        if (null === this[_0x28d3("0xc6")] || !knownSkins[_0x28d3("0x3a")](this[_0x28d3("0xc6")]) || loadedSkins[this[_0x28d3("0xc6")]]) return;
        loadedSkins[this[_0x28d3("0xc6")]] = new Image();
        loadedSkins[this[_0x28d3("0xc6")]]["src"] = "" + SKIN_URL + this[_0x28d3("0xc6")] + _0x28d3("0xc7");
    },
    setColor: function(a) {
        if (!a) return;
        this["color"] = a;
        this[_0x28d3("0xc8")] = darkenColor(a);
    },
    draw: function(a) {
        a[_0x28d3("0xa0")]();
        this["drawShape"](a);
        this[_0x28d3("0xc9")](a);
        a[_0x28d3("0xae")]();
    },
    drawShape: function(a) {
        a[_0x28d3("0x87")] = settings[_0x28d3("0xca")] ? this["color"] : Cell["prototype"][_0x28d3("0x80")];
        a[_0x28d3("0xa4")] = settings[_0x28d3("0xca")] ? this[_0x28d3("0xc8")] : Cell[_0x28d3("0x5")][_0x28d3("0xc8")];
        a[_0x28d3("0xa1")] = Math[_0x28d3("0x5c")](~~(this["s"] / 50), 10);
        if (!this["ejected"] && 20 < this["s"]) this["s"] -= a[_0x28d3("0xa1")] / 2 - 2;
        a["beginPath"]();
        if (this[_0x28d3("0xbe")]) {
            var b = 120;
            var c = PI_2 / b;
            a["moveTo"](this["x"], this["y"] + this["s"] + 3);
            for (var d = 1; d < b; d++) {
                var e = d * c;
                var f = this["s"] - 3 + 6 * (d % 2 === 0);
                a[_0x28d3("0xa7")](this["x"] + f * Math[_0x28d3("0xcb")](e), this["y"] + f * Math[_0x28d3("0xcc")](e));
            }
            a[_0x28d3("0xa7")](this["x"], this["y"] + this["s"] + 3);
        } else a[_0x28d3("0x98")](this["x"], this["y"], this["s"], 0, PI_2, ![]);
        a[_0x28d3("0xa2")]();
        if (this[_0x28d3("0x42")]) a[_0x28d3("0x93")] = Math["max"](200 - Date[_0x28d3("0x3")]() + this[_0x28d3("0xc2")], 0) / 100; else a[_0x28d3("0x93")] = Math[_0x28d3("0x90")](Date["now"]() - this[_0x28d3("0xc0")], 200) / 100;
        if (!this[_0x28d3("0xbf")] && 20 < this["s"]) a[_0x28d3("0xa3")]();
        a[_0x28d3("0x99")]();
        if (settings[_0x28d3("0xcd")] && this[_0x28d3("0xc6")]) {
            var g = loadedSkins[this[_0x28d3("0xc6")]];
            if (g && g["complete"] && g[_0x28d3("0x4f")] && g[_0x28d3("0x50")]) {
                a[_0x28d3("0xa0")]();
                a[_0x28d3("0xce")]();
                scaleBack(a);
                var h = this["s"] * cameraZ;
                a[_0x28d3("0xbb")](g, this["x"] * cameraZ - h, this["y"] * cameraZ - h, h *= 2, h);
                scaleForth(a);
                a["restore"]();
            }
        }
        if (!this[_0x28d3("0xbf")] && 20 < this["s"]) this["s"] += a[_0x28d3("0xa1")] / 2 - 2;
    },
    drawText: function(a) {
        if (this["s"] < 20 || this[_0x28d3("0xbe")]) return;
        if (settings[_0x28d3("0xcf")] && (cells[_0x28d3("0x44")][_0x28d3("0x9")](this["id"]) !== -1 || 0 === cells[_0x28d3("0x44")][_0x28d3("0x7")])) {
            var b = (~~(this["s"] * this["s"] / 100))[_0x28d3("0xb")]();
            if (this[_0x28d3("0x7f")] && settings[_0x28d3("0xd0")]) {
                drawText(a, ![], this["x"], this["y"], this[_0x28d3("0xc4")], this[_0x28d3("0xc5")], this[_0x28d3("0x7f")]);
                var c = this["y"] + Math[_0x28d3("0x5c")](this["s"] / 4.5, this[_0x28d3("0xc4")] / 1.5);
                drawText(a, !![], this["x"], c, this[_0x28d3("0xc4")] / 2, this[_0x28d3("0xc5")] / 2, b);
            } else drawText(a, !![], this["x"], this["y"], this["nameSize"] / 2, this[_0x28d3("0xc5")] / 2, b);
        } else if (this[_0x28d3("0x7f")] && settings[_0x28d3("0xd0")]) drawText(a, ![], this["x"], this["y"], this[_0x28d3("0xc4")], this[_0x28d3("0xc5")], this["name"]);
    }
};

function cacheCleanup() {
    for (var a in cachedNames) {
        for (var b in cachedNames[a]) if (syncAppStamp - cachedNames[a][b][_0x28d3("0xd1")] >= 5e3) delete cachedNames[a][b];
        if (cachedNames[a] === {}) delete cachedNames[a];
    }
    for (var a in cachedMass) if (syncAppStamp - cachedMass[a]["accessTime"] >= 5e3) delete cachedMass[a];
}

var cachedNames = {};

var cachedMass = {};

function drawTextOnto(a, b, c, d) {
    b["font"] = d + _0x28d3("0xac");
    b[_0x28d3("0xa1")] = settings[_0x28d3("0xd2")] ? Math[_0x28d3("0x5c")](~~(d / 10), 2) : 2;
    a[_0x28d3("0x4f")] = b[_0x28d3("0x86")](c)["width"] + 2 * b[_0x28d3("0xa1")];
    a[_0x28d3("0x50")] = 4 * d;
    b[_0x28d3("0x84")] = d + _0x28d3("0xac");
    b[_0x28d3("0xa1")] = settings["showTextOutline"] ? Math[_0x28d3("0x5c")](~~(d / 10), 2) : 2;
    b[_0x28d3("0x8d")] = "middle";
    b[_0x28d3("0xab")] = _0x28d3("0xd3");
    b[_0x28d3("0x87")] = _0x28d3("0x83");
    b["strokeStyle"] = "#000";
    b["translate"](a[_0x28d3("0x4f")] / 2, 2 * d);
    1 !== b[_0x28d3("0xa1")] && b[_0x28d3("0xd4")](c, 0, 0);
    b[_0x28d3("0x8e")](c, 0, 0);
}

function drawRaw(a, b, c, d, e) {
    a[_0x28d3("0x84")] = e + _0x28d3("0xac");
    a[_0x28d3("0x8d")] = "middle";
    a[_0x28d3("0xab")] = _0x28d3("0xd3");
    a[_0x28d3("0xa1")] = settings[_0x28d3("0xd2")] ? Math[_0x28d3("0x5c")](~~(e / 10), 2) : 2;
    a[_0x28d3("0x87")] = _0x28d3("0x83");
    a["strokeStyle"] = "#000";
    1 !== a[_0x28d3("0xa1")] && a[_0x28d3("0xd4")](d, b, c);
    a["fillText"](d, b, c);
    a[_0x28d3("0xae")]();
}

function newNameCache(a, b) {
    var c = document[_0x28d3("0x66")](_0x28d3("0x67"));
    var d = c[_0x28d3("0x7e")]("2d");
    drawTextOnto(c, d, a, b);
    cachedNames[a] = cachedNames[a] || {};
    cachedNames[a][b] = {
        width: c[_0x28d3("0x4f")],
        height: c[_0x28d3("0x50")],
        canvas: c,
        value: a,
        size: b,
        accessTime: syncAppStamp
    };
    return cachedNames[a][b];
}

function newMassCache(a) {
    var b = {
        "0": {},
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {},
        "8": {},
        "9": {}
    };
    for (var c in b) {
        var d = b[c]["canvas"] = document[_0x28d3("0x66")](_0x28d3("0x67"));
        var e = d[_0x28d3("0x7e")]("2d");
        drawTextOnto(d, e, c, a);
        b[c][_0x28d3("0x67")] = d;
        b[c][_0x28d3("0x4f")] = d["width"];
        b[c][_0x28d3("0x50")] = d["height"];
    }
    cachedMass[a] = {
        canvases: b,
        size: a,
        lineWidth: settings["showTextOutline"] ? Math[_0x28d3("0x5c")](~~(a / 10), 2) : 2,
        accessTime: syncAppStamp
    };
    return cachedMass[a];
}

function toleranceTest(a, b, c) {
    return a - c <= b && b <= a + c;
}

function getNameCache(a, b) {
    if (!cachedNames[a]) return newNameCache(a, b);
    var c = Object[_0x28d3("0xd5")](cachedNames[a]);
    for (var d = 0, e = c[_0x28d3("0x7")]; d < e; d++) if (toleranceTest(b, c[d], b / 4)) return cachedNames[a][c[d]];
    return newNameCache(a, b);
}

function getMassCache(a) {
    var b = Object[_0x28d3("0xd5")](cachedMass);
    for (var c = 0, d = b[_0x28d3("0x7")]; c < d; c++) if (toleranceTest(a, b[c], a / 4)) return cachedMass[b[c]];
    return newMassCache(a);
}

function drawText(a, b, c, d, e, f, g) {
    a["save"]();
    if (e > 500) return drawRaw(a, c, d, g, f);
    a["imageSmoothingQuality"] = "high";
    if (b) {
        var h = getMassCache(e);
        h[_0x28d3("0xd1")] = syncAppStamp;
        var i = h[_0x28d3("0xd6")];
        var j = f / h[_0x28d3("0xd7")];
        var k = 0;
        for (var l = 0; l < g["length"]; l++) k += i[g[l]][_0x28d3("0x4f")] - 2 * h[_0x28d3("0xa1")];
        a["scale"](j, j);
        c /= j;
        d /= j;
        c -= k / 2;
        for (var l = 0; l < g[_0x28d3("0x7")]; l++) {
            var m = i[g[l]];
            a[_0x28d3("0xbb")](m[_0x28d3("0x67")], c, d - m[_0x28d3("0x50")] / 2);
            c += m[_0x28d3("0x4f")] - 2 * h[_0x28d3("0xa1")];
        }
    } else {
        var h = getNameCache(g, e);
        h[_0x28d3("0xd1")] = syncAppStamp;
        var n = h[_0x28d3("0x67")];
        var j = f / h["size"];
        a[_0x28d3("0x7b")](j, j);
        c /= j;
        d /= j;
        a[_0x28d3("0xbb")](n, c - n[_0x28d3("0x4f")] / 2, d - n[_0x28d3("0x50")] / 2);
    }
    a[_0x28d3("0xae")]();
}

function init() {
    mainCanvas = document[_0x28d3("0xd8")](_0x28d3("0x67"));
    mainCtx = mainCanvas[_0x28d3("0x7e")]("2d");
    chatBox = document[_0x28d3("0xd8")](_0x28d3("0xd9"));
    mainCanvas["focus"]();
    function a(a) {
        mouseZ *= Math[_0x28d3("0xbc")](.9, a[_0x28d3("0xda")] / -120 || a[_0x28d3("0xdb")] || 0);
        .2 > mouseZ && (mouseZ = .2);
        mouseZ > 4 / mouseZ && (mouseZ = 4 / mouseZ);
    }
    if (/firefox/i[_0x28d3("0x54")](navigator[_0x28d3("0xdc")])) document["addEventListener"](_0x28d3("0xdd"), a, ![]); else document[_0x28d3("0xde")][_0x28d3("0xdf")] = a;
    wHandle[_0x28d3("0xe0")] = function(a) {
        switch (a["keyCode"]) {
          case 13:
            if (escOverlayShown) break;
            if (!settings["showChat"]) break;
            if (isTyping) {
                chatBox[_0x28d3("0xe1")]();
                var b = chatBox["value"];
                if (b["length"] > 0) sendChat(b);
                chatBox[_0x28d3("0xe2")] = "";
            } else chatBox[_0x28d3("0xe3")]();
            break;

          case 32:
            if (isTyping || escOverlayShown || pressed[_0x28d3("0xe4")]) break;
            wsSend(UINT8_CACHE[17]);
            pressed[_0x28d3("0xe4")] = !![];
            break;

          case 87:
            if (isTyping || escOverlayShown) break;
            wsSend(UINT8_CACHE[21]);
            pressed["w"] = !![];
            break;

          case 81:
            if (isTyping || escOverlayShown || pressed["q"]) break;
            wsSend(UINT8_CACHE[18]);
            pressed["q"] = !![];
            break;

          case 69:
            if (isTyping || escOverlayShown || pressed["e"]) break;
            wsSend(UINT8_CACHE[22]);
            pressed["e"] = !![];
            break;

          case 82:
            if (isTyping || escOverlayShown || pressed["r"]) break;
            wsSend(UINT8_CACHE[23]);
            pressed["r"] = !![];
            break;

          case 84:
            if (isTyping || escOverlayShown || pressed["t"]) break;
            wsSend(UINT8_CACHE[24]);
            pressed["t"] = !![];
            break;

          case 80:
            if (isTyping || escOverlayShown || pressed["p"]) break;
            wsSend(UINT8_CACHE[25]);
            pressed["p"] = !![];
            break;

          case 27:
            if (pressed["esc"]) break;
            pressed[_0x28d3("0xe5")] = !![];
            if (escOverlayShown) hideESCOverlay(); else showESCOverlay();
        }
    };
    wHandle[_0x28d3("0xe6")] = function(a) {
        switch (a[_0x28d3("0xe7")]) {
          case 32:
            pressed["space"] = ![];
            break;

          case 87:
            pressed["w"] = ![];
            break;

          case 81:
            if (pressed["q"]) wsSend(UINT8_CACHE[19]);
            pressed["q"] = ![];
            break;

          case 69:
            pressed["e"] = ![];
            break;

          case 82:
            pressed["r"] = ![];
            break;

          case 84:
            pressed["t"] = ![];
            break;

          case 80:
            pressed["p"] = ![];
            break;

          case 27:
            pressed["esc"] = ![];
        }
    };
    chatBox[_0x28d3("0xe8")] = function() {
        isTyping = ![];
        drawChat();
    };
    chatBox["onfocus"] = function() {
        isTyping = !![];
        drawChat();
    };
    mainCanvas[_0x28d3("0xe9")] = function(a) {
        mouseX = a[_0x28d3("0xea")];
        mouseY = a[_0x28d3("0xeb")];
    };
    setInterval(function() {
        sendMouseMove((mouseX - mainCanvas[_0x28d3("0x4f")] / 2) / cameraZ + cameraX, (mouseY - mainCanvas[_0x28d3("0x50")] / 2) / cameraZ + cameraY);
    }, 40);
    wHandle["onresize"] = function() {
        var a = mainCanvas[_0x28d3("0x4f")] = wHandle["innerWidth"], b = mainCanvas[_0x28d3("0x50")] = wHandle["innerHeight"];
        viewMult = Math[_0x28d3("0xec")](Math[_0x28d3("0x90")](b / 1080, a / 1920));
    };
    wHandle[_0x28d3("0xed")]();
    var b = document["getElementById"]("mobileStuff");
    var c = document[_0x28d3("0xd8")]("touchpad");
    var d = document[_0x28d3("0xd8")](_0x28d3("0xee"));
    var e = .2;
    var f = ![];
    wHandle[_0x28d3("0xef")]("touchstart", function(a) {
        if (!f) {
            f = !![];
            b[_0x28d3("0xf0")][_0x28d3("0xf1")] = "block";
        }
        if (a[_0x28d3("0xf2")]["id"] == _0x28d3("0xf3")) wsSend(UINT8_CACHE[17]); else if (a["target"]["id"] == _0x28d3("0xf4")) wsSend(UINT8_CACHE[21]); else g(a);
        d[_0x28d3("0xf0")][_0x28d3("0xf1")] = _0x28d3("0xf5");
    });
    var g;
    wHandle[_0x28d3("0xef")](_0x28d3("0xf6"), g = function(a) {
        var b = a["touches"][0];
        var c = innerWidth * e;
        var f = innerHeight * e;
        if (b[_0x28d3("0xf7")] < c && b[_0x28d3("0xf8")] > innerHeight - f) {
            mouseX = innerWidth / 2 + (b[_0x28d3("0xf7")] - c / 2) * innerWidth / c;
            mouseY = innerHeight / 2 + (b[_0x28d3("0xf8")] - (innerHeight - f / 2)) * innerHeight / f;
        } else {
            mouseX = b[_0x28d3("0xf7")];
            mouseY = b[_0x28d3("0xf8")];
        }
        var g = .02 * innerWidth;
        d[_0x28d3("0xf0")][_0x28d3("0x4a")] = mouseX - g + "px";
        d[_0x28d3("0xf0")]["top"] = mouseY - g + "px";
    });
    wHandle[_0x28d3("0xef")](_0x28d3("0xf9"), function(a) {
        if (0 === a[_0x28d3("0xfa")][_0x28d3("0x7")]) d["style"]["display"] = _0x28d3("0xfb");
    });
    log[_0x28d3("0x21")](_0x28d3("0xfc") + (Date[_0x28d3("0x3")]() - LOAD_START) + "ms");
    gameReset();
    showESCOverlay();
    if (settings[_0x28d3("0xfd")] && wHandle[_0x28d3("0x24")][_0x28d3("0xfe")]) {
        var h = /ip=([\w\W]+):([0-9]+)/["exec"](wHandle[_0x28d3("0x24")][_0x28d3("0xfe")]["slice"](1));
        if (h) wsInit(h[1] + ":" + h[2]);
    }
    window[_0x28d3("0xff")](drawGame);
}

wHandle[_0x28d3("0x100")] = function(a) {
    if (wsUrl === a) return;
    wsInit(a);
    wsUrl = a;
};

wHandle[_0x28d3("0x101")] = function(a) {
    settings["darkTheme"] = a;
    drawStats();
};

wHandle["setShowMass"] = function(a) {
    settings[_0x28d3("0xcf")] = a;
};

wHandle[_0x28d3("0x102")] = function(a) {
    settings["showSkins"] = a;
};

wHandle["setColors"] = function(a) {
    settings[_0x28d3("0xca")] = !a;
};

wHandle[_0x28d3("0x103")] = function(a) {
    settings[_0x28d3("0xd0")] = a;
};

wHandle[_0x28d3("0x104")] = function(a) {
    settings[_0x28d3("0xb2")] = a;
};

wHandle[_0x28d3("0x105")] = function(a) {
    settings["showChat"] = !a;
    drawChat();
    a ? $(_0x28d3("0x106"))[_0x28d3("0x107")]("slow") : $(_0x28d3("0x106"))[_0x28d3("0x79")](_0x28d3("0x108"));
};

wHandle[_0x28d3("0x109")] = function(a) {
    settings["showMinimap"] = !a;
};

wHandle[_0x28d3("0x10a")] = function(a) {
    wsSend(UINT8_CACHE[1]);
    stats[_0x28d3("0xb8")] = 0;
    hideESCOverlay();
};

wHandle[_0x28d3("0x10b")] = function(a, b) {
    if (b) a = "{" + b + "}" + a;
    sendPlay(a);
    hideESCOverlay();
};

wHandle[_0x28d3("0x10c")] = function() {
    if (wjQuery(_0x28d3("0x10d"))["text"]() === _0x28d3("0x10e")) return;
    wjQuery[_0x28d3("0x10f")](_0x28d3("0x110"))[_0x28d3("0x111")](function(a) {
        wjQuery(_0x28d3("0x10d"))[_0x28d3("0x112")]("Skins");
        wjQuery(_0x28d3("0x113"))[_0x28d3("0x114")](a);
    });
};

wHandle[_0x28d3("0x115")] = init;

window[_0x28d3("0xef")]("keydown", keydown);

window["addEventListener"](_0x28d3("0x116"), keyup);

var EjectDown = ![];

var speed = 25;

function keydown(a) {
    if (69 == a[_0x28d3("0xe7")]) {
        EjectDown = !![];
        setTimeout(eject, speed);
    }
    if (70 == a[_0x28d3("0xe7")]) for (var b = 0; b < 4; b++) setTimeout(function() {
        split();
        $(_0x28d3("0xde"))[_0x28d3("0x117")]($[_0x28d3("0x118")](_0x28d3("0x119"), {
            keyCode: 87
        }));
        $(_0x28d3("0xde"))[_0x28d3("0x117")]($[_0x28d3("0x118")](_0x28d3("0x116"), {
            keyCode: 87
        }));
    }, 50 * b);
    if (67 == a[_0x28d3("0xe7")]) {
        split();
        setTimeout(split, Math[_0x28d3("0x11a")]() * (350 - 200) + 200);
    }
    if (49 == a[_0x28d3("0xe7")] || 83 == a[_0x28d3("0xe7")]) split();
    if (16 == a[_0x28d3("0xe7")] || 52 == a["keyCode"]) for (var c = 0; c < 4; c++) setTimeout(split, 50 * c);
    if (65 == a[_0x28d3("0xe7")] || 51 == a["keyCode"]) for (var d = 0; d < 3; d++) setTimeout(split, 50 * d);
    if (68 == a["keyCode"] || 50 == a[_0x28d3("0xe7")]) {
        split();
        setTimeout(split, 50);
    }
    if (72 == a["keyCode"]) {
        X = window["innerWidth"] / 2;
        Y = window[_0x28d3("0x11b")] / 2;
        $("canvas")[_0x28d3("0x117")]($[_0x28d3("0x118")](_0x28d3("0x11c"), {
            clientX: X,
            clientY: Y
        }));
    }
    if (86 == a[_0x28d3("0xe7")]) {
        X = window[_0x28d3("0x11d")] / 2;
        Y = window[_0x28d3("0x11b")] / 2.006;
        $(_0x28d3("0x67"))[_0x28d3("0x117")]($[_0x28d3("0x118")](_0x28d3("0x11c"), {
            clientX: X,
            clientY: Y
        }));
    }
}

function split() {
    $(_0x28d3("0xde"))[_0x28d3("0x117")]($["Event"]("keydown", {
        keyCode: 32
    }));
    $("body")[_0x28d3("0x117")]($["Event"](_0x28d3("0x116"), {
        keyCode: 32
    }));
}

function keyup(a) {
    if (69 == a[_0x28d3("0xe7")]) EjectDown = ![];
}

function eject() {
    if (EjectDown) {
        window[_0x28d3("0xe0")]({
            keyCode: 87
        });
        window[_0x28d3("0xe6")]({
            keyCode: 87
        });
        setTimeout(eject, speed);
    }
}

function setOptionText(a, b, c, d) {
    if (null != c) {
        var e = "?";
        if (c[_0x28d3("0x11e")] > 0) e = c["current_players"];
        document["getElementById"](a)["innerHTML"] = b + " [ " + e + _0x28d3("0x11f") + c[_0x28d3("0x120")] + " ]";
    }
}

function checkServers(a) {
    $[_0x28d3("0x121")]({
        url: _0x28d3("0x122") + Math["floor"](1e8 * Math[_0x28d3("0x11a")]() + 1),
        success: function(b) {
            setOptionText(_0x28d3("0x123"), _0x28d3("0x124"), b[_0x28d3("0x125")], a);
            setOptionText(_0x28d3("0x126"), _0x28d3("0x127"), b[_0x28d3("0x128")], a);
            setOptionText(_0x28d3("0x129"), _0x28d3("0x12a"), b[_0x28d3("0x12b")], a);
            setOptionText(_0x28d3("0x12c"), _0x28d3("0x12d"), b[_0x28d3("0x12e")], a);
            setOptionText("option_ffa5", _0x28d3("0x12f"), b[_0x28d3("0x130")], a);
            setOptionText(_0x28d3("0x131"), _0x28d3("0x132"), b[_0x28d3("0x133")], a);
            setOptionText("option_ffaplus7", _0x28d3("0x134"), b["FFA 7"], a);
            setOptionText(_0x28d3("0x135"), "FFA (8)", b[_0x28d3("0x136")], a);
            setOptionText(_0x28d3("0x137"), _0x28d3("0x138"), b[_0x28d3("0x139")], a);
            setOptionText(_0x28d3("0x13a"), _0x28d3("0x13b"), b[_0x28d3("0x13c")], a);
            setOptionText(_0x28d3("0x13d"), _0x28d3("0x13e"), b[_0x28d3("0x13f")], a);
            setOptionText(_0x28d3("0x140"), _0x28d3("0x141"), b[_0x28d3("0x142")], a);
            setOptionText("option_ffaplus13", _0x28d3("0x143"), b[_0x28d3("0x144")], a);
            setOptionText(_0x28d3("0x145"), "FFA (14)", b[_0x28d3("0x146")], a);
            setOptionText(_0x28d3("0x147"), _0x28d3("0x148"), b[_0x28d3("0x149")], a);
        },
        error: function() {
            setTimeout(function() {
                checkServers(0);
            }, 45e3);
        }
    });
}