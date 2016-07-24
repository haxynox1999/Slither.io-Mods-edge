if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
// @name         Slither.io Donuts
// @namespace    https://goo.gl/7XnfAz
// @author       Donut (subscribe on YouTube: https://goo.gl/7XnfAz)
// This Source Code Form is subject to the terms of the Mozilla Public License, v.2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

window.ownskins = {};
setInterval(function() {
    if (Object.keys(window.ownskins).length > 0) {
        for (var key in window.ownskins) {
            eval("snake." + key + " = " + eval("window.ownskins." + key));
        }
    }
}, 100);
(function() {
    slitherioenabled = true;
    if (!+localStorage.getItem('edttsg')) {
        localStorage.setItem('edttsg', 1);
        cskh.style.display = "inline";
        cstx.style.display = "none";
    }
    if (isNaN(+localStorage['snakercv'])) localStorage.setItem('snakercv', 0);
    if (!localStorage.getItem('slitherioskin-skins')) localStorage.setItem('slitherioskin-skins', '[]');
    var body = document.body,
        switches = {};

    function createWindow() {
        var blackout = document.createElement('div');
        blackout.className = 'slitherioskin-blackout';
        body.appendChild(blackout);
        var wind = document.createElement('div');
        wind.className = 'slitherioskin-window';
        wind.onmousedown = function(e) {
            e.stopPropagation();
        };
        blackout.appendChild(wind);
        return blackout;
    }

    function createSwitch(parent, opt, text, func, initial = false) {
        var id = 'slitherioskin-' + opt;
        if (!localStorage.getItem(id)) localStorage.setItem(id, initial);
        switches[opt] = localStorage.getItem(id) == 'true';
        var div = document.createElement('div');
        div.className = 'slitherioskin-checkbox-div';
        parent.appendChild(div);
        var checkbox = document.createElement('div');
        checkbox.className = 'slitherioskin-checkbox';
        div.appendChild(checkbox);
        var input = document.createElement('input'),
            o = {
                div: div,
                input: input
            };
        input.type = 'checkbox';
        input.id = id;
        if (switches[opt]) input.checked = true, func && func(o);
        input.onchange = function() {
            switches[opt] = this.checked;
            localStorage.setItem(id, switches[opt]);
            func && func(o);
        };
        checkbox.appendChild(input);
        var label = document.createElement('label');
        label.htmlFor = id;
        checkbox.appendChild(label);
        var textLabel = document.createElement('label');
        textLabel.htmlFor = id;
        textLabel.textContent = text;
        div.appendChild(textLabel);
        return input;
    }
    var styles = {
        '.slitherioskin-checkbox': {
            display: 'inline-block',
            width: '22px',
            height: '22px',
            position: 'relative',
            'margin-right': '8px',
            'background-color': '#fcfff4',
            background: 'linear-gradient(to bottom, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%)',
            'border-radius': '50px',
            'box-shadow': 'inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5)'
        },
        '.slitherioskin-checkbox>input': {
            visibility: 'hidden'
        },
        '.slitherioskin-checkbox>label': {
            width: '14px',
            height: '14px',
            position: 'absolute',
            top: '4px',
            left: '4px',
            cursor: 'pointer',
            background: 'linear-gradient(to bottom, #222222 0%, #45484d 100%)',
            'border-radius': '50px',
            'box-shadow': 'inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px white'
        },
        '.slitherioskin-checkbox>label::after': {
            content: '""',
            width: '8px',
            height: '5px',
            position: 'absolute',
            top: '2px',
            left: '2px',
            border: '2px solid #fcfff4',
            'border-top': 'none',
            'border-right': 'none',
            background: 'transparent',
            opacity: 0,
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        },
        '.slitherioskin-checkbox-div:hover>.slitherioskin-checkbox>label::after': {
            opacity: 0.3
        },
        '.slitherioskin-checkbox>input:checked + label::after': {
            opacity: '1 !important'
        },
        '#slitcheck': {
            transition: '1s'
        },
        '#slitcheck>div': {
            display: 'inline-block',
            margin: '0 15px'
        },
        '.slitherioskin-link': {
            color: 'white',
            cursor: 'pointer'
        },
        '.slitherioskin-link:hover': {
            'text-shadow': '1px 1px 4px rgba(0,0,0,1)'
        },
        '.slitherioskin-blue': {
            color: '#3366FF',
            'text-decoration': 'none',
            cursor: 'pointer'
        },
        '.slitherioskin-red': {
            color: '#ff0000',
            'text-decoration': 'none',
            cursor: 'pointer'
        },
        '.slitherioskin-blackout': {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            visibility: 'hidden',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'rgba(0,0,0,.5)',
            opacity: 0,
            'z-index': 100000002,
            transition: 'opacity 0.5s'
        },
        '.slitherioskin-window>h2': {
            margin: 0,
            'text-align': 'center'
        }
    };
    var style = document.createElement('style');
    document.head.appendChild(style);
    stylesheet = style.sheet;
    for (var selector in styles)
        for (var property in styles[selector])
            stylesheet.insertRule(selector + '{' + property + ':' + styles[selector][property] + ';' + '}', stylesheet.cssRules.length);
    var div = document.createElement('div');
    div.id = 'slitcheck';
    div.className = 'nsi';
    div.style.display = 'none';
    div.style.opacity = 0;
    div.style.position = 'fixed';
    div.style.bottom = '35px';
    div.style.left = '20%';
    div.style.right = '20%';
    div.style.color = 'white';
    div.style.fontFamily = 'Arial, sans-serif';
    div.style.textAlign = 'center';
    div.style.zIndex = 100000000;
    body.appendChild(div);
    if (!localStorage.getItem('slitherioskin-cstime')) localStorage.setItem('slitherioskin-cstime', 1000);
    var nextSkin = +localStorage.getItem('snakercv'),
        cstime = +localStorage.getItem('slitherioskin-cstime');

    function changeSkins() {
        if (switches.changeskins && snake && !sc) {
            nextSkin++;
            var Skins = skins,
                maxSkin = max_skin_cv;
            if (switches.csd) Skins = [];
            if (nextSkin > maxSkin + Skins.length) nextSkin = 0;
            if (switches.csc && Skins.length && nextSkin <= maxSkin) nextSkin = maxSkin + 1;
            setSkin(snake, nextSkin);
            localStorage.setItem('snakercv', nextSkin);
        }
        if (switches.changeskins) setTimeout(changeSkins, cstime);
    }
    var setblackout = createWindow();
    var setdiv = setblackout.firstChild;
    var setcs1 = document.createElement('div'),
        setcs2 = document.createElement('div');;
    setcs1.style.display = setcs2.style.display = 'inline-block';
    setcs1.style.width = setcs2.style.width = '50%';
    setdiv.appendChild(setcs1);
    setdiv.appendChild(setcs2);
    var setcstime = document.createElement('label');
    setcstime.innerHTML = '<span title="' + "Excellent for Slither.io YouTubers.\nIncrease the value so that skins don't cnage too fast in your video.\nThe unit is milliseconds." + '" style="cursor:help;">Interval:</span>&nbsp;<input type="number" value="' + cstime + '" style="width:60px;">';
    setcstime.lastChild.onchange = function() {
        cstime = +this.value;
        localStorage.setItem('slitherioskin-cstime', cstime);
    };
    setcs1.appendChild(setcstime);

    function csonly(o) {
        if (o.input.checked) {
            var sib = o.div.previousSibling || o.div.nextSibling;
            if (sib) {
                var input = sib.firstChild.firstChild;
                if (input && input.checked) input.checked = false, input.onchange();
            }
        }
    }
    var setcsd = createSwitch(setcs2, 'csd', 'Only default', csonly);
    var setcsc = createSwitch(setcs2, 'csc', 'Only custom', csonly);
    setcsc.parentNode.parentNode.style.marginTop = '2px';
    var setok = makeTextBtn('OK', 36, 16, 18, 1).elem;
    setok.style.position = 'relative';
    setok.style.margin = '10px auto 0px auto';
    setok.style.removeProperty('box-shadow');
    setok.onclick = function() {
        setblackout.style.opacity = 0;
        setTimeout(function() {
            setblackout.style.visibility = 'hidden';
        }, 500);
    };
    setdiv.appendChild(setok);

    function applyColor(i) {
        o = {
            imgs: [],
            fws: [],
            fhs: [],
            fw2s: [],
            fh2s: [],
            gimgs: [],
            gfws: [],
            gfhs: [],
            gfw2s: [],
            gfh2s: [],
            oimgs: [],
            ofws: [],
            ofhs: [],
            ofw2s: [],
            ofh2s: []
        };
        var rs = "00" + rrs[i].toString(16),
            gs = "00" + ggs[i].toString(16),
            bs = "00" + bbs[i].toString(16),
            rs = rs.substr(rs.length - 2),
            gs = gs.substr(gs.length - 2),
            bs = bs.substr(bs.length - 2);
        o.cs = "#" + rs + gs + bs;
        var sz = 62,
            kfmc = document.createElement("canvas");
        kfmc.width = kfmc.height = sz;
        ctx = kfmc.getContext("2d");
        map = ctx.getImageData(0, 0, sz, sz);
        imgd = map.data;
        l = imgd.length;
        for (p = yy = xx = 0; p < l; p += 4) v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16), v = 15 >= v ? 1 - v / 15 : 0, imgd[p] = rrs[i], imgd[p + 1] = ggs[i], imgd[p + 2] = bbs[i], imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
        ctx.putImageData(map, 0, 0);
        o.kfmc = kfmc;
        var ksz = 48,
            ksz2 = ksz / 2,
            kmc = document.createElement("canvas");
        kmc.width = kmc.height = ksz;
        ctx = kmc.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
        ctx.fill();
        map = ctx.getImageData(0, 0, ksz, ksz);
        imgd = map.data;
        l = imgd.length;
        yy = xx = 0;
        var kmcs = [];
        for (j = 0; 7 > j; j++) {
            for (p = xx = yy = 0; p < l; p += 4) {
                var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                    v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
                    v = v + .375 * (v2 - v),
                    v = v * (1.22 - .44 * j / 6);
                rr = rrs[i];
                gg = ggs[i];
                bb = bbs[i];
                imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
                imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
                imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
                xx++;
                xx >= ksz && (xx = 0, yy++)
            }
            ctx.putImageData(map, 0, 0);
            var kmc2 = document.createElement("canvas");
            kmc2.width = kmc2.height = ksz;
            var ctx2 = kmc2.getContext("2d");
            ctx2.drawImage(kmc, 0, 0);
            kmcs.push(kmc2)
        }
        o.kmcs = kmcs;
        per_color_imgs.push(o);
        for (j = 2.8; 18.8 >= j; j += 1) {
            var cc = document.createElement("canvas"),
                sz = Math.ceil(2.5 * j + 28);
            cc.width = cc.height = sz;
            ctx = cc.getContext("2d");
            ctx.fillStyle = o.cs;
            ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
            ctx.shadowBlur = 12;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor = "#" + rs + gs + bs;
            ctx.globalAlpha = .8;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.fill();
            o.imgs.push(cc);
            o.fws.push(sz);
            o.fhs.push(sz);
            o.fw2s.push(sz / 2);
            o.fh2s.push(sz / 2);
            sz = Math.ceil(8 * j + 6);
            cc = document.createElement("canvas");
            cc.width = cc.height = sz;
            ctx = cc.getContext("2d");
            g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
            g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
            g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            o.gimgs.push(cc);
            o.gfws.push(sz);
            o.gfhs.push(sz);
            o.gfw2s.push(sz / 2);
            o.gfh2s.push(sz / 2);
            cc = document.createElement("canvas");
            sz = Math.ceil(1.3 * j + 6);
            cc.width = cc.height = sz;
            ctx = cc.getContext("2d");
            var eam = .2,
                g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
            g.addColorStop(0, "rgba(" +
                rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
            g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
            g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, sz, sz);
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2;
            ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
            ctx.globalAlpha = 1;
            ctx.stroke();
            o.oimgs.push(cc);
            o.ofws.push(sz);
            o.ofhs.push(sz);
            o.ofw2s.push(sz / 2);
            o.ofh2s.push(sz / 2)
        }
        o.ic = o.imgs.length;
        o.pr_imgs = [];
        o.pr_fws = [];
        o.pr_fhs = [];
        o.pr_fw2s = [];
        o.pr_fh2s = [];
        for (j = 3; 24 >= j; j += 1) cc = document.createElement("canvas"), sz = Math.ceil(2 * j + 38), cc.width = cc.height = sz, ctx = cc.getContext("2d"), ctx.fillStyle = o.cs, ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2), ctx.shadowBlur = 22, ctx.shadowOffsetY = 0, ctx.shadowColor = "#" + rs + gs + bs, ctx.fill(), ctx.fill(), o.pr_imgs.push(cc), o.pr_fws.push(sz), o.pr_fhs.push(sz), o.pr_fw2s.push(sz / 2), o.pr_fh2s.push(sz / 2)
    };

    function applyColors(update = true) {
        per_color_imgs.splice(ncolors, ccolors.length);
        ccolors = [];
        if (update) {
            for (var i = cccs.childNodes.length - 1; i >= 0; i--) {
                if (cccs.childNodes[i].childNodes.length == 5) {
                    rrs.splice(ncolors + i, 1);
                    ggs.splice(ncolors + i, 1);
                    bbs.splice(ncolors + i, 1);
                    cccs.removeChild(cccs.childNodes[i]);
                    for (var j = i + 1; j < cccs.childNodes.length; j++)
                        cccs.childNodes[j].dataset.n = cccs.childNodes[j].dataset.n - 1;
                    for (var j = 0; j < skins.length; j++)
                        for (var k = 0; k < skins[j].skin.rbcs.length; k++)
                            if (skins[j].skin.rbcs[k] >= ncolors + i) skins[j].skin.rbcs[k] --;
                }
            }
            saveSkins();
            colorMenu();
            workspace();
        }
        for (var i = ncolors; i < rrs.length; i++) {
            ccolors.push([rrs[i], ggs[i], bbs[i]]);
            applyColor(i);
        }
        localStorage.setItem('slitherioskin-colors', JSON.stringify(ccolors));
    }
    var currentColor = null,
        ccrestore = document.createElement('div');
    ccrestore.innerHTML = 'You just deleted this color. <span class="slitherioskin-blue">Restore</span>';
    ccrestore.style.position = 'absolute';
    ccrestore.style.top = ccrestore.style.left = 0;
    ccrestore.style.width = '100%';
    ccrestore.style.height = '46px';
    ccrestore.style.background = 'rgba(255,255,255,0.95)';
    ccrestore.style.lineHeight = '46px';
    ccrestore.style.textAlign = 'center';

    function newColor(rgb) {
        var ccc = document.createElement('div');
        ccc.dataset.n = rrs.length;
        ccc.style.position = 'relative';
        ccc.style.margin = '8px';
        cccs.appendChild(ccc);
        var ccself = document.createElement('div');
        ccself.style.display = 'inline-block';
        ccself.style.boxSizing = 'content-box';
        ccself.style.width = '40px';
        ccself.style.height = '40px';
        ccself.style.border = '3px solid rgba(0,0,0,0.5)';
        ccc.appendChild(ccself);
        var ccnames = document.createElement('div'),
            ccr = document.createElement('div'),
            ccg = document.createElement('div'),
            ccb = document.createElement('div');
        ccnames.style.display = 'inline-block';
        ccnames.style.boxSizing = 'content-box';
        ccnames.style.margin = '0 8px';
        ccnames.style.width = '45px';
        ccr.textContent = 'Red: ';
        ccg.textContent = 'Green: ';
        ccb.textContent = 'Blue: ';
        ccr.style.lineHeight = ccg.style.lineHeight = ccb.style.lineHeight = '10px';
        ccg.style.margin = '8px 0';
        ccc.appendChild(ccnames);
        ccnames.appendChild(ccr);
        ccnames.appendChild(ccg);
        ccnames.appendChild(ccb);
        var ccgrads = document.createElement('div');
        ccgrads.style.display = 'inline-block';
        ccgrads.style.width = '256px';
        ccc.appendChild(ccgrads);
        var ccred = document.createElement('canvas');
        var ccgreen = document.createElement('canvas');
        var ccblue = document.createElement('canvas');
        ccred.style.cursor = ccgreen.style.cursor = ccblue.style.cursor = 'pointer';
        ccgreen.style.margin = '8px 0';
        var ccrgb = [ccred, ccgreen, ccblue];
        ccred.onmousedown = ccgreen.onmousedown = ccblue.onmousedown = function(e) {
            currentColor = this;
            body.onmousemove(e);
        };
        ccred.width = ccgreen.width = ccblue.width = 256;
        ccred.height = ccgreen.height = ccblue.height = 10;
        ccgrads.appendChild(ccred);
        ccgrads.appendChild(ccgreen);
        ccgrads.appendChild(ccblue);
        var ccdelete = document.createElement('div');
        ccdelete.innerHTML = '<span class="slitherioskin-blue">Delete</span>';
        ccdelete.style.display = 'inline-block';
        ccdelete.style.boxSizing = 'content-box';
        ccdelete.style.marginLeft = '8px';
        ccdelete.style.width = '50px';
        ccdelete.style.height = '46px';
        ccdelete.style.lineHeight = '46px';
        ccdelete.style.verticalAlign = 'top';
        ccdelete.firstChild.onclick = function() {
            var ccback = ccrestore.cloneNode(true);
            ccback.onclick = function() {
                this.parentNode.removeChild(this);
            };
            this.parentNode.parentNode.appendChild(ccback);
        };
        ccc.appendChild(ccdelete);
        setColor(rgb, ccc);
    }

    function parseColor(input) {
        var m = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (m) {
            return [+m[1], +m[2], +m[3]];
        }
    }

    function setColor(rgb, el) {
        var n = el.dataset.n;
        rrs[n] = rgb[0];
        ggs[n] = rgb[1];
        bbs[n] = rgb[2];
        for (var i = 0; i < 3; i++) {
            el.firstChild.style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
            var rgb0 = rgb.slice(),
                rgb1 = rgb.slice();
            rgb0[i] = 0, rgb1[i] = 255;
            var ctx = el.childNodes[2].children[i].getContext('2d');
            var grad = ctx.createLinearGradient(0, 0, 256, 0);
            grad.addColorStop(0, 'rgb(' + rgb0[0] + ',' + rgb0[1] + ',' + rgb0[2] + ')');
            grad.addColorStop(1, 'rgb(' + rgb1[0] + ',' + rgb1[1] + ',' + rgb1[2] + ')');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 256, 10);
            ctx.beginPath();
            ctx.arc(rgb[i], 5, 3, 0, 2 * Math.PI);
            ctx.strokeStyle = (rgb[0] + rgb[1] + rgb[2] < 350) ? '#fff' : '#000';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    function setColors() {
        for (var i = 0; i < ccolors.length; i++)
            newColor([ccolors[i][0], ccolors[i][1], ccolors[i][2]]);
        applyColors(false);
    }
    var ccolors = JSON.parse(localStorage.getItem('slitherioskin-colors')) || [],
        ncolors = rrs.length,
        ccblackout = createWindow(),
        ccdiv = ccblackout.firstChild;
    var ccheader = document.createElement('h2');
    ccheader.textContent = 'Custom colors';
    ccdiv.appendChild(ccheader);
    var cccs = document.createElement('div');
    ccdiv.appendChild(cccs);
    var ccnew = document.createElement('div');
    ccnew.innerHTML = '<span class="slitherioskin-blue">New color</span>';
    ccnew.style.textAlign = 'center';
    ccnew.style.fontSize = '20px';
    ccnew.firstChild.onclick = function() {
        newColor([255, 255, 255]);
    };
    ccdiv.appendChild(ccnew);
    var ccbtns = document.createElement('div');
    ccbtns.style.margin = '10px 0 6px 0';
    ccbtns.style.textAlign = 'center';
    ccdiv.appendChild(ccbtns);
    var ccsave = makeTextBtn('Save', 36, 16, 18, 1).elem;
    ccsave.style.position = 'relative';
    ccsave.style.display = 'inline-block';
    ccsave.style.removeProperty('box-shadow');
    ccsave.onclick = function() {
        ccblackout.style.opacity = 0;
        setTimeout(function() {
            ccblackout.style.visibility = 'hidden';
        }, 500);
        applyColors();
    };
    ccbtns.appendChild(ccsave);
    var cccancel = makeTextBtn('Cancel', 36, 16, 18, 2).elem;
    cccancel.style.position = 'relative';
    cccancel.style.display = 'inline-block';
    cccancel.style.marginLeft = '6px';
    cccancel.style.removeProperty('box-shadow');
    cccancel.onclick = function() {
        ccblackout.style.opacity = 0;
        setTimeout(function() {
            ccblackout.style.visibility = 'hidden';
        }, 500);
        rrs.splice(ncolors, rrs.length - ncolors);
        ggs.splice(ncolors, ggs.length - ncolors);
        bbs.splice(ncolors, bbs.length - ncolors);
        while (cccs.firstChild)
            cccs.removeChild(cccs.firstChild);
        setColors();
    };
    ccbtns.appendChild(cccancel);
    var pixel = document.createElement('canvas');
    pixel.width = pixel.height = 1;
    var xvarmi = false,
        yvarmi = false,
        hvarmi = false,
        wvarmi = false,
        avarmi = false,
        svarmi = false,
        dvarmi = false,
        r1varmi = false,
        r2varmi = false,
        r3varmi = false,
        r4varmi = false;
    var ss = setSkin;
    setSkin = function(b, h) {
        if (!snake) h = localStorage.getItem('snakercv');
        ss(b, h);
        if (h > max_skin_cv) {
            setTimeout(function() {
                var s = skins[h - max_skin_cv - 1],
                    skin = s.skin;
                snake.antenna = window.ownskins["antenna"];
                snake.eca = 1;
                var c = window.ownskins["valuem"];
                snake.atx = new Float32Array(c);
                snake.aty = new Float32Array(c);
                snake.atvx = new Float32Array(c);
                snake.atvy = new Float32Array(c);
                snake.atax = new Float32Array(c);
                snake.atay = new Float32Array(c);
                for (--c; 0 <= c; c--) snake.atx[c] = snake.xx, snake.aty[c] = snake.yy;
                snake.bulb = window.anten_canvas;
                if (xvarmi == false) {
                    snake.blbx = 0;
                } else {
                    snake.blbx = window.ownskins["blbx"];
                }
                if (yvarmi == false) {
                    snake.blby = -25;
                } else {
                    snake.blby = window.ownskins["blby"];
                }
                if (hvarmi == false) {
                    snake.blbh = 50;
                } else {
                    snake.blbh = window.ownskins["blbh"];
                }
                if (wvarmi == false) {
                    snake.blbw = 50;
                } else {
                    snake.blbw = window.ownskins["blbw"];
                }
                if (avarmi == false && !snake.slg) {
                    snake.er = 6;
                } else {
                    snake.er = window.ownskins["er"];
                }
                if (svarmi == false && !snake.slg) {
                    snake.pr = 3;
                } else {
                    snake.pr = window.ownskins["pr"];
                }
                if (dvarmi == false) {
                    snake.swell = 0;
                } else {
                    snake.swell = window.ownskins["swell"];
                }
                if (r1varmi == false) {
                    snake.ppc = '#000';
                } else {
                    snake.ppc = window.ownskins["ppc"];
                }
                if (r2varmi == false) {
                    snake.ec = '#fff';
                } else {
                    snake.ec = window.ownskins["ec"];
                }
                if (r3varmi == false) {
                    snake.atc1 = '#000';
                } else {
                    snake.atc1 = window.ownskins["atc1"];
                }
                if (r4varmi == false) {
                    snake.atc2 = '#fff';
                } else {
                    snake.atc2 = window.ownskins["atc2"];
                }
                snake.bsc = 1;
                snake.blba = 1;
                snake.atba = 0;
                snake.atwg = !0;
                snake.atia = .5;
                snake.abrot = !0;
                if (skin.one_eye) b.ebi = jsebi, b.ebiw = 64, b.ebih = 64, b.ebisz = 29, b.epi = jsepi, b.epiw = 48, b.epih = 48, b.episz = 14, b.pma = 4, b.swell = .06;
                else if (skin.slg) b.ed = 34, b.esp = 14, b.eca = 1, b.eo = 3, b.er = 8, b.easp = .038, b.pr = 4.5, b.pma = 3;
                else if (skin.jyt) b.eac = true;
                for (prop in skin) b[prop] = skin[prop];
                if (skin.one_eye) b.slg = false, b.jyt = false;
            }, 0);
        }
        if (sc) setTimeout(workspace, 0);
    };

    function newSkin() {
        skins.push({
            skin: {
                rbcs: [9]
            }
        });
        var storageSkins = JSON.parse(localStorage.getItem('slitherioskin-skins'));
        storageSkins.push({
            skin: {
                rbcs: [9]
            }
        });
        localStorage.setItem('slitherioskin-skins', JSON.stringify(storageSkins));
        setSkin(snake, max_skin_cv + skins.length);
    }

    function updateSkin() {
        var toSave = JSON.parse(localStorage.getItem('slitherioskin-skins')),
            singleColor = true;
        toSave[snake.rcv - max_skin_cv - 1].skin.rbcs = JSON.parse(JSON.stringify(snake.rbcs));
        for (var i = 0; i < snake.rbcs.length; i++) {
            if (snake.rbcs[i] >= ncolors) toSave[snake.rcv - max_skin_cv - 1].skin.rbcs[i] = ~snake.rbcs[i] + ncolors;
            if (singleColor && i > 0 && snake.rbcs[i] != snake.rbcs[i - 1]) singleColor = false;
        }
        if (singleColor) snake.rbcs = [snake.rbcs[0]], toSave[snake.rcv - max_skin_cv - 1].skin.rbcs = [toSave[snake.rcv - max_skin_cv - 1].skin.rbcs[0]];
        skins[snake.rcv - max_skin_cv - 1].skin.rbcs = snake.rbcs;
        localStorage.setItem('slitherioskin-skins', JSON.stringify(toSave));
    }

    function saveSkins() {
        var toSave = JSON.parse(JSON.stringify(skins));
        for (var i = 0; i < toSave.length; i++)
            for (var j = 0; j < toSave[i].length; j++)
                if (toSave[i].skin.rbcs[j] >= ncolors) toSave[i].skin.rbcs[j] = ~toSave[i].skin.rbcs[j] + ncolors;
        localStorage.setItem('slitherioskin-skins', JSON.stringify(toSave));
    }
    var sc = false;

    function sfc(el, bottom = false) {
        var prop = bottom ? 'bottom' : 'top';
        el.style.transition = '0.5s';
        el.style[prop] = parseInt(el.style[prop]) + (sc != bottom ? 270 : -270) + 'px';
        setTimeout(function() {
            el.style.removeProperty('transition');
        }, 500);
    }

    function Constructor(onlyReset = false) {
        if (!(onlyReset && !sc)) {
            sfc(mc);
            sfc(pskh);
            sfc(nskh);
            sfc(skodiv);
            sfc(div, true);
            sfc(scdiv, true);
            sc ? scdiv.style.removeProperty('box-shadow') : scdiv.style.boxShadow = '0px -3px 2px rgba(0,0,0,0.5)';
            sc = !sc;
        }
    }

    function workspace() {
        while (sccss.firstChild)
            sccss.removeChild(sccss.firstChild);
        if (snake.rcv > max_skin_cv && snake.rcv <= max_skin_cv + skins.length) {
            scdef.style.display = 'none';
            scadd.style.display = scskin.style.display = scprops.style.display = 'block';
            var colorStops = [0];
            for (var i = 1; i < snake.rbcs.length; i++) {
                if (snake.rbcs[i - 1] != snake.rbcs[i]) break;
                if (i == snake.rbcs.length - 1) snake.rbcs = [snake.rbcs[0]];
            }
            for (var i = 1; i < snake.rbcs.length; i++)
                if (snake.rbcs[i] != snake.rbcs[i - 1]) colorStops.push(i);
            for (var i = 0; i < colorStops.length; i++) {
                var sccs = document.createElement('div');
                sccs.dataset.position = colorStops[i];
                sccs.style.marginBottom = '1px';
                sccss.appendChild(sccs);
                var sccolor = document.createElement('div');
                sccolor.textContent = 'Color:';
                sccolor.style.position = 'relative';
                sccolor.style.display = 'inline-block';
                sccolor.style.width = '125px';
                sccs.appendChild(sccolor);
                var scc = colors[snake.rbcs[colorStops[i]]].cloneNode();
                scc.style.margin = '0 0 0 10px';
                scc.style.verticalAlign = 'middle';
                scc.onclick = function(e) {
                    e.stopPropagation();
                    var sccolor = this.parentNode;
                    sccm.parentNode == sccolor ? sccolor.removeChild(sccm) : sccolor.appendChild(sccm);
                };
                sccolor.appendChild(scc);
                var sccells = document.createElement('div');
                sccells.textContent = 'Cells number:';
                sccells.style.display = 'inline-block';
                sccells.style.marginRight = '13px';
                sccs.appendChild(sccells);
                var sccn = document.createElement('input');
                sccn.type = 'number';
                sccn.min = 1;
                sccn.value = (colorStops.length - 1 == i ? snake.rbcs.length : colorStops[i + 1]) - colorStops[i];
                if (colorStops.length == 1) sccn.disabled = true;
                sccn.style.marginLeft = '10px';
                sccn.style.width = '50px';
                sccn.style.height = '20px';
                sccn.style.border = '1px solid #A9A9A9';
                sccn.style.fontSize = '12px';
                sccn.style.verticalAlign = 'middle';
                sccn.onchange = function() {
                    var sccs = this.parentNode.parentNode,
                        prevValue = (sccs.nextSibling ? +sccs.nextSibling.dataset.position : snake.rbcs.length) - +sccs.dataset.position;
                    if (isNaN(parseInt(this.value))) {
                        this.value = prevValue;
                        return;
                    }
                    var args = [+sccs.dataset.position, 0];
                    if (this.value > prevValue)
                        for (var i = 0; i < this.value - prevValue; i++)
                            args.push(snake.rbcs[args[0]]);
                    else args[1] = prevValue - this.value;
                    Array.prototype.splice.apply(snake.rbcs, args);
                    updateSkin();
                    if (this.value == 0) workspace();
                    else
                        while (sccs = sccs.nextSibling)
                            sccs.dataset.position = +sccs.dataset.position + +this.value - prevValue;
                };
                sccells.appendChild(sccn);
                if (!sccn.disabled) {
                    var sccsd = document.createElement('div');
                    sccsd.textContent = 'Delete';
                    sccsd.className = 'donuts-blue';
                    sccsd.style.display = 'inline-block';
                    sccsd.style.fontSize = '14px';
                    sccsd.onclick = function() {
                        this.previousSibling.lastChild.value = 0;
                        this.previousSibling.lastChild.onchange();
                    };
                    sccs.appendChild(sccsd);
                    if (colorStops.length == 2) {
                        sccss.firstChild.appendChild(sccsd.cloneNode());
                    }
                }
            }
            for (var i = 0; i < scprops.childNodes.length; i++)
                scprops.childNodes[i].firstChild.checked = snake[scprops.childNodes[i].dataset.prop] || skins[snake.rcv - max_skin_cv - 1][scprops.childNodes[i].dataset.prop];
        } else {
            scdef.style.display = 'block';
            scadd.style.display = scskin.style.display = scprops.style.display = 'none';
        }
    };
    var sclink = document.createElement('div');
    sclink.className = 'btn btn-primary';
    sclink.style.marginTop = '5px';
    sclink.style.fontSize = '16px';
    sclink.innerHTML = 'Create Your Skin & More';
    sclink.onclick = function() {
        Constructor();
        if (sc) snake.rcv <= max_skin_cv ? skins.length ? setSkin(snake, max_skin_cv + 1) : newSkin() : workspace();
    };
    div.appendChild(sclink);
    var scdiv = document.createElement('div');
    scdiv.style.width = '100%';
    scdiv.style.height = '270px';
    scdiv.style.padding = '10px 0px 0px 15px';
    scdiv.style.boxSizing = 'border-box';
    scdiv.style.position = 'fixed';
    scdiv.style.bottom = '-270px';
    scdiv.style.left = 0;
    scdiv.style.background = 'white';
    scdiv.style.fontFamily = 'Calibri, Tahoma, Arial, sans-serif';
    scdiv.style.overflow = 'auto';
    scdiv.style.zIndex = 100000000;
    scdiv.style.transition = '0.5s';
    scdiv.onmousedown = function(e) {
        e.stopPropagation();
    };
    body.appendChild(scdiv);
    var schelp = document.createElement('div');
    schelp.style.display = 'inline-block';
    schelp.style.width = '30%';
    schelp.style.float = 'left';
    scdiv.appendChild(schelp);
    var scheader = document.createElement('h2');
    scheader.innerHTML = '<span style="color:black">Mods by:</span><br/><span style="color:black"><a href="http://www.slither-io.com" target="_blank">Slither-io.com</a></br><a href="http://slitheriogame.com" target="_blank">Slitheriogame.com</a></br><a href="http://slitherioplay.com" target="_blank">Slitherioplay.com</a></span>';
    scheader.style.margin = 0;
    schelp.appendChild(scheader);
    scp3 = document.createElement('h4');
    scp3.innerHTML = '<a href="https://chrome.google.com/webstore/detail/slitherio-mods-zoom-unloc/eogeabecipmckmihpmkgjbghbffcebcf/reviews" target="_blank"><font color="darkorange">Vote our Mods</font></a>';
    scp3.style.marginBottom = 0;
    schelp.appendChild(scp3);
    var scws = document.createElement('div');
    scws.style.display = 'inline-block';
    scws.style.width = '27%';
    scws.style.height = '100%';
    scws.style.position = 'relative';
    scws.style.float = 'left';
    scdiv.appendChild(scws);
    var _scws = document.createElement('div');
    _scws.style.display = 'inline-block';
    _scws.style.width = '43%';
    _scws.style.height = '100%';
    _scws.style.position = 'relative';
    _scws.style.float = 'left';
    scdiv.appendChild(_scws);
    var _sccss = document.createElement('div');
    _scws.appendChild(_sccss);
    var _sccs = document.createElement('div');
    _sccs.style.marginBottom = '1px';
    _sccss.appendChild(_sccs);
    var sclink = document.createElement('div');
    sclink.innerHTML = "<center><b style='color:#ff0000'>X</b></center>";
    sclink.style.width = '20px';
    sclink.style.height = '20px';
    sclink.style.border = '1px solid #ff0000';
    sclink.style.position = 'absolute';
    sclink.style.right = '5px';
    sclink.style.top = '0';
    sclink.style.cursor = 'pointer';
    sclink.onclick = function() {
        Constructor();
    };
    _sccs.appendChild(sclink);
    var _sccimage = document.createElement('div');
    _sccimage.innerHTML = '<span title="' + "You can only use 1 image for all created skins and if you refresh your browser image will go.\nBecause our mod get images from your computer and we can't controll your computer. Thanks for your understanding." + '" style="cursor:help;">Image <font color="red">(?)</font>:</span>';
    _sccimage.style.position = 'relative';
    _sccimage.style.display = 'inline-block';
    _sccs.appendChild(_sccimage);
    var _sccn = document.createElement('input');
    _sccn.type = 'file';
    _sccn.accept = '.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|images/*';
    _sccn.style.marginLeft = '10px';
    _sccn.style.height = '20px';
    _sccn.style.border = '1px solid #A9A9A9';
    _sccn.style.fontSize = '9px';
    _sccn.style.verticalAlign = 'middle';
    _sccn.style.display = 'inline-block';
    var angleInDegrees = 0;
    var anten_resim = document.createElement("img");
    window.anten_canvas = document.createElement("canvas");
    _sccn.onchange = function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                anten_resim.onload = function() {
                    var cw = anten_resim.width,
                        ch = anten_resim.height;
                    window.anten_canvas.setAttribute('width', cw);
                    window.anten_canvas.setAttribute('height', ch);
                    ctx = window.anten_canvas.getContext("2d");
                    ctx.rotate(0 * Math.PI / 180);
                    ctx.drawImage(anten_resim, 0, 0);
                    ctx.restore();
                    window.ownskins["bulb"] = window.anten_canvas;
                };
                anten_resim.src = e.target.result;
            };
            reader.readAsDataURL(this.files[0]);
            if (document.getElementById('mycheckbox').checked == false) {
                document.getElementById('mycheckbox').click();
            }
            if (document.getElementById('antennawidth').value == false) {
                document.getElementById('antennawidth').value = 15;
            }
            if (document.getElementById('imageheight').value == false) {
                document.getElementById('imageheight').value = 50;
            }
            if (document.getElementById('imagewidth').value == false) {
                document.getElementById('imagewidth').value = 50;
            }
            if (document.getElementById('xcoor').value == false) {
                document.getElementById('xcoor').value = 0;
            }
            if (document.getElementById('ycoor').value == false) {
                document.getElementById('ycoor').value = -25;
            }
        }
    };
    _sccimage.appendChild(_sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "When you select your image,\nYou can rotate with buttons." + '" style="cursor:help;">Rotate <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'button';
    sccn.value = "Right";
    sccn.min = 1;
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var rightBtnClick = function() {
        if (anten_resim.src) {
            angleInDegrees += 90;
            var cw = anten_resim.width,
                ch = anten_resim.height,
                cx = 0,
                cy = 0;
            degree = angleInDegrees;
            degree = parseInt(degree.toString().replace("-", ""));
            switch (degree) {
                case 90:
                    cw = anten_resim.height;
                    ch = anten_resim.width;
                    cy = anten_resim.height * (-1);
                    break;
                case 180:
                    cx = anten_resim.width * (-1);
                    cy = anten_resim.height * (-1);
                    break;
                case 270:
                    cw = anten_resim.height;
                    ch = anten_resim.width;
                    cx = anten_resim.width * (-1);
                    angleInDegrees = 0;
                    break;
            }
            window.anten_canvas.setAttribute('width', cw);
            window.anten_canvas.setAttribute('height', ch);
            ctx = window.anten_canvas.getContext("2d");
            ctx.rotate(degree * Math.PI / 180);
            ctx.drawImage(anten_resim, cx, cy);
            window.ownskins["bulb"] = window.anten_canvas;
        }
    };
    sccn.onclick = rightBtnClick;
    skMainWidth.appendChild(sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'button';
    sccn.value = "Left";
    sccn.min = 1;
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var LeftBtnClick = function() {
        if (anten_resim.src) {
            angleInDegrees -= 90;
            var cw = anten_resim.width,
                ch = anten_resim.height,
                cx = 0,
                cy = 0;
            degree = angleInDegrees;
            degree = parseInt(degree.toString().replace("-", ""));
            switch (degree) {
                case 90:
                    cw = anten_resim.height;
                    ch = anten_resim.width;
                    cy = anten_resim.height * (-1);
                    break;
                case 180:
                    cx = anten_resim.width * (-1);
                    cy = anten_resim.height * (-1);
                    break;
                case 270:
                    cw = anten_resim.height;
                    ch = anten_resim.width;
                    cx = anten_resim.width * (-1);
                    angleInDegrees = 0;
                    break;
            }
            window.anten_canvas.setAttribute('width', cw);
            window.anten_canvas.setAttribute('height', ch);
            ctx = window.anten_canvas.getContext("2d");
            ctx.rotate(degree * Math.PI / 180);
            ctx.drawImage(anten_resim, cx, cy);
            window.ownskins["bulb"] = window.anten_canvas;
        }
    };
    sccn.onclick = LeftBtnClick;
    skMainWidth.appendChild(sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your image width. Please do not leave empty." + '" style="cursor:help;">Width <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'number';
    sccn.min = 1;
    sccn.style.marginLeft = '10px';
    sccn.id = "imagewidth";
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var widthFunct = function() {
        if (parseInt(this.value) > 0)
            wvarmi = true;
        snake.blbw = parseInt(this.value);
        window.ownskins["blbw"] = snake.blbw;
    };
    sccn.onchange = widthFunct;
    sccn.onkeyup = widthFunct;
    sccn.onclick = widthFunct;
    skMainWidth.appendChild(sccn);
    var skMainHeight = document.createElement('div');
    skMainHeight.innerHTML = '<span title="' + "Your image height. Please do not leave empty." + '" style="cursor:help;">Height <font color="red">(?)</font>:</span>';
    skMainHeight.style.position = 'relative';
    skMainHeight.style.display = 'inline-block';
    skMainDiv.appendChild(skMainHeight);
    var __sccn = document.createElement('input');
    __sccn.type = 'number';
    __sccn.min = 1;
    __sccn.id = "imageheight";
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    var heightFunct = function() {
        if (parseInt(this.value) > 0) {
            hvarmi = true;
            snake.blbh = parseInt(this.value);
            window.ownskins["blbh"] = snake.blbh;
        }
    };
    __sccn.onchange = heightFunct;
    __sccn.onkeyup = heightFunct;
    __sccn.onclick = heightFunct;
    skMainHeight.appendChild(__sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '1px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your image X Coordinate. Please do not leave empty" + '" style="cursor:help;">X <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var __sccn = document.createElement('input');
    __sccn.type = 'number';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.id = "xcoor";
    __sccn.style.verticalAlign = 'middle';
    var XFunct = function() {
        xvarmi = true;
        snake.blbx = parseInt(this.value);
        window.ownskins["blbx"] = snake.blbx;
    };
    __sccn.onchange = XFunct;
    __sccn.onkeyup = XFunct;
    __sccn.onclick = XFunct;
    skMainWidth.appendChild(__sccn);
    var skMainHeight = document.createElement('div');
    skMainHeight.innerHTML = '<span title="' + "Your image Y Coordinate. Please do not leave empty" + '" style="cursor:help;">Y <font color="red">(?)</font>:</span>';
    skMainHeight.style.position = 'relative';
    skMainHeight.style.display = 'inline-block';
    skMainDiv.appendChild(skMainHeight);
    var __sccn = document.createElement('input');
    __sccn.type = 'number';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    __sccn.id = "ycoor";
    var YFunct = function() {
        yvarmi = true;
        snake.blby = parseInt(this.value);
        window.ownskins["blby"] = snake.blby;
    };
    __sccn.onchange = YFunct;
    __sccn.onkeyup = YFunct;
    __sccn.onclick = YFunct;
    skMainHeight.appendChild(__sccn);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your Antenna Width.\nIt is limited to between 2 and 500\nBecause 500 up is lag, 2 down is not work." + '" style="cursor:help;">Antenna Width <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'number';
    sccn.min = 2;
    sccn.max = 500;
    sccn.id = "antennawidth";
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var awidthFunct = function() {
        if (parseInt(this.value) >= 2 && parseInt(this.value) <= 500) {
            c = parseInt(this.value);
            snake.atx = new Float32Array(c);
            snake.aty = new Float32Array(c);
            snake.atvx = new Float32Array(c);
            snake.atvy = new Float32Array(c);
            snake.atax = new Float32Array(c);
            snake.atay = new Float32Array(c);
            for (--c; 0 <= c; c--) snake.atx[c] = snake.xx, snake.aty[c] = snake.yy;
            window.ownskins["valuem"] = parseInt(this.value);
        }
        if (document.getElementById('mycheckbox').checked == false) {
            document.getElementById('mycheckbox').click();
        }
    };
    sccn.onchange = awidthFunct;
    sccn.onkeyup = awidthFunct;
    sccn.onclick = awidthFunct;
    skMainWidth.appendChild(sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Antenna is your head image carrier." + '" style="cursor:help;">A <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginLeft = '8px';
    skMainDiv.appendChild(skMainWidth);
    var ____sccn3 = document.createElement('input');
    ____sccn3.type = 'checkbox';
    ____sccn3.id = 'mycheckbox';
    ____sccn3.style.marginRight = '30px';
    ____sccn3.style.width = '50px';
    ____sccn3.style.height = '20px';
    ____sccn3.style.border = '1px solid #A9A9A9';
    ____sccn3.style.fontSize = '12px';
    ____sccn3.style.verticalAlign = 'middle';
    var antennaaktif = function() {
        if (this.checked) {
            if (document.getElementById('antennawidth').value == false) {
                document.getElementById('antennawidth').value = 15;
            }
            snake.antenna = true;
            var c = 15;
            snake.atx = new Float32Array(c);
            snake.aty = new Float32Array(c);
            snake.atvx = new Float32Array(c);
            snake.atvy = new Float32Array(c);
            snake.atax = new Float32Array(c);
            snake.atay = new Float32Array(c);
        } else {
            snake.antenna = false;
        }
        window.ownskins["antenna"] = snake.antenna;
        window.ownskins["valuem"] = c;
    };
    ____sccn3.onclick = antennaaktif;
    skMainDiv.appendChild(____sccn3);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your Eye Size.\nIt is limited to between 1 and 15\nBecause 15 up is too big, 1 down is not work.\nAlso you can't use on Slogoman Eyes" + '" style="cursor:help;">Eye Size <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn__ = document.createElement('input');
    sccn__.type = 'number';
    sccn__.min = 1;
    sccn__.max = 15;
    sccn__.value = 3;
    sccn__.style.marginLeft = '10px';
    sccn__.style.width = '50px';
    sccn__.style.height = '20px';
    sccn__.style.border = '1px solid #A9A9A9';
    sccn__.style.fontSize = '12px';
    sccn__.style.verticalAlign = 'middle';
    var prdeisitir = function() {
        if (parseInt(this.value) >= 1 && parseInt(this.value) <= 15 && !snake.slg) {
            snake.pr = parseInt(this.value);
            svarmi = true;
            window.ownskins["pr"] = parseInt(this.value);
        }
    };
    sccn__.onchange = prdeisitir;
    sccn__.onkeyup = prdeisitir;
    sccn__.onclick = prdeisitir;
    skMainWidth.appendChild(sccn__);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your Eye Lens Size.\nIt is limited to between 1 and 15\nBecause 15 up is too big, 1 down is not work.\nAlso you can't use on Slogoman Eyes" + '" style="cursor:help;">Eye Lens Size <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'number';
    sccn.min = 1;
    sccn.max = 15;
    sccn.value = 6;
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var erdeistirir = function() {
        if (parseInt(this.value) >= 1 && parseInt(this.value) <= 15 && !snake.slg) {
            snake.er = parseInt(this.value);
            avarmi = true;
            window.ownskins["er"] = parseInt(this.value);
        }
    };
    sccn.onchange = erdeistirir;
    sccn.onkeyup = erdeistirir;
    sccn.onclick = erdeistirir;
    skMainWidth.appendChild(sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.innerHTML = '<span title="' + "Your Head Size.\nIt is limited to between 0 and 50\nBecause 50 up is too big, 0 down is not work." + '" style="cursor:help;">Head Size <font color="red">(?)</font>:</span>';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'number';
    sccn.value = 0;
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    var smelldeistir = function() {
        if (parseInt(this.value) >= 0 && parseInt(this.value) <= 50) {
            snake.swell = parseInt(this.value) / 200;
            dvarmi = true;
            window.ownskins["swell"] = parseInt(this.value) / 200;
        }
    };
    sccn.onchange = smelldeistir;
    sccn.onkeyup = smelldeistir;
    sccn.onclick = smelldeistir;
    skMainWidth.appendChild(sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Antenna Color:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'color';
    sccn.min = 1;
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    sccn.value = "#FFFFFF";
    sccn.id = "antenna_color";
    var antennaColorFunct = function() {
        r4varmi = true;
        if (document.getElementById('mycheckbox').checked == false) {
            document.getElementById('mycheckbox').click();
        }
        if (document.getElementById('transparen1').checked == true) {
            document.getElementById('transparen1').checked = false;
        }
        snake.atc2 = this.value;
        window.ownskins["atc2"] = snake.atc2;
    };
    sccn.onchange = antennaColorFunct;
    sccn.onkeyup = antennaColorFunct;
    sccn.onclick = antennaColorFunct;
    skMainWidth.appendChild(sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Transparent:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var __sccn = document.createElement('input');
    __sccn.type = 'checkbox';
    __sccn.id = 'transparen1';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    var AntennaTransparentFunct = function() {
        if (this.checked) {
            r4varmi = true;
            snake.atc2 = "transparent";
            if (document.getElementById('mycheckbox').checked == false) {
                document.getElementById('mycheckbox').click();
            }
        } else {
            snake.atc2 = document.getElementById("antenna_color").value;
        }
        window.ownskins["atc2"] = snake.atc2;
    };
    __sccn.onclick = AntennaTransparentFunct;
    skMainWidth.appendChild(__sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '1px';
    skMain.appendChild(skMainDiv);
    var skMainHeight = document.createElement('div');
    skMainHeight.textContent = 'Antenna Border Color:';
    skMainHeight.style.position = 'relative';
    skMainHeight.style.display = 'inline-block';
    skMainDiv.appendChild(skMainHeight);
    var __sccn = document.createElement('input');
    __sccn.type = 'color';
    __sccn.min = 1;
    __sccn.id = "antenna_border_color";
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    __sccn.value = "#000000";
    var antennaBorderColorFunct = function() {
        r3varmi = true;
        if (document.getElementById('mycheckbox').checked == false) {
            document.getElementById('mycheckbox').click();
        }
        if (document.getElementById('transparen2').checked == true) {
            document.getElementById('transparen2').checked = false;
        }
        snake.atc1 = this.value;
        window.ownskins["atc1"] = snake.atc1;
    };
    __sccn.onchange = antennaBorderColorFunct;
    __sccn.onkeyup = antennaBorderColorFunct;
    __sccn.onclick = antennaBorderColorFunct;
    skMainHeight.appendChild(__sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Transparent:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginLeft = '8px';
    skMainDiv.appendChild(skMainWidth);
    var __sccn = document.createElement('input');
    __sccn.type = 'checkbox';
    __sccn.id = 'transparen2';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    var AntennaBorderTransparentFunct = function() {
        if (this.checked) {
            r3varmi = true;
            snake.atc1 = "transparent";
            if (document.getElementById('mycheckbox').checked == false) {
                document.getElementById('mycheckbox').click();
            }
        } else {
            snake.atc1 = document.getElementById("antenna_border_color").value;
        }
        window.ownskins["atc1"] = snake.atc1;
    };
    __sccn.onclick = AntennaBorderTransparentFunct;
    skMainWidth.appendChild(__sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Eye Color:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var sccn = document.createElement('input');
    sccn.type = 'color';
    sccn.min = 1;
    sccn.id = "eye_color";
    sccn.style.marginLeft = '10px';
    sccn.style.width = '50px';
    sccn.style.height = '20px';
    sccn.style.border = '1px solid #A9A9A9';
    sccn.style.fontSize = '12px';
    sccn.style.verticalAlign = 'middle';
    sccn.value = "#000000";
    var eyeColorFunct = function() {
        r1varmi = true;
        snake.ppc = this.value;
        window.ownskins["ppc"] = snake.ppc;
        if (document.getElementById('transparen3').checked == true) {
            document.getElementById('transparen3').checked = false;
        }
    };
    sccn.onchange = eyeColorFunct;
    sccn.onkeyup = eyeColorFunct;
    sccn.onclick = eyeColorFunct;
    skMainWidth.appendChild(sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Transparent:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginRight = '13px';
    skMainDiv.appendChild(skMainWidth);
    var __sccn = document.createElement('input');
    __sccn.type = 'checkbox';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.id = 'transparen3';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    var EyeTransparentFunct = function() {
        if (this.checked) {
            snake.ppc = "transparent";
            r1varmi = true;
        } else {
            snake.ppc = document.getElementById("eye_color").value;
        }
        window.ownskins["ppc"] = snake.ppc;
    };
    __sccn.onclick = EyeTransparentFunct;
    skMainWidth.appendChild(__sccn);
    var skMain = document.createElement('div');
    _scws.appendChild(skMain);
    var skMainDiv = document.createElement('div');
    skMainDiv.style.marginBottom = '2px';
    skMain.appendChild(skMainDiv);
    var skMainHeight = document.createElement('div');
    skMainHeight.textContent = 'Eye Lens Color:';
    skMainHeight.style.position = 'relative';
    skMainHeight.style.display = 'inline-block';
    skMainDiv.appendChild(skMainHeight);
    var __sccn = document.createElement('input');
    __sccn.type = 'color';
    __sccn.min = 1;
    __sccn.id = "eye_lens_color";
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    __sccn.value = "#FFFFFF";
    var EyeLensColorFunct = function() {
        r2varmi = true;
        snake.ec = this.value;
        window.ownskins["ec"] = snake.ec;
        if (document.getElementById('transparen4').checked == true) {
            document.getElementById('transparen4').checked = false;
        }
    };
    __sccn.onchange = EyeLensColorFunct;
    __sccn.onkeyup = EyeLensColorFunct;
    __sccn.onclick = EyeLensColorFunct;
    skMainHeight.appendChild(__sccn);
    var skMainWidth = document.createElement('div');
    skMainWidth.textContent = 'Transparent:';
    skMainWidth.style.position = 'relative';
    skMainWidth.style.display = 'inline-block';
    skMainWidth.style.marginLeft = '8px';
    skMainDiv.appendChild(skMainWidth);
    var __sccn = document.createElement('input');
    __sccn.type = 'checkbox';
    __sccn.id = 'transparen4';
    __sccn.style.marginLeft = '10px';
    __sccn.style.width = '50px';
    __sccn.style.height = '20px';
    __sccn.style.border = '1px solid #A9A9A9';
    __sccn.style.fontSize = '12px';
    __sccn.style.verticalAlign = 'middle';
    var EyeLensTransparentFunct = function() {
        if (this.checked) {
            snake.ec = "transparent";
            r2varmi = true;
        } else {
            snake.ec = document.getElementById("eye_lens_color").value;
        }
        window.ownskins["ec"] = snake.ec;
    };
    __sccn.onclick = EyeLensTransparentFunct;
    skMainWidth.appendChild(__sccn);
    var scdef = document.createElement('div');
    scdef.style.display = 'none';
    scdef.style.width = '100%';
    scdef.style.position = 'absolute';
    scdef.style.top = '50%';
    scdef.style.transform = 'translate(0, -50%)';
    scdef.style.textAlign = 'center';
    scdef.style.opacity = 0.75;
    scws.appendChild(scdef);
    var scsorry = document.createElement('div');
    scsorry.textContent = "Sorry, you can't change default skins.";
    scdef.appendChild(scsorry);
    var scnew = document.createElement('div');
    scnew.textContent = 'Create new';
    scnew.className = 'slitherioskin-blue';
    scnew.style.fontWeight = 'bold';
    scnew.onclick = newSkin;
    scdef.appendChild(scnew);
    var sccss = document.createElement('div');
    scws.appendChild(sccss);
    var scadd = document.createElement('div');
    scadd.innerHTML = '<span class="slitherioskin-blue">Add color stop</span>';
    scadd.style.display = 'none';
    scadd.firstChild.onclick = function() {
        var prevColor = +sccss.lastChild.firstChild.childNodes[1].dataset.color,
            push;
        if (sccss.firstChild.childNodes[1].lastChild.disabled) {
            snake.rbcs = [];
            for (var i = 0; i < 7; i++)
                snake.rbcs.push(prevColor);
        }
        do {
            push = Math.floor(Math.random() * rrs.length);
        } while (push == prevColor);
        for (var i = 0; i < 7; i++)
            snake.rbcs.push(push);
        updateSkin();
        workspace();
    };
    scws.appendChild(scadd);
    var scprops = document.createElement('div');
    scprops.style.display = 'none';
    scws.appendChild(scprops);

    function onChange(prop, value, up = false) {
        var value = this[value];
        up ? (skins[snake.rcv - max_skin_cv - 1][prop] = value) : (skins[snake.rcv - max_skin_cv - 1].skin[prop] = value);
        var storageSkins = JSON.parse(localStorage.getItem('slitherioskin-skins'));
        up ? (storageSkins[snake.rcv - max_skin_cv - 1][prop] = value) : (storageSkins[snake.rcv - max_skin_cv - 1].skin[prop] = value);
        localStorage.setItem('slitherioskin-skins', JSON.stringify(storageSkins));
        setSkin(snake, snake.rcv);
    }

    function snakeSwitch(prop, name, up = false) {
        var scprop = document.createElement('div');
        scprop.innerHTML = '<input type="checkbox" id="slitherioskin-' + prop + '"> <label for="slitherioskin-' + prop + '">' + name + '</label>';
        scprop.dataset.prop = prop;
        scprop.firstChild.style.margin = scprop.lastChild.style.margin = 0;
        scprop.firstChild.onchange = function() {
            onChange.apply(this, [prop, 'checked', up]);
        };
        scprops.appendChild(scprop);
        return scprop;
    }
    snakeSwitch('slg', 'Slogoman eyes');
    snakeSwitch('jyt', 'Jelly face');
    snakeSwitch('one_eye', 'Jacksepticeye');
    var scskin = document.createElement('div');
    scskin.style.display = 'none';
    scskin.style.marginTop = '7px';
    scws.appendChild(scskin);
    var sccreate = document.createElement('span');
    sccreate.textContent = 'Create new &';
    sccreate.className = 'slitherioskin-blue';
    sccreate.onclick = newSkin;
    scskin.appendChild(sccreate);
    var scdelete = document.createElement('span');
    scdelete.textContent = 'Delete this skin';
    scdelete.className = 'slitherioskin-blue';
    scdelete.onclick = function() {
        skins.splice(snake.rcv - max_skin_cv - 1, 1);
        var storageSkins = JSON.parse(localStorage.getItem('slitherioskin-skins'));
        storageSkins.splice(snake.rcv - max_skin_cv - 1, 1);
        localStorage.setItem('slitherioskin-skins', JSON.stringify(storageSkins));
        setSkin(snake, snake.rcv - 1);
    };
    scskin.appendChild(scdelete);
    var sccm = document.createElement('div'),
        colors;
    sccm.style.position = 'absolute';
    sccm.style.top = '0px';
    sccm.style.left = '-310px';
    sccm.style.padding = '3px 7px';
    sccm.style.width = '350px';
    sccm.style.border = '1px solid #A9A9A9';
    sccm.style.background = 'white';
    sccm.style.zIndex = 100000001;
    sccm.onclick = function(e) {
        e.stopPropagation();
    };
    var scdefc = document.createElement('div');
    scdefc.textContent = 'Default colors:';
    var sccc = document.createElement('div');
    sccc.textContent = 'Custom colors:';
    var sccset = document.createElement('div');
    sccset.innerHTML = '<span class="slitherioskin-blue">Color settings</span>';
    sccset.firstChild.className = 'slitherioskin-blue';
    sccset.firstChild.onclick = function() {
        ccblackout.style.visibility = 'visible';
        ccblackout.style.opacity = 1;
        sccm.parentNode.removeChild(sccm);
    };

    function colorMenu() {
        colors = [], sccm.innerHTML = '';
        sccm.appendChild(scdefc);
        for (var i = 0; i < rrs.length; i++) {
            if (i == ncolors)
                sccm.appendChild(sccc);
            var scc = document.createElement('div');
            scc.dataset.color = i;
            scc.style.display = 'inline-block';
            scc.style.margin = '2px';
            scc.style.width = '18px';
            scc.style.height = '18px';
            scc.style.border = '1px solid rgba(0,0,0,0.75)';
            scc.style.backgroundColor = 'rgb(' + rrs[i] + ',' + ggs[i] + ',' + bbs[i] + ')';
            if (i == 10) scc.style.backgroundImage = ' url("http://i.imgur.com/kk1pXVE.png")';
            if (i == 19) scc.style.backgroundImage = ' url("http://i.imgur.com/DfUUkyT.png")';
            if (i == 20) scc.style.backgroundImage = ' url("http://i.imgur.com/i57h7xx.png")';
            if (i == 24) scc.style.boxShadow = 'inset 0 0 8px #CCCC00';
            if (i == 26) scc.style.boxShadow = 'inset 0 0 8px #FFFFE6';
            if (i == 27) scc.style.boxShadow = 'inset 0 0 8px #FFCCCC';
            scc.style.cursor = 'pointer';
            scc.onclick = function() {
                for (var j = 0; j < sccm.parentNode.nextSibling.lastChild.value; j++)
                    snake.rbcs[+sccm.parentNode.parentNode.dataset.position + j] = +this.dataset.color;
                updateSkin();
                workspace();
            };
            sccm.appendChild(scc);
            colors.push(scc);
        }
        sccm.appendChild(sccset);
    }
    var ssblackout = createWindow(),
        ssdiv = ssblackout.firstChild;
    var ssheader = document.createElement('h2');
    ssheader.textContent = 'Special skins';
    ssdiv.appendChild(ssheader);
    var ssp = document.createElement('div');
    ssp.textContent = 'Check the skins you want to use:';
    ssp.style.textAlign = 'center';
    ssdiv.appendChild(ssp);
    
    var scolors = [
            [179, 74, 0],//29
            [153, 255, 0],
            [255, 25, 0],
            [0, 213, 255],
            [132, 184, 25],
            [0, 0, 0],
            [129, 94, 57],
            [162, 118, 93],
            [215, 165, 135],
            [58, 88, 151],
            [100, 174, 226],
            [100, 65, 165],
            [50, 92, 17],
            [242, 240, 0],
            [170, 53, 20],
            [194, 129, 46],
            [39, 76, 160],
            [227, 199, 17],
            [160, 178, 136],
            [10, 159, 138],
            [140, 199, 49]
        ];
    for (var i = 0; i < scolors.length; i++) {
        rrs.push(scolors[i][0]);
        ggs.push(scolors[i][1]);
        bbs.push(scolors[i][2]);
        applyColor(ncolors++);
    }
    
    setColors();
    colorMenu();
    var skins = JSON.parse(localStorage.getItem('slitherioskin-skins')) || [];
    if (!(skins instanceof Array)) skins = [];
    if (skins.length > 0 && skins[0] instanceof Array) {
        for (var i = 0; i < skins.length; i++)
            skins[i] = {
                skin: {
                    rbcs: skins[i]
                }
            };
        localStorage.setItem('slitherioskin-skins', JSON.stringify(skins));
    }
    var storageSkins = JSON.parse(JSON.stringify(skins));
    for (var i = 0; i < skins.length; i++)
        for (var j = 0; j < skins[i].skin.rbcs.length; j++) {
            if (skins[i].skin.rbcs[j] >= ncolors) storageSkins[i].skin.rbcs[j] = skins[i].skin.rbcs[j] = ((skins[i].skin.rbcs[j] - ncolors + 1) > ccolors.length ? ncolors - 1 : ~skins[i].skin.rbcs[j] + ncolors), localStorage.setItem('slitherioskin-skins', JSON.stringify(storageSkins));
            if (-skins[i].skin.rbcs[j] > ccolors.length) storageSkins[i].skin.rbcs[j] = skins[i].skin.rbcs[j] = -ccolors.length, localStorage.setItem('slitherioskin-skins', JSON.stringify(storageSkins));
            if (skins[i].skin.rbcs[j] < 0) skins[i].skin.rbcs[j] = ~skins[i].skin.rbcs[j] + ncolors;
        }
    if (localStorage.getItem('slitherioskin-nameid')) nick.value = localStorage.getItem('slitherioskin-nameid');
    nick.onchange = function() {
        localStorage.setItem('slitherioskin-nameid', this.value);
    };
    cskh.onclick = function() {
        div.style.display = 'block';
        setTimeout(function() {
            div.style.opacity = 1;
        }, 0);
        if (localStorage.getItem('snakercv') > max_skin_cv + skins.length) setSkin(snake, max_skin_cv + skins.length), localStorage.setItem('snakercv', max_skin_cv + skins.length);
    };
    skodiv.lastChild.onclick = function() {
        div.style.opacity = 0;
        setTimeout(function() {
            div.style.display = 'none';
        }, 1000);
        Constructor(true);
    };
    psk.onclick = function() {
        if (playing && snake) {
            var c = snake.rcv;
            c--;
            0 > c && (c = max_skin_cv + skins.length);
            setSkin(snake, c);
        }
        return false;
    };
    nsk.onclick = function() {
        if (playing && snake) {
            var c = snake.rcv;
            c++;
            c > max_skin_cv + skins.length && (c = 0);
            setSkin(snake, c);
        }
        return false;
    };
    var onkeyup = document.onkeyup;

    body.onclick = function() {
        if (sccm.parentNode) sccm.parentNode.removeChild(sccm);
    };
    body.onmousemove = function(e) {
        if (currentColor) {
            e.preventDefault();
            var x = Math.min(255, e.pageX - currentColor.parentNode.parentNode.offsetLeft - currentColor.offsetLeft);
            if (x < 0) x = 0;
            var rgb = parseColor(currentColor.parentNode.parentNode.firstChild.style.backgroundColor);
            for (var i = 0; i < currentColor.parentNode.childNodes.length; i++)
                if (currentColor.parentNode.childNodes[i] === currentColor) rgb[i] = x;
            setColor(rgb, currentColor.parentNode.parentNode);
        }
    };
    body.onmouseup = function() {
        currentColor = null;
    };
    var oldResize = resize;
    resize = function() {
        oldResize();
        skodiv.style.top = Math.round(hh / 2 + (sc ? -130 : 120)) + "px";
        pskh.style.top = Math.round(hh / 2 - (sc ? 294 : 44)) + "px";
        nskh.style.top = Math.round(hh / 2 - (sc ? 294 : 44)) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) - (sc ? 250 : 0) + "px";
        stylesheet.insertRule('.slitherioskin-window{max-height:' + (hh - 50) + 'px;' + '}', stylesheet.cssRules.length);
    };
})();