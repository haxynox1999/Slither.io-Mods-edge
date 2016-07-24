if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
/* ==Slither.io Bots Script==

Copyright (c) 2016 Ermiya Eskandary & Théophile Cailliau and other contributors

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
 
@version      1.1.9
@author       Ermiya Eskandary & Théophile Cailliau
@sourceCode   https://github.com/ErmiyaEskandary/Slither.io-bot/
@supportURL   https://github.com/ErmiyaEskandary/Slither.io-bot/issues
@message      Thanks Ermiya Eskandary & Théophile Cailliau very much

==Slither.io Bots Script== */

const TARGET_FPS = 60;
var renderMode = 3;
var version = '2.1.2';
var normalRender = false;
var gameFPS = null;
var positionHUD = null;
var bestscoreHUD = null;
var titleHUD = null;
var ipHUD = null;
var fpsHUD = null;
var styleHUD = "color: #FFF; font-family: Consolas, Verdana; font-size: 13px; position: fixed; opacity: 0.35; z-index: 7;";
var inpNick = null;
var currentIP = null;
var currentPartyCode = null;
var playparty = false;
var retry = 0;
var bgImage = null;
var loopSkin = false;
var f = false;
var colorfood = 1;
var sizee = 1;
var crazie = false;
var teamUp = false;
var loopInterval = 500;
var skinLoop = null;
var foodLoop = null;
var nextSkin = 0;
var highScore = 0;
var inpIP = null;
var shortmenu = true;
var mainParty = "";
var uID = "";
window.getSnakeLength = function() {
    return (Math.floor(150 * (window.fpsls[window.snake.sct] + window.snake.fam / window.fmlts[window.snake.sct] - 1) -
        50) / 10);
};
window.getSnakeWidth = function(sc) {
    if (sc === undefined) sc = window.snake.sc;
    return Math.round(sc * 29.0);
};
var canvas = window.canvas = (function() {
    return {
        canvasRatio: {
            x: window.mc.width / window.ww,
            y: window.mc.height / window.hh
        },
        setMouseCoordinates: function(point) {
            window.xm = point.x;
            window.ym = point.y;
        },
        mouseToScreen: function(point) {
            var screenX = point.x + (window.ww / 2);
            var screenY = point.y + (window.hh / 2);
            return {
                x: screenX,
                y: screenY
            };
        },
        screenToCanvas: function(point) {
            var canvasX = window.csc * (point.x * canvas.canvasRatio.x) - parseInt(window.mc.style.left);
            var canvasY = window.csc * (point.y * canvas.canvasRatio.y) - parseInt(window.mc.style.top);
            return {
                x: canvasX,
                y: canvasY
            };
        },
        mapToMouse: function(point) {
            var mouseX = (point.x - window.snake.xx) * window.gsc;
            var mouseY = (point.y - window.snake.yy) * window.gsc;
            return {
                x: mouseX,
                y: mouseY
            };
        },
        mapToCanvas: function(point) {
            var c = canvas.mapToMouse(point);
            c = canvas.mouseToScreen(c);
            c = canvas.screenToCanvas(c);
            return c;
        },
        circleMapToCanvas: function(circle) {
            var newCircle = canvas.mapToCanvas(circle);
            return canvas.circle(newCircle.x, newCircle.y, circle.radius * window.gsc);
        },
        point: function(x, y) {
            var p = {
                x: Math.round(x),
                y: Math.round(y)
            };
            return p;
        },
        rect: function(x, y, w, h) {
            var r = {
                x: Math.round(x),
                y: Math.round(y),
                width: Math.round(w),
                height: Math.round(h)
            };
            return r;
        },
        circle: function(x, y, r) {
            var c = {
                x: Math.round(x),
                y: Math.round(y),
                radius: Math.round(r)
            };
            return c;
        },
        fastAtan2: function(y, x) {
            const QPI = Math.PI / 4;
            const TQPI = 3 * Math.PI / 4;
            var r = 0.0;
            var angle = 0.0;
            var abs_y = Math.abs(y) + 1e-10;
            if (x < 0) {
                r = (x + abs_y) / (abs_y - x);
                angle = TQPI;
            } else {
                r = (x - abs_y) / (x + abs_y);
                angle = QPI;
            }
            angle += (0.1963 * r * r - 0.9817) * r;
            if (y < 0) {
                return -angle;
            }
            return angle;
        },
        setBackground: function(url) {
            url = typeof url !== 'undefined' ? url : '/s/bg45.jpg';
            window.ii.src = url;
        },
        drawRect: function(rect, color, fill, alpha) {
            if (alpha === undefined) alpha = 1;
            var context = window.mc.getContext('2d');
            var lc = canvas.mapToCanvas({
                x: rect.x,
                y: rect.y
            });
            context.save();
            context.globalAlpha = alpha;
            context.strokeStyle = color;
            context.rect(lc.x, lc.y, rect.width * window.gsc, rect.height * window.gsc);
            context.stroke();
            if (fill) {
                context.fillStyle = color;
                context.fill();
            }
            context.restore();
        },
        drawCircle: function(circle, color, fill, alpha) {
            if (alpha === undefined) alpha = 1;
            if (circle.radius === undefined) circle.radius = 5;
            var context = window.mc.getContext('2d');
            var drawCircle = canvas.circleMapToCanvas(circle);
            context.save();
            context.globalAlpha = alpha;
            context.beginPath();
            context.strokeStyle = color;
            context.arc(drawCircle.x, drawCircle.y, drawCircle.radius, 0, Math.PI * 2);
            context.stroke();
            if (fill) {
                context.fillStyle = color;
                context.fill();
            }
            context.restore();
        },
        drawAngle: function(start, angle, color, fill, alpha) {
            if (alpha === undefined) alpha = 0.6;
            var context = window.mc.getContext('2d');
            context.save();
            context.globalAlpha = alpha;
            context.beginPath();
            context.moveTo(window.mc.width / 2, window.mc.height / 2);
            context.arc(window.mc.width / 2, window.mc.height / 2, window.gsc * 100, start, angle);
            context.lineTo(window.mc.width / 2, window.mc.height / 2);
            context.closePath();
            context.stroke();
            if (fill) {
                context.fillStyle = color;
                context.fill();
            }
            context.restore();
        },
        drawLine: function(p1, p2, color, width) {
            if (width === undefined) width = 5;
            var context = window.mc.getContext('2d');
            var dp1 = canvas.mapToCanvas(p1);
            var dp2 = canvas.mapToCanvas(p2);
            context.save();
            context.beginPath();
            context.lineWidth = width * window.gsc;
            context.strokeStyle = color;
            context.moveTo(dp1.x, dp1.y);
            context.lineTo(dp2.x, dp2.y);
            context.stroke();
            context.restore();
        },
        isLeft: function(start, end, point) {
            return ((end.x - start.x) * (point.y - start.y) -
                (end.y - start.y) * (point.x - start.x)) > 0;
        },
        getDistance2: function(x1, y1, x2, y2) {
            var distance2 = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
            return distance2;
        },
        getDistance2FromSnake: function(point) {
            point.distance = canvas.getDistance2(window.snake.xx, window.snake.yy, point.xx, point.yy);
            return point;
        },
        pointInRect: function(point, rect) {
            if (rect.x <= point.x && rect.y <= point.y && rect.x + rect.width >= point.x && rect.y + rect.height >= point.y) {
                return true;
            }
            return false;
        },
        circleIntersect: function(circle1, circle2) {
            var bothRadii = circle1.radius + circle2.radius;
            if (circle1.x + bothRadii > circle2.x && circle1.y + bothRadii > circle2.y && circle1.x < circle2.x + bothRadii && circle1.y < circle2.y + bothRadii) {
                var distance2 = canvas.getDistance2(circle1.x, circle1.y, circle2.x, circle2.y);
                if (distance2 < bothRadii * bothRadii) {                    
                    return true;
                }
            }
            return false;
        }
    };
})();
var ai = window.ai = (function() {
    return {
        isBotRunning: false,
        isBotEnabled: false,
        lookForFood: false,
        collisionPoints: [],
        collisionAngles: [],
        scores: [],
        foodTimeout: undefined,
        sectorBoxSide: 0,
        defaultAccel: 0,
        sectorBox: {},
        currentFood: {},
        MID_X: 0,
        MID_Y: 0,
        MAP_R: 0,
        angleBetween: function(a1, a2) {
            var r1 = 0.0;
            var r2 = 0.0;
            r1 = (a1 - a2) % Math.PI;
            r2 = (a2 - a1) % Math.PI;
            return r1 < r2 ? -r1 : r2;
        },
        avoidHeadPoint: function(collisionPoint) {
            var cehang = canvas.fastAtan2(collisionPoint.yy - window.snake.yy, collisionPoint.xx - window.snake.xx);
            var diff = ai.angleBetween(window.snake.ehang, cehang);
            if (Math.abs(diff) > 3 * Math.PI / 4) {
                var dir = diff > 0 ? -Math.PI / 2 : Math.PI / 2;
                ai.changeHeading(dir);
            } else {
                ai.avoidCollisionPoint(collisionPoint);
            }
        },
        changeHeading: function(angle) {
            var heading = {
                x: window.snake.xx + 500 * window.snake.cos,
                y: window.snake.yy + 500 * window.snake.sin
            };
            var cos = Math.cos(-angle);
            var sin = Math.sin(-angle);
            window.goalCoordinates = {
                x: Math.round(cos * (heading.x - window.snake.xx) -
                    sin * (heading.y - window.snake.yy) + window.snake.xx),
                y: Math.round(sin * (heading.x - window.snake.xx) +
                    cos * (heading.y - window.snake.yy) + window.snake.yy)
            };
            canvas.setMouseCoordinates(canvas.mapToMouse(window.goalCoordinates));
        },
        avoidCollisionPoint: function(collisionPoint, ang) {
            if (ang === undefined || ang > Math.PI) {
                ang = Math.PI;
            }
            var end = {
                x: window.snake.xx + 2000 * window.snake.cos,
                y: window.snake.yy + 2000 * window.snake.sin
            };            
            var cos = Math.cos(ang);
            var sin = Math.sin(ang);
            if (canvas.isLeft({
                    x: window.snake.xx,
                    y: window.snake.yy
                }, end, {
                    x: collisionPoint.xx,
                    y: collisionPoint.yy
                })) {
                sin = -sin;
            }
            window.goalCoordinates = {
                x: Math.round(cos * (collisionPoint.xx - window.snake.xx) -
                    sin * (collisionPoint.yy - window.snake.yy) + window.snake.xx),
                y: Math.round(sin * (collisionPoint.xx - window.snake.xx) +
                    cos * (collisionPoint.yy - window.snake.yy) + window.snake.yy)
            };
            canvas.setMouseCoordinates(canvas.mapToMouse(window.goalCoordinates));
        },
        sortDistance: function(a, b) {
            return a.distance - b.distance;
        },
        getAngleIndex: function(angle) {
            const ARCSIZE = Math.PI / 4;
            var index;
            if (angle < 0) {
                angle += 2 * Math.PI;
            }
            index = Math.round(angle * (1 / ARCSIZE));
            if (index === (2 * Math.PI) / ARCSIZE) {
                return 0;
            }
            return index;
        },
        addCollisionAngle: function(sp) {
            var ang = canvas.fastAtan2(Math.round(sp.yy - window.snake.yy), Math.round(sp.xx - window.snake.xx));
            var aIndex = ai.getAngleIndex(ang);
            var actualDistance = Math.round(Math.pow(Math.sqrt(sp.distance) - sp.radius, 2));
            if (ai.collisionAngles[aIndex] === undefined) {
                ai.collisionAngles[aIndex] = {
                    x: Math.round(sp.xx),
                    y: Math.round(sp.yy),
                    ang: ang,
                    snake: sp.snake,
                    distance: actualDistance
                };
            } else if (ai.collisionAngles[aIndex].distance > sp.distance) {
                ai.collisionAngles[aIndex].x = Math.round(sp.xx);
                ai.collisionAngles[aIndex].y = Math.round(sp.yy);
                ai.collisionAngles[aIndex].ang = ang;
                ai.collisionAngles[aIndex].snake = sp.snake;
                ai.collisionAngles[aIndex].distance = actualDistance;
            }
        },
        getCollisionPoints: function() {
            var scPoint;
            ai.collisionPoints = [];
            ai.collisionAngles = [];
            for (var snake = 0, ls = window.snakes.length; snake < ls; snake++) {
                scPoint = undefined;
                if (window.snakes[snake].id !== window.snake.id && window.snakes[snake].alive_amt === 1) {
                    scPoint = {
                        xx: window.snakes[snake].xx,
                        yy: window.snakes[snake].yy,
                        snake: snake,
                        radius: window.getSnakeWidth(window.snakes[snake].sc) / 2
                    };
                    canvas.getDistance2FromSnake(scPoint);
                    ai.addCollisionAngle(scPoint);                    
                    for (var pts = 0, lp = window.snakes[snake].pts.length; pts < lp; pts++) {
                        if (!window.snakes[snake].pts[pts].dying && canvas.pointInRect({
                                x: window.snakes[snake].pts[pts].xx,
                                y: window.snakes[snake].pts[pts].yy
                            }, ai.sectorBox)) {
                            var collisionPoint = {
                                xx: window.snakes[snake].pts[pts].xx,
                                yy: window.snakes[snake].pts[pts].yy,
                                snake: snake,
                                radius: window.getSnakeWidth(window.snakes[snake].sc) / 2
                            };                            
                            canvas.getDistance2FromSnake(collisionPoint);
                            ai.addCollisionAngle(collisionPoint);
                            if (scPoint === undefined || scPoint.distance > collisionPoint.distance) {
                                scPoint = collisionPoint;
                            }
                        }
                    }
                }
                if (scPoint !== undefined) {
                    ai.collisionPoints.push(scPoint);                    
                }
            }
            if (canvas.getDistance2(ai.MID_X, ai.MID_Y, window.snake.xx, window.snake.yy) > Math.pow(ai.MAP_R - 1000, 2)) {
                var midAng = canvas.fastAtan2(window.snake.yy - ai.MID_X, window.snake.xx - ai.MID_Y);
                scPoint = {
                    xx: ai.MID_X + ai.MAP_R * Math.cos(midAng),
                    yy: ai.MID_Y + ai.MAP_R * Math.sin(midAng),
                    snake: -1,
                    radius: window.getSnakeWidth()
                };
                canvas.getDistance2FromSnake(scPoint);
                ai.collisionPoints.push(scPoint);
                ai.addCollisionAngle(scPoint);                
            }
            ai.collisionPoints.sort(ai.sortDistance);            
        },
        checkCollision: function(r) {
            r = Number(r);
            var xx = Number(window.snake.xx.toFixed(3));
            var yy = Number(window.snake.yy.toFixed(3));
            window.snake.cos = Math.cos(window.snake.ang).toFixed(3);
            window.snake.sin = Math.sin(window.snake.ang).toFixed(3);
            const speedMult = window.snake.sp / 5.78;
            const widthMult = window.getSnakeWidth();
            var headCircle = canvas.circle(xx, yy, speedMult * r / 2 * widthMult / 2);
            var fullHeadCircle = canvas.circle(xx, yy, r * widthMult / 2);
            var sidecircle_r = canvas.circle(window.snake.lnp.xx -
                ((window.snake.lnp.yy + window.snake.sin * window.getSnakeWidth()) -
                    window.snake.lnp.yy), window.snake.lnp.yy +
                ((window.snake.lnp.xx + window.snake.cos * window.getSnakeWidth()) -
                    window.snake.lnp.xx), window.getSnakeWidth() * speedMult);
            var sidecircle_l = canvas.circle(window.snake.lnp.xx +
                ((window.snake.lnp.yy + window.snake.sin * window.getSnakeWidth()) -
                    window.snake.lnp.yy), window.snake.lnp.yy -
                ((window.snake.lnp.xx + window.snake.cos * window.getSnakeWidth()) -
                    window.snake.lnp.xx), window.getSnakeWidth() * speedMult);
            window.snake.sidecircle_r = sidecircle_r;
            window.snake.sidecircle_l = sidecircle_l;
            if (window.visualDebugging) {
                canvas.drawCircle(fullHeadCircle, 'red');
                canvas.drawCircle(headCircle, 'blue', false);
            }
            ai.getCollisionPoints();
            if (ai.collisionPoints.length === 0) return false;
            for (var i = 0; i < ai.collisionPoints.length; i++) {
                var collisionCircle = canvas.circle(ai.collisionPoints[i].xx, ai.collisionPoints[i].yy, ai.collisionPoints[i].radius);
                if (canvas.circleIntersect(headCircle, collisionCircle)) {
                    window.setAcceleration(ai.defaultAccel);
                    ai.avoidCollisionPoint(ai.collisionPoints[i]);
                    return true;
                }
                if (ai.collisionPoints[i].snake !== -1) {
                    var eHeadCircle = canvas.circle(window.snakes[ai.collisionPoints[i].snake].xx, window.snakes[ai.collisionPoints[i].snake].yy, ai.collisionPoints[i].radius);
                    if (canvas.circleIntersect(fullHeadCircle, eHeadCircle)) {
                        if (window.snakes[ai.collisionPoints[i].snake].sp > 10) {
                            window.setAcceleration(1);
                        } else {
                            window.setAcceleration(ai.defaultAccel);
                        }
                        ai.avoidHeadPoint({
                            xx: window.snakes[ai.collisionPoints[i].snake].xx,
                            yy: window.snakes[ai.collisionPoints[i].snake].yy
                        });
                        return true;
                    }
                }
            }
            window.setAcceleration(ai.defaultAccel);
            return false;
        },
        sortScore: function(a, b) {
            return b.score - a.score;
        },
        scoreFood: function(f) {
            f.score = Math.pow(Math.ceil(f.sz / 5) * 5, 2) /
                f.distance / (Math.ceil(f.da * 2.546) / 2.546);
        },
        computeFoodGoal: function() {
            var foodClusters = [];
            var foodGetIndex = [];
            var fi = 0;
            var sw = window.getSnakeWidth();
            for (var i = 0; i < window.foods.length && window.foods[i] !== null; i++) {
                var a;
                var da;
                var distance;
                var sang = window.snake.ehang;
                var f = window.foods[i];
                if (!f.eaten && !(canvas.circleIntersect(canvas.circle(f.xx, f.yy, 2), window.snake.sidecircle_l) || canvas.circleIntersect(canvas.circle(f.xx, f.yy, 2), window.snake.sidecircle_r))) {
                    var cx = Math.round(Math.round(f.xx / sw) * sw);
                    var cy = Math.round(Math.round(f.yy / sw) * sw);
                    var csz = Math.round(f.sz);
                    if (foodGetIndex[cx + '|' + cy] === undefined) {
                        foodGetIndex[cx + '|' + cy] = fi;
                        a = canvas.fastAtan2(cy - window.snake.yy, cx - window.snake.xx);
                        da = Math.min((2 * Math.PI) - Math.abs(a - sang), Math.abs(a - sang));
                        distance = Math.round(canvas.getDistance2(cx, cy, window.snake.xx, window.snake.yy));
                        foodClusters[fi] = {
                            x: cx,
                            y: cy,
                            a: a,
                            da: da,
                            sz: csz,
                            distance: distance,
                            score: 0.0
                        };
                        fi++;
                    } else {
                        foodClusters[foodGetIndex[cx + '|' + cy]].sz += csz;
                    }
                }
            }
            foodClusters.forEach(ai.scoreFood);
            foodClusters.sort(ai.sortScore);
            for (i = 0; i < foodClusters.length; i++) {
                var aIndex = ai.getAngleIndex(foodClusters[i].a);
                if (ai.collisionAngles[aIndex] === undefined || (Math.sqrt(ai.collisionAngles[aIndex].distance) -
                        window.getSnakeWidth() * 2.5 > Math.sqrt(foodClusters[i].distance) && foodClusters[i].sz > 10)) {
                    ai.currentFood = foodClusters[i];
                    return;
                }
            }
            ai.currentFood = {
                x: ai.MID_X,
                y: ai.MID_Y
            };
        },
        foodAccel: function() {
            var aIndex = 0;
            if (ai.currentFood && ai.currentFood.sz > 60) {
                aIndex = ai.getAngleIndex(ai.currentFood.a);
                if (ai.collisionAngles[aIndex] && ai.collisionAngles[aIndex].distance > ai.currentFood.distance + window.getSnakeWidth() * 5 && ai.currentFood.da < Math.PI / 3) {
                    return 1;
                }
                if (ai.collisionAngles[aIndex] === undefined) {
                    return 1;
                }
            }
            return ai.defaultAccel;
        },
        collisionLoop: function() {
            ai.MID_X = window.grd;
            ai.MID_Y = window.grd;
            ai.MAP_R = window.grd * 0.98;
            ai.sectorBoxSide = Math.floor(Math.sqrt(window.sectors.length)) * window.sector_size;
            ai.sectorBox = canvas.rect(window.snake.xx - (ai.sectorBoxSide / 2), window.snake.yy - (ai.sectorBoxSide / 2), ai.sectorBoxSide, ai.sectorBoxSide);
            if (ai.checkCollision(window.collisionRadiusMultiplier)) {
                ai.lookForFood = false;
                if (ai.foodTimeout) {
                    window.clearTimeout(ai.foodTimeout);
                    ai.foodTimeout = window.setTimeout(ai.foodTimer, 1000 / TARGET_FPS * 4);
                }
            } else {
                ai.lookForFood = true;
                if (ai.foodTimeout === undefined) {
                    ai.foodTimeout = window.setTimeout(ai.foodTimer, 1000 / TARGET_FPS * 4);
                }
                window.setAcceleration(ai.foodAccel());
            }
        },
        foodTimer: function() {
            if (window.playing && ai.lookForFood && window.snake !== null && window.snake.alive_amt === 1) {
                ai.computeFoodGoal();
                window.goalCoordinates = ai.currentFood;
                canvas.setMouseCoordinates(canvas.mapToMouse(window.goalCoordinates));
            }
            ai.foodTimeout = undefined;
        }
    };
})();
var us = window.us = (function() {
    var original_keydown = document.onkeydown;
    var original_onmouseDown = window.onmousedown;
    var original_onmousemove = window.onmousemove;
    return {
        overlays: {},
        savePreference: function(item, value) {
            window.localStorage.setItem(item, value);
        },
        loadPreference: function(preference, defaultVar) {
            var savedItem = window.localStorage.getItem(preference);
            if (savedItem !== null) {
                if (savedItem === 'true') {
                    window[preference] = true;
                } else if (savedItem === 'false') {
                    window[preference] = false;
                } else {
                    window[preference] = savedItem;
                }                
            } else {
                window[preference] = defaultVar;                
            }
            return window[preference];
        },
        saveNick: function() {
            var nick = document.getElementById('nick').value;
            us.savePreference('savedNick', nick);
        },
        framesPerSecond: {
            fps: 0,
            fpsTimer: function() {
                if (window.playing && window.fps && window.lrd_mtm) {
                    if (Date.now() - window.lrd_mtm > 970) {
                        us.framesPerSecond.fps = window.fps;
                    }
                }
            }
        },
        onFrameUpdate: function() {            
            if (window.playing && window.visualDebugging) {
                if (window.goalCoordinates && ai.isBotEnabled) {
                    var headCoord = {
                        x: window.snake.xx,
                        y: window.snake.yy
                    };
                    canvas.drawLine(headCoord, window.goalCoordinates, 'green');
                    canvas.drawCircle(window.goalCoordinates, 'red', true);
                }
            }
        },
        oefTimer: function() {
            var start = Date.now();
            if (window.playing && ai.isBotEnabled && window.snake !== null) {
                window.onmousemove = function() {};
                ai.isBotRunning = true;
                ai.collisionLoop();
            } else if (ai.isBotEnabled && ai.isBotRunning) {
                ai.isBotRunning = false;
                if (window.lastscore && window.lastscore.childNodes[1]) {
                    ai.scores.push(parseInt(window.lastscore.childNodes[1].innerHTML));
                    ai.scores.sort(function(a, b) {
                        return b - a;
                    });
                }
                if (window.autoRespawn) {
                    if(playparty){
                        joinParty();
                    }
                    else{
                        window.connect();
                    }
                }
            }
            if (!ai.isBotEnabled || !ai.isBotRunning) {
                window.onmousemove = original_onmousemove;
            }
            setTimeout(us.oefTimer, (1000 / TARGET_FPS) - (Date.now() - start));
        },
        onresize: function() {
            window.resize();
            canvas.canvasRatio = {
                x: window.mc.width / window.ww,
                y: window.mc.height / window.hh
            };
        }
    };
})();
var blackball = document.createElement("canvas");
blackball.width = blackball.height = 34;
ctx = blackball.getContext("2d");
g = ctx.createRadialGradient(17, 17, 1, 17, 17, 16);
g.addColorStop(0, "rgba(10, 10, 10, 1)");
g.addColorStop(.83, "rgba(30,30,30, 1)");
g.addColorStop(.84, "rgba(20,20,20, 1)");
g.addColorStop(.99, "rgba(20,20,20, 1)");
g.addColorStop(1, "rgba(20,20,20, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 34, 34);

var whiteball = document.createElement("canvas");
whiteball.width = whiteball.height = 34;
ctx = whiteball.getContext("2d");
g = ctx.createRadialGradient(17, 17, 1, 17, 17, 16);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 34, 34);
var customSkins = {    
    skins: [
    {   //#1
        body: [11, 9, 11, 7, 7, 7],
        bulb: false,
        extras: false
    }, {//#2
        body: [11, 9, 11, 4, 4, 4],
        bulb: false,
        extras: false
    }, {//#3
        body: [11, 9, 11, 5, 5, 5],
        bulb: false,
        extras: false
    }, {//#4
        body: [11, 9, 11, 23, 23, 23],
        bulb: false,
        extras: false
    }, {//#5
        body: [11, 7, 7, 11, 11, 11, 9, 9],
        bulb: false,
        extras: false
    }, {//#6
        body: [12, 11, 22, 22, 23, 23, 12],
        bulb: false,
        extras: false        
    }, {//#7
        body: [11, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        bulb: false,
        extras: false
    }, {//#8
        body: [3, 3, 3, 9, 11, 9],
        bulb: false,
        extras: {one_eye: !0,ebi: jsebi,ebiw: 64,ebih: 64,ebisz: 29,epi: jsepi,epiw: 48,epih: 48,episz: 14,pma: 4,swell: .06}
    }, {//#9
        body: [22, 22, 9],
        bulb: {antenna: !0, atba: 0, eca: 1, atc1: "#301400", atc2: "#ff6813", atwg: !0, atia: .5, abrot: !0, c: 9, bulb: kwkbulb, blbx: -39, blby: -63, blbw: 172, blbh: 113, bsc: .42, blba: 1},
        extras: false
    }, {//#10
        body: [16, 16, 9, 7, 7, 9, 12, 12, 9, 16, 16, 9, 13, 13, 9, 7, 7],
        bulb: false,
        extras: {eac: !0, jyt: !0, one_eye: 0, swell: 0}
    }, {//#11
        body: [11],
        bulb: {eca: 0.75, esp: 5.5, ed: 5, ppa: 0, swell: 0, ec: "#000", atc1: "#000", atc2: "#474747", er: 3, antenna: !0, c: 70, bulb: acbulb, blbx: -10, blby: -10, blbw: 20, blbh: 20, bsc: .6, blba: 1},
        extras: false
    }, {//#12
        body: [9],
        bulb: {eca: 1, esp: 5.5, ed: 5, ppa: 0, swell: 0, ec: "red", atc1: "#1f1f1f", atc2: "#dcdcdc", er: 3, antenna: !0, c: 70, bulb: whiteball, blbx: -10, blby: -10, blbw: 20, blbh: 20, bsc: .6, blba: 1},
        extras: false
    }, {//#13
        body: [25, 25, 25, 25, 25, 25, 25, 0, 0],
        bulb: false,
        extras: false
    }, {//#14
        body: [26],
        bulb: false,
        extras: {one_eye: !0,ebi: jsebi,ebiw: 64,ebih: 64,ebisz: 29,epi: jsepi,epiw: 48,epih: 48,episz: 14,pma: 4,swell: .06}
    }, {//#15
        body: [16, 27, 27, 27],
        bulb: false,
        extras: false
    }, {//#16
        body: [9, 9, 11, 11, 9 ,9 ,9 ,11 ,11, 9],
        bulb: {pr: 2, er: 4.5, ppc: "red", ec: "#000"},
        extras: false
    }, {//#17
        body: [16, 16, 16, 16, 7, 7, 7, 9, 9, 10, 10, 10, 9, 9, 7, 7, 7],
        bulb: {abrot: !0, atba: 0, antenna: !0, blbw: 150, blbh: 150, blbx: -20, blby: -75, bsc: .33, blba: 1, c: 2, atc1: 'transparent', atc2: 'transparent'},
        extras: false,
        image: {id: 'PRokEz0'}
    }, {//#18
        body: [12, 27, 27, 27, 27, 9, 9, 27, 27, 27, 27, 12],
        bulb: {ec: 'transparent', ppc: '#e3f4f6', ed: 1, pr: 3, eca: 1, esp: 6},
        extras: false
    }, {//#19
        body: [7, 7, 22, 22, 12, 12, 25, 25, 21, 21, 23, 23, 23, 23, 23, 23, 23],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 182, blbh: 92, blbx: -40, blby: -35, bsc: .5, blba: .9, c: 9, atc1: '#72bfd7', atc2: '#95cce1'},
        extras: false,
        image: {id: 'NziesKN'}
    }, {//#20
        body: [7, 7, 7, 9, 9, 7, 7],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 180, blbh: 135, blbx: -5, blby: -65.5, bsc: .25, blba: 1, c: 9, atc1: '#000', atc2: '#df3737'},
        extras: false,
        image: {id: 'GMwoFn5'}
    }, {//#21
        body: [25, 25, 25, 9, 9, 25, 25],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 180, blbh: 49, blbx: -5, blby: -24.5, bsc: .4, blba: 1, c: 6, atc1: '#002828', atc2: '#35ac3f'},
        extras: false,
        image: {id: '3VS5PN0'}
    }, {//#22
        body: [23, 23, 23, 23, 23, 23, 23, 23, 23, 9, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 84, blbh: 70, blbx: -6, blby: -35, bsc: .45, blba: .9, c: 7, atc1: '#002828', atc2: '#80d0d0'},
        extras: {eac: !0, jyt: !0, one_eye: 0, swell: 0},
        image: {id: 'IfKbqIo'}
    }, {//#23
        body: [11],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 300, blbh: 27, blbx: -6, blby: -13.5, bsc: .4, blba: .9, c: 2, atc1: '#000', atc2: '#989898', pr: 2, er: 4.5, ppc: "red", ec: "#000"},
        extras: false,
        image: {id: 't0hnQ4u'}
    }, {//#24
        body: [27, 27, 28, 28],
        bulb: false,
        extras: false,
        image: {id: 't0hnQ4u'}
    }, {//#25
        body: [34],
        bulb: {pr: 3, er: 4.5, ppc: "red", ec: "#000", eca: 0.75},
        extras: false,
        image: false
    },{//#26
        body: [9, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 200, blbh: 185, blbx: -65, blby: -91.5, bsc: .25, blba: 1, c: 2, atc1: 'transparent', atc2: 'transparent', pr: 3, ppc: "#00BCD4"},
        extras: false,
        image: {id: 'mtixu7l'}
    },{//#27
        body: [9, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 200, blbh: 185, blbx: -65, blby: -91.5, bsc: .25, blba: 1, c: 2, atc1: 'transparent', atc2: 'transparent', pr: 3, ppc: "#00964a"},
        extras: false,
        image: {id: 'UYU1gdO'}
    },{//#28
        body: [18, 18, 18, 18, 18, 18, 5, 5, 18, 18, 18, 18, 18, 18, 5, 5],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 98, blbh: 108, blbx: -70, blby: -54, bsc: .5, blba: 1, c: 2, atc1: 'transparent', atc2: 'transparent', pr: 0, er: 0},
        extras: false,
        image: {id: '6m0B6iJ'}
    },{//#29
        body: [5],
        bulb: {abrot: !0,atba: 0,antenna: !0, blbw: 346, blbh: 346, blbx: -270, blby: -173, bsc: .5, blba: 1, c: 2, atc1: 'transparent', atc2: 'transparent', pr: 3, ppc: "#03A9F4"},
        extras: false,
        image: {id: 'GXS1Stg'}
    }],
    older: {},   
    addskins: function() {
        if (customSkins.check(window.max_skin_cv) && customSkins.check(window.setSkin)) {
            window.setSkin = (function() {
                var maxSkins = window.max_skin_cv;
                var f_setSkin = window.setSkin;
                window.max_skin_cv += customSkins.skins.length;
                return function(snake, id) {
                    f_setSkin(snake, id);
                    if (id > maxSkins) {
                        var colors = null;
                        var idCurrent = id - maxSkins - 1;
                        ((customSkins.check(customSkins.skins[idCurrent]) ? (colors = customSkins.skins[idCurrent].body) : (id %= 9)), (colors && (id = colors[0])));
                        if (idCurrent in customSkins.skins && customSkins.skins[idCurrent].bulb) {
                            if(customSkins.skins[idCurrent].image){
                                if(!(idCurrent in customSkins.older)){
                                    var bulb = new Image;
                                    bulb.crossOrigin = 'anonymous';
                                    bulb.src = 'http://i.imgur.com/'+customSkins.skins[idCurrent].image.id+'.png';
                                    customSkins.older[idCurrent] = bulb;                                    
                                }
                                snake.bulb = customSkins.older[idCurrent];
                            }
                            for (key in customSkins.skins[idCurrent].bulb) {
                                snake[key] = customSkins.skins[idCurrent].bulb[key];
                            }                           
                            c = customSkins.skins[idCurrent].bulb.c;
                            snake.atx = new Float32Array(c);
                            snake.aty = new Float32Array(c);
                            snake.atvx = new Float32Array(c);
                            snake.atvy = new Float32Array(c);
                            snake.atax = new Float32Array(c);
                            snake.atay = new Float32Array(c);
                            for (--c; 0 <= c; c--) {
                                snake.atx[c] = snake.xx;
                                snake.aty[c] = snake.yy;
                            }
                        }
                        if (idCurrent in customSkins.skins && customSkins.skins[idCurrent].extras) {
                            for (key in customSkins.skins[idCurrent].extras) {
                                snake[key] = customSkins.skins[idCurrent].extras[key];
                            }
                        }
                        snake.rbcs = colors;
                        snake.cv = id;
                    }
                };
            })();
        } else {
            window.setTimeout(customSkins.addskins, 50);
        }
    },
    check: function(variable) {
        return (variable !== undefined && variable !== null ? true : false);
    }
};
customSkins.addskins(); 
window.onresize = us.onresize;
window.loop = function() {
    if (window.playing && ai.isBotEnabled) {
        ai.ranOnce = true;
        ai.thinkAboutGoals();
    } else {
        ai.stopBot();
    }
};

jQuery(document).ready(function($) {
    us.loadPreference('autoRespawn', false);
    us.loadPreference('visualDebugging', false);
    us.loadPreference('collisionRadiusMultiplier', 15);    
    us.oefTimer();
    var stylefull = 'position: fixed;top: 5px; z-index: 50; left: 5px;';
    appendDiv('fullscreen','fullscreen', stylefull);
    window.fullscreen.innerHTML = '<img style="background: #fff; padding: 0 5px; border-radius: 5px; opacity: 0.5;cursor:pointer;" onclick="fullScreen()" width="45" height="35" id="btn-fullscreen" src="http://slither-io.com/chrome/images/fullscreen.png">';
    $(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        if(!state){
           $('#fullscreen').show(); 
        }    
    });     
});

function zoom(e) {
    if (!window.gsc) {
        return;
    }
    e.preventDefault();
    window.lvz *= Math.pow(0.93, e.wheelDelta / -120 || e.detail / 2 || 0);
    window.lvz > 2 ? window.lvz = 2 : window.lvz < 0.1 ? window.lvz = 0.1 : null;
    window.gsc = window.lvz;
}

function zoomByKey(key) {
    var fzoom = key ? -2 : 2;
    window.lvz *= Math.pow(0.9, fzoom);
    window.lvz > 2 ? window.lvz = 2 : window.lvz < 0.1 ? window.lvz = 0.1 : null;
}

window.aef = window.oef;
window.oef = function() {
    window.aef();
    if (snake) {
        window.gsc = window.lvz;
    } else {
        window.lvz = window.sgsc;
    }
};

function init() {
    appendDiv("position-hud", "nsi", styleHUD + "right: 30; bottom: 120px;");
    appendDiv("ip-hud", "nsi", styleHUD + "right: 30; bottom: 140px;");
    appendDiv("score-hud", "nsi", styleHUD + "right: 30; bottom: 180px;");
    appendDiv("fps-hud", "nsi", styleHUD + "right: 30; bottom: 160px;");
    appendDiv("title-hud", "nsi", "position: fixed; left: -20px; bottom: 4px; text-align: center; width: 255px; height: 28px; color: rgb(255, 255, 255); font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; overflow: hidden; opacity: 0.8; z-index: 7; display: inline; cursor: default; transform: translateZ(0px);");
    positionHUD = document.getElementById("position-hud");
    ipHUD = document.getElementById("ip-hud");
    fpsHUD = document.getElementById("fps-hud");
    bestscoreHUD = document.getElementById("score-hud");
    titleHUD = document.getElementById("title-hud");
    titleHUD.textContent = "Mod by Slither-io.com";
    titleHUD.style.color = "#8D51F6";
    titleHUD.style.textShadow = "0 1px 1px";
    titleHUD.style.textShadow = "0 1px 1px #000";
    titleHUD.style.fontWeight = "bold";
    if (/firefox/i.test(navigator.userAgent)) {
        document.addEventListener("DOMMouseScroll", zoom, false);
    } else {
        document.body.onmousewheel = zoom;
    }
    window.lvz = window.sgsc;
    window.onkeydown = function(e) {
        if(window.playing){
            switch (e.keyCode) {
                case 9:
                    e.preventDefault();
                    positionHUD.style.display = positionHUD.style.display == "none" ? positionHUD.style.display = null : positionHUD.style.display = "none";
                    ipHUD.style.display = ipHUD.style.display == "none" ? ipHUD.style.display = null : ipHUD.style.display = "none";
                    fpsHUD.style.display = fpsHUD.style.display == "none" ? fpsHUD.style.display = null : fpsHUD.style.display = "none";
                    bestscoreHUD.style.display = bestscoreHUD.style.display == "none" ? bestscoreHUD.style.display = null : bestscoreHUD.style.display = "none";
                    break;
                case 80:
                    forceConnect();
                    break;
                case 81:
                    gameOver();
                    break;
                case 88:
                    gsc = 0.9;
                    window.lvz = 0.9;
                    break;
                case 90:
                    changeSkin();
                    break;
                case 87:
                    toggleSkin();
                    break;
                case 70:
                    if (f === true) {
                        f = false;
                    } else {
                        f = true;
                    }
                    foodInterval();
                    break;
                case 71:
                    if (colorfood >= 7) {
                        colorfood = 0;
                    }
                    colorfood = colorfood + 1;
                    break;
                case 72:
                    if (sizee >= 20) {
                        sizee = 0;
                    }
                    sizee = sizee + 2;
                    break;
                case 74:
                    if (crazie === true) {
                        crazie = false;
                    } else {
                        crazie = true;
                    }
                    break;
                case 16:
                    setAcceleration(true);
                    break;
                case 77://M
                    zoomByKey(false);
                    zoom(e);
                    break;
                case 78://N
                    zoomByKey(true);
                    zoom(e);
                    break;
                case 49:
                    insertFitout('oneeye'); //1
                    break;
                case 50:
                    insertFitout('argo'); //2
                    break;
                case 51:
                    insertFitout('magnet'); //3
                    break;
                case 52:
                    insertFitout('kiwi'); //4
                    break;
                case 53:
                    insertFitout('punch'); //5
                    break;
                case 54:
                    insertFitout('smile'); //6
                    break;
                case 55:
                    insertFitout('snail'); //7
                    break;
                case 56:
                    insertFitout('store'); //8
                    break;
                case 57:
                    insertFitout('reddit'); //9
                    break;
                case 66:
                    showHelp(true);
                    break;
                case 83:
                    hideShortcode();
                    break;
            }
            //Script bots
            if (e.keyCode === 84) {
                ai.isBotEnabled = !ai.isBotEnabled;
            }                
            if (e.keyCode === 82) {
                window.autoRespawn = !window.autoRespawn;                    
                us.savePreference('autoRespawn', window.autoRespawn);
            }
            /*if (e.keyCode === 65) {
                window.collisionRadiusMultiplier++;                    
                us.savePreference('collisionRadiusMultiplier', window.collisionRadiusMultiplier);
            }
            if (e.keyCode === 83) {
                if (window.collisionRadiusMultiplier > 1) {
                    window.collisionRadiusMultiplier--;                        
                    us.savePreference('collisionRadiusMultiplier', window.collisionRadiusMultiplier);
                }
            }
            if (e.keyCode === 89) {
                window.visualDebugging = !window.visualDebugging;
                us.savePreference('visualDebugging', window.visualDebugging);
            }*/
        }
    }
    window.onkeyup = function(e) {
        switch (e.keyCode) {
            case 16:
                setAcceleration(false);
                break;
            case 66:
                showHelp(false);
                break;
        }
    }
    setLogoMenu();
    loadBoard();
    setGPU();
    updateLoop();
    loadFPS();
    localStorage.edttsg = "1";    
}

function appendDiv(id, className, style) {
    var div = document.createElement("div");
    if (id) {
        div.id = id;
    }
    if (className) {
        div.className = className;
    }
    if (style) {
        div.style = style;
    }
    document.body.appendChild(div);
}

function appendDiv2(id, className, style){
    var div = document.createElement('div');
    if (id) div.id = id;
    if (className) div.className = className;
    if (style) div.style = style;
    window.bots_menu_options.appendChild(div);
}

function changeSkin() {
    if (window.playing && window.snake != null) {
        var skin = window.snake.rcv;
        skin++;
        if (skin > window.max_skin_cv) {
            skin = 0;
        }
        window.setSkin(window.snake, skin);
        resetTogg();
    }
}

function setLogoMenu() {
    var login = document.getElementById("login");
    if (login) {
        loadOptions();
        document.getElementById("nick").value = "Slither-io dot com";
        document.getElementById("nick_holder").style.marginTop = "10px";
        document.getElementById("playh").firstChild.style.marginBottom = "10px";
        document.getElementById("login").style.marginTop = "30px";
        document.getElementById("logo").style.marginTop = "0px";
        document.getElementById("lastscore").style.marginTop = "20px";
        jQuery('#login').append('');
        jQuery('#login').append('<div style="box-shadow: #000 0px 6px 50px;width: 700px;color: rgb(128, 88, 208);border-radius: 10px;font-family: Arial;font-size: 13px;text-align: center;margin: 10px auto 10px;line-height: 16px;text-shadow: #000000 0px 1px 1px;background: rgba(43, 43, 43, 0.5);padding:25px;"><div style="width: 700px; color: rgb(133, 249, 174); font-family: Arial; font-size: 13px; text-align: center; opacity: 2; margin: 0px auto; padding: 5px 0px; line-height: 22px; text-shadow: rgb(0, 0, 0) 0px 1px 1px;"><b style="color:#FF9800">S</b> - Show/Hide Shortcode | <b style="color:#FF9800">P</b> - Respawn | <b style="color:#FF9800">Q</b> - Die | <b style="color:#FF9800">X</b> - Reset Zoom | <b style="color:#FF9800">SHIFT</b> - Boost | <b style="color:#FF9800">TAB</b> - Toggle HUD</div>Update newest features, latest news, the best tips &amp; tricks at <a style="color:#8058D0;"target="_blank"href="http://www.slither-io.com">slither-io.com</a><br><span style="color:#D61F12;">Make sure you DELETE/DISABLE any other slither.io userscipts/extensions first!</span><div class="row" style="margin-top:15px;"><div class="col-xs-6 col-md-4"style="text-align:left;font-weight: bold;padding-right:0;"><div style="border-radius: 4px;padding:5px 0px;"><select id="select-srv"class="form-control"style="color:#E91E63;"><option value="">Select server to play</option></select></div><div style="border-radius: 4px;padding:5px 0px;"><select id="select-graph"class="form-control"style="color: #008605;"><option value="3">Graphic Quality:Normal</option><option value="2">Graphic Quality:Optimized</option><option value="1">Graphic Quality:Low</option></select></div><div style="border-radius: 4px;padding:5px 0px;"><select id="bg-value"class="form-control"style="color: #FF5722;"><option value="1">Background:Default</option><option value="2">Background:Custom(URL)</option><option value="3">Background:White grid</option><option value="4">Background:Black grid</option><option value="5">Background:None(Black)</option><option value="6">Background:Cats</option><option value="7">Background:Dirt</option><option value="8">Background:Grass</option><option value="9">Background:Grid</option><option value="10">Background:Magma</option><option value="11">Background:Stonewall</option><option value="12">Background:Wood</option></select></div><div style="line-height: 20px;text-align: center;"><a href="http://www.slither-io.com"target="_blank"style="color:#85f9ae;opacity:2;text-decoration:none;">Visit Slither-io.com</a><br/>Version: '+version+'<br/><a style="color:#85f9ae;opacity:2;text-decoration:none;"href="https://chrome.google.com/webstore/detail/slitherio-mods-zoom-unloc/eogeabecipmckmihpmkgjbghbffcebcf/reviews"target="_blank">Rating for Slither.io Mods</a></div></div><div class="col-xs-12 col-md-8"><div style="color: rgb(128, 88, 208); border-radius: 4px; margin: 5px auto; padding: 5px 2px; background-color: rgb(255, 255, 255); padding-bottom: 10px;"><div><input id="partycode"type="text"placeholder="Enter Party Code Here"class="form-control"style="font-weight:bold;color: #E91E63;margin:5px auto; width: 80%;text-align: center;"></div><input id="create-party"type="button"value="Create Party"class="btn btn-success"style="padding: 4px 10px;"> <input id="connect-party"type="button"value="Join Party"class="btn btn-danger"style="padding: 4px 10px;"></div><div class="form-inline"style="padding: 5px;color: rgb(128, 88, 208); border-radius: 4px; margin: 5px auto; background-color: rgb(255, 255, 255);"><input id="ip-server"type="text"placeholder="Enter Server IP Here"class="form-control"style="color:#2196F3;text-align:center;"> <input id="connect-btn"type="button"value="Play With IP"class="btn btn-primary"style="padding:6px 10px;"></div><div style="border-radius: 4px; margin: 5px auto; padding: 5px 2px; background-color: rgb(255, 255, 255);"><input type="file"accept="image/*"id="fileinput"style="display: inline-block;"><input id="setbg-btn"type="button"value="Set BG"onclick="localImage();"class="btn btn-info"style="padding: 4px 10px;"></div><div>Browse your file image(559x519),then press[Set BG]</div></div></div></div>');
        var textBox = document.getElementById("partycode");
        var textBox2 = document.getElementById("ip-server");
        textBox.onfocus = function() {
            textBox.select();            
        };
        textBox2.onfocus = function() {
            textBox2.select();            
        };
        inpIP = document.getElementById("ip-server");
        var nick = document.getElementById("nick");
        nick.addEventListener("input", setNickname, false);
        var connectBtn = document.getElementById("connect-btn");
        var createpartyBtn = document.getElementById("create-party");
        //createpartyBtn.onclick = createParty;
        var joinpartyBtn = document.getElementById("connect-party");
        //joinpartyBtn.onclick = joinParty;
        document.getElementById("create-party").addEventListener('click', function(){showBotcontrol();});
        connectBtn.onclick = forceConnect;
        listServer();
        var selectGraph = document.getElementById("select-graph");
        if (renderMode == 1) {
            selectGraph.selectedIndex = 2;
        } else if (renderMode == 2) {
            selectGraph.selectedIndex = 1;
        } else {
            selectGraph.selectedIndex = 0;
            normalRender = true;
        }
        selectGraph.onchange = function() {
            var mode = selectGraph.value;
            if (mode) {
                renderMode = mode;
                localStorage.setItem("rendermode", renderMode);
            }
        };
        var bgGraph = document.getElementById("bg-value");
        bgGraph.onchange = function() {
            var bg = parseInt(bgGraph.value);
            switch (bg) {
                case 1:
                    ii.src = "http://slither.io/s/bg45.jpg";
                    break;
                case 2:
                    ii.src = prompt("Enter url image (559x519px)")
                    break;
                case 3:
                    ii.src = "http://www.slither-io.com/chrome/images/whitegrid.png";
                    break;
                case 4:
                    ii.src = "http://www.slither-io.com/chrome/images/blackgrid.png";
                    break;
                case 5:
                    ii.src = "http://www.slither-io.com/chrome/images/black.png";
                    break;
                case 6:
                    ii.src = "http://www.slither-io.com/chrome/images/carts.jpg";
                    break;
                case 7:
                    ii.src = "http://www.slither-io.com/chrome/images/dirt.jpg";
                    break;
                case 8:
                    ii.src = "http://www.slither-io.com/chrome/images/grass.jpg";
                    break;
                case 9:
                    ii.src = "http://www.slither-io.com/chrome/images/grid.jpg";
                    break;
                case 10:
                    ii.src = "http://www.slither-io.com/chrome/images/magma.jpg";
                    break;
                case 11:
                    ii.src = "http://www.slither-io.com/chrome/images/stonewall.jpg";
                    break;
                case 12:
                    ii.src = "http://www.slither-io.com/chrome/images/wood.jpg";
                    break;
            }
        };        
        jQuery('body').append('<div id="bots_menu_options" style="position:fixed;top:120px;z-index:7;left:5px;"></div>');
        window.generalstyle = 'color: #FFF; font-family: Consolas, Verdana; font-size: 13px;';
        appendDiv2('txt_currentparty', 'nsi', window.generalstyle);
        appendDiv2('botstatus_overlay', 'nsi', window.generalstyle);
        //appendDiv2('visualDebugging_overlay', 'nsi', window.generalstyle);
        //appendDiv2('collision_radius_multiplier_overlay', 'nsi', window.generalstyle);  
        appendDiv2('autorespawn_overlay', 'nsi', window.generalstyle);
        appendDiv2('txt_oneeye', 'nsi', window.generalstyle);
        appendDiv2('txt_pointcircle', 'nsi', window.generalstyle);    
        appendDiv2('txt_magnet', 'nsi', window.generalstyle);
        appendDiv2('txt_kiwi', 'nsi', window.generalstyle);
        appendDiv2('txt_punch', 'nsi', window.generalstyle);
        appendDiv2('txt_smile', 'nsi', window.generalstyle);
        appendDiv2('txt_snail', 'nsi', window.generalstyle);
        appendDiv2('txt_store', 'nsi', window.generalstyle);
        appendDiv2('txt_reddit', 'nsi', window.generalstyle);
        appendDiv2('txt_showhelp', 'nsi', window.generalstyle);
        appendDiv2('txt_changeskin', 'nsi', window.generalstyle);
        appendDiv2('txt_reset', 'nsi', window.generalstyle);
        appendDiv2('txt_zoomkey', 'nsi', window.generalstyle);
        appendDiv2('txt_hide_menu', 'nsi', window.generalstyle);
        resizeScreen();
        divHelp();
        $('#playh').insertAfter('#nick_holder');
        $('#playh').css({
            'display': 'inline-flex',
            'margin-left': '5px'
        });
        $('#select-srv').change(function() {
            $('input#connect-btn').css(
                'box-shadow', '0 0 10px 4px #e00404'
            );
            setTimeout(function() {
                $('input#connect-btn').css(
                    'box-shadow', '0 0 0px 0px #e00404'
                )
            }, 300);
        });
        jQuery('#tips').remove();
        jQuery('#lastscore').css('margin-top','0px');
        cskh.style.bottom = "45px";
        cskh.style.display = "inline";
        cstx.style.display = "none";
        clq.style.width = "320px";
        clq.innerHTML = "<a class='lq2' href='https://www.google.com/chrome/browser/desktop/index.html' target='_blank'>Update lastest Chrome version, when have problem</a>";
    } else {
        setTimeout(setLogoMenu, 100);
    }
}
function hideShortcode(){     
    shortmenu ? shortmenu = false : shortmenu = true;
}

function loadOptions() {
    if (window.localStorage.getItem("nick") != null) {
        var nick = window.localStorage.getItem("nick");
        document.getElementById("nick").value = nick;
    }
    if (window.localStorage.getItem("rendermode") != null) {
        var mode = parseInt(window.localStorage.getItem("rendermode"));
        if (mode >= 1 && mode <= 3) {
            renderMode = mode;
        }
    }
    if (window.localStorage.getItem("highscore") != null) {
        var score = parseInt(window.localStorage.getItem("highscore"));
        if (score > 0) {
            highScore = score;
        }
    }
    if (window.resetGame) {
        window.resetOld = window.resetGame;
        window.resetGame = function() {
            if (snake != null) {
                var score = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10;
                if (score > highScore) {
                    highScore = score;
                    window.localStorage.setItem("highscore", highScore);
                }
            }
            window.resetOld();
        };
    }
}

function setNickname() {
    var nick = document.getElementById("nick").value;
    window.localStorage.setItem("nick", nick);
}

function showHelp(show) {
    if (show) {
        jQuery('div#menu-help').fadeIn(100);
    } else {
        jQuery('div#menu-help').fadeOut(100);
    }
}

function divHelp() {
    var div = document.createElement('div');
    div.id = 'menu-help';
    div.style.width = "700px";
    div.style.color = "#85f9ae";
    div.style.fontFamily = "'Arial'";
    div.style.fontSize = "13px";
    div.style.textAlign = "center";
    div.style.opacity = "1";
    div.style.zIndex = "1000";
    div.style.display = "none";
    div.style.margin = "0 auto";
    div.style.padding = "5px 0";
    div.style.position = "fixed";
    div.style.top = "150px";
    div.style.left = "calc(50% - 350px)";
    div.style.lineHeight = "22px";
    div.style.textShadow = "0px 1px 1px #000";
    div.innerHTML = "<b style='color:#FF9800'>S</b> - Show/Hide Shortcode | <b style='color:#FF9800'>P</b> - Respawn | <b style='color:#FF9800'>Q</b> - Die | <b style='color:#FF9800'>X</b> - Reset Zoom | <b style='color:#FF9800'>SHIFT</b> - Boost | <b style='color:#FF9800'>TAB</b> - Toggle HUD | <b style='color:#FF9800'>W</b> - Toggle Skin Rotator<br/><b style='color:#FF9800'>T</b> - Enable Bot | <b style='color:#FF9800'>Z</b> - Next Skin | <b style='color:#FF9800'>F</b> - Toggle Food | <b style='color:#FF9800'>G</b> - Food Color | <b style='color:#FF9800'>H</b> - Food Size | <b style='color:#FF9800'>J</b> - Food Crazy";
    jQuery('body').append(div);
}

function connectionStatus() {
    if (!window.connecting || retry == 10) {
        window.forcing = false;
        retry = 0;
        return;
    }
    retry++;
    setTimeout(connectionStatus, 1000);
}

function forceConnect() {
    if (inpIP.value.length == 0 || !window.connect) {
        return;
    }   
    window.forcing = true;
    if (!window.bso) {
        window.bso = {};
    }
    if (jQuery('canvas').eq(1).css('display') != 'none') {
        jQuery('canvas').eq(1).css('display', 'none');
    }
    var srv = inpIP.value.trim().split(":");
    window.bso.ip = srv[0];
    window.bso.po = srv[1];
    window.connect();
    loadSkin();
    setTimeout(connectionStatus, 1000);
}

function loadBestscore() {
    if (!window.snake || !window.fpsls || !window.fmlts) {
        return;
    }
    if (bestscoreHUD && highScore > 0) {
        bestscoreHUD.textContent = "Best length: " + highScore;
    }
}

function listServer() {
    if (window.sos && window.sos.length > 0) {
        var selectSrv = document.getElementById("select-srv");
        for (var i = 0; i < sos.length; i++) {
            var srv = sos[i];
            var option = document.createElement("option");
            option.value = srv.ip + ":" + srv.po;
            option.text = (i + 1) + ". " + option.value;
            selectSrv.appendChild(option);
        }
        selectSrv.onchange = function() {
            var srv = selectSrv.value;
            inpIP.value = srv;
        };
    } else {
        setTimeout(listServer, 100);
    }
}

function resizeScreen() {
    if (window.resize) {
        window.lww = 0;
        window.wsu = 0;
        window.resize();
        var wh = Math.ceil(window.innerHeight);
        if (wh < 800) {
            var login = document.getElementById("login");
            window.lgbsc = wh / 800;
            login.style.top = -50 + "px";
            if (window.trf) {
                window.trf(login, "scale(" + window.lgbsc + "," + window.lgbsc + ")");
            }
        }
    } else {
        setTimeout(resizeScreen, 100);
    }
}

function loadBoard() {
    if (window.lbh) {
        window.lbh.textContent = "Mods by Slither-io.com";
        window.lbh.style.fontSize = "20px";
    } else {
        setTimeout(loadBoard, 100);
    }
    if (window.lbf) {
        window.lbf.style.bottom = null;
        window.lbf.style.left = null;
        window.lbf.style.textAlign = "right";
        window.lbf.style.right = "30px";
        window.lbf.style.bottom = "200px";
    } else {
        setTimeout(loadBoard, 100);
    }
}

function setNormalMode() {
    normalRender = true;
    window.ggbg = true;
    if (!window.bgp2 && bgImage) {
        window.bgp2 = bgImage;
    }
    window.render_mode = 2;
}

function setGPU() {
    if (renderMode == 3) {
        if (!normalRender) {
            setNormalMode();
        }
        return;
    }
    if (normalRender) {
        normalRender = false;
    }
    if (window.want_quality && window.want_quality != 0) {
        window.want_quality = 0;
        window.localStorage.setItem("qual", "0");
        window.grqi.src = "/s/lowquality.png";
    }
    if (window.ggbg && window.gbgmc) {
        window.ggbg = false;
    }
    if (window.high_quality) {
        window.high_quality = false;
    }
    if (window.gla && window.gla != 0) {
        window.gla = 0;
    }
    if (window.render_mode && window.render_mode != renderMode) {
        window.render_mode = renderMode;
    }
}

function loadFPS() {
    if (window.playing && fpsHUD && window.fps && window.lrd_mtm) {
        if (Date.now() - window.lrd_mtm > 970) {
            fpsHUD.textContent = "FPS: " + window.fps;
        }
    }
    if (window.ws == null || shortmenu == false) {
        jQuery('#bots_menu_options').css('display', 'none');
    } else {
        updateOptions();
        jQuery('#bots_menu_options').css('display', 'inherit');
    }
    setTimeout(loadFPS, 50);
}

function updateLoop() {
    setGPU();
    loadBestscore();
    if (window.playing) {
        if (positionHUD) {
            positionHUD.textContent = "X: " + (~~window.view_xx || 0) + " Y: " + (~~window.view_yy || 0);
        }
        if (inpIP && window.bso) {
            currentIP = window.bso.ip + ":" + window.bso.po;
            inpIP.value = currentIP;
            if (ipHUD) {
                ipHUD.textContent = "IP: " + currentIP;
            }
        }
    }
    setTimeout(updateLoop, 1000);
}

function fullScreen(){    
    var elem = document.getElementsByTagName('html')[0];
    if (elem.requestFullscreen){
        elem.requestFullscreen();        
    }else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } 
    $('#fullscreen').hide();
    
}

function gameOver() {
    if (window.playing){
        playparty = false;
        window.want_close_socket = -1;
        window.dead_mtm = Date.now() - 5E3;
        window.ws.close();
        window.ws = null;
        window.playing = !1;
        window.connected = !1;
        window.resetGame();
        window.play_btn.setEnabled(!0);
    }
}

function foodInterval() {
    skinLoop = setInterval(function() {
        if (f === true && colorfood != 7 && crazie !== true) {
            newFood(3, snake.xx, snake.yy, sizee, 5, colorfood);
        } else if (f === true && colorfood == 7 && crazie !== true) {
            newFood(3, snake.xx, snake.yy, sizee, 5, Math.floor(Math.random() * 7) + 1);
        } else if (f === true && crazie === true) {
            newFood(3, snake.xx, snake.yy, Math.floor(Math.random() * 20) + 1, 5, Math.floor(Math.random() * 7) + 1);
        }
    }, 100);
}

function toggleSkin() {
    if (loopSkin == false) {
        loopSkin = true;
        skinLoop = setInterval(function() {
            if (nextSkin > window.max_skin_cv) {
                nextSkin = 0;
            }
            if (snake !== null) {
                setSkin(snake, nextSkin);
                nextSkin++;
            }
        }, 400);
    } else {
        loopSkin = false;
        clearInterval(skinLoop);
        skinLoop = null;
    }
}
init();

var toggEye = false;
var toggArgo = false;
var toggMag = false;
var toggKiw = false;
var toggPunch = false;
var toggSmile = false;
var toggSnail = false;
var toggStore = false;
var toggRed = false;

function resetTogg(){
    toggEye = false;
    toggArgo = false;
    toggMag = false;
    toggKiw = false;
    toggPunch = false;
    toggSmile = false;
    toggSnail = false;
    toggStore = false;
    toggRed = false;
}
function resetCustom(){    
    snake.ec = "#fff";
    snake.ppc = "#000";
    snake.ppa = 1;
    toggRed = false;
}

function flagTogg(result){
    toggArgo = result;
    toggMag = result;
    toggKiw = result;
    toggPunch = result;
    toggStore = result;
    toggRed = result;
}
function eyeTogg(result){
    snake.ed = 6;
    snake.esp = 6;
    snake.eca = 0.75;
    snake.eo = 0;
    snake.er = 6;
    snake.easp = .1;
    snake.pr = 3.5;
    snake.pma = 2.3;
    snake.slg = 0;
    snake.eac = 0;
    snake.jyt = 0;
    toggSnail = result;
    toggEye = result;
    toggSmile = result;
}

function insertFitout(fitout){
    resetCustom();
    if(fitout == 'oneeye'){
        if(!toggEye){
            eyeTogg(false);
            snake.one_eye = !0;
            snake.ebi = jsebi;
            snake.ebiw = 64;
            snake.ebih = 64;
            snake.ebisz = 29;
            snake.epi = jsepi;
            snake.epiw = 48;
            snake.epih = 48;
            snake.episz = 14;
            snake.pma = 4;
            snake.swell = .06;
            toggEye = true;
            toggSmile = false;
            toggSnail = false;
        }
        else{
            snake.one_eye = 0;      
            snake.swell = 0;
            toggEye = false;
        }
    }
    if(fitout == 'reddit'){//Flag
        if(!toggRed){
            flagTogg(false);
            eyeTogg(false);
            window.setSkin(window.snake, 19);
            var redbulb = document.createElement("canvas");
            redbulb.width = redbulb.height = 34;
            ctx = redbulb.getContext("2d");
            g = ctx.createRadialGradient(17, 17, 1, 17, 17, 16);
            g.addColorStop(0, "rgba(255, 255, 255, 1)");
            g.addColorStop(.83, "rgba(150,150,150, 1)");
            g.addColorStop(.84, "rgba(80,80,80, 1)");
            g.addColorStop(.99, "rgba(80,80,80, 1)");
            g.addColorStop(1, "rgba(80,80,80, 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, 34, 34);
            snake.ec = "#ee5500";
            snake.atc1 = "#000";
            snake.atc2 = "#fff";
            snake.er = 4.5;
            snake.ppa = 0;
            snake.antenna = !0;
            var b = 8;
            snake.atx = new Float32Array(b);
            snake.aty = new Float32Array(b);
            snake.atvx = new Float32Array(b);
            snake.atvy = new Float32Array(b);
            snake.atax = new Float32Array(b);
            snake.atay = new Float32Array(b);
            for (--b; 0 <= b; b--) snake.atx[b] = snake.xx, snake.aty[b] = snake.yy;
            snake.bulb = redbulb;
            snake.blbx = -10;
            snake.blby = -10;
            snake.blbw = 20;
            snake.blbh = 20;
            snake.bsc = 1;
            snake.blba = .9;            
            toggRed = true;
        }else{
            snake.antenna = 0;
            toggRed = false;
        }
    }
    if(fitout == 'argo'){//Flag
        if(!toggArgo){
            flagTogg(false);
            snake.antenna = !0;
            snake.atba = 0;
            snake.atc1 = "#00688c";
            snake.atc2 = "#64c8e7";
            snake.atwg = !0;
            snake.atia = .35;
            snake.abrot = !1;
            var b = 18;
            snake.atx = new Float32Array(b);
            snake.aty = new Float32Array(b);
            snake.atvx = new Float32Array(b);
            snake.atvy = new Float32Array(b);
            snake.atax = new Float32Array(b);
            snake.atay = new Float32Array(b);
            for (--b; 0 <= b; b--) snake.atx[b] = snake.xx, snake.aty[b] = snake.yy;
            snake.bulb = acbulb;
            snake.blbx = -10;
            snake.blby = -10;
            snake.blbw = 20;
            snake.blbh = 20;
            snake.bsc = 1;
            snake.blba = .9;            
            toggArgo = true;
        }else{
            snake.antenna = 0;
            toggArgo = false;
        }
    }
    if(fitout == 'magnet'){//Flag
        if(!toggMag){
            flagTogg(false);
            snake.ec = "#ff5609";
            snake.eca = 1;
            snake.antenna = !0;
            snake.atba = 0;
            snake.atc1 = "#000000";
            snake.atc2 = "#5630d7";
            snake.atia = 1;
            snake.abrot = !0;
            b = 18;
            snake.atx = new Float32Array(b);
            snake.aty = new Float32Array(b);
            snake.atvx = new Float32Array(b);
            snake.atvy = new Float32Array(b);
            snake.atax = new Float32Array(b);
            snake.atay = new Float32Array(b);
            for (--b; 0 <= b; b--) snake.atx[b] = snake.xx, snake.aty[b] = snake.yy;
            snake.bulb = cdbulb;
            snake.blbx = -5;
            snake.blby = -10;
            snake.blbw = 20;
            snake.blbh = 20;
            snake.bsc = 1.6;
            snake.blba = 1;            
            toggMag = true;
        }else{
            snake.ec = "#fff";
            snake.antenna = 0;
            toggMag = false;
        }
    }
    if(fitout == 'kiwi'){//Flag
        if(!toggKiw){
            flagTogg(false);
            snake.eca = 1;
            snake.antenna = !0;
            snake.atba = 0;
            snake.atc1 = "#301400";
            snake.atc2 = "#ff6813";
            snake.atwg = !0;
            snake.atia = .5;
            snake.abrot = !0;
            c = 9;
            snake.atx = new Float32Array(c);
            snake.aty = new Float32Array(c);
            snake.atvx = new Float32Array(c);
            snake.atvy = new Float32Array(c);
            snake.atax = new Float32Array(c);
            snake.atay = new Float32Array(c);
            for (--c; 0 <= c; c--) snake.atx[c] = snake.xx, snake.aty[c] = snake.yy;
            snake.bulb = kwkbulb;
            snake.blbx = -39;
            snake.blby = -63;
            snake.blbw = 172;
            snake.blbh = 113;
            snake.bsc = .42;
            snake.blba = 1;            
            toggKiw = true;
        }else{
            snake.antenna = 0;
            toggKiw = false;
        }
    }
    if(fitout == 'punch'){//Flag
        if(!toggPunch){
            flagTogg(false);
            snake.eca = 1;
            snake.antenna = !0;
            snake.atba = 0;
            snake.atc1 = "#1d3245";
            snake.atc2 = "#44d4ff";
            snake.atwg = !0;
            snake.atia = .43;
            snake.abrot = !0;
            c = 12;
            snake.atx = new Float32Array(c);
            snake.aty = new Float32Array(c);
            snake.atvx = new Float32Array(c);
            snake.atvy = new Float32Array(c);
            snake.atax = new Float32Array(c);
            snake.atay = new Float32Array(c);
            for (--c; 0 <= c; c--) snake.atx[c] = snake.xx, snake.aty[c] = snake.yy;
            snake.bulb = pwdbulb;
            snake.blbx = -36;
            snake.blby = -100;
            snake.blbw = 190;
            snake.blbh = 188;
            snake.bsc = .25;
            snake.blba = 1;            
            toggPunch = true;
        }else{
            snake.antenna = 0;
            toggPunch = false;
        }
    }
    if(fitout == 'smile'){
        if(!toggSmile){
            eyeTogg(false);
            snake.eac = !0;
            snake.jyt = !0;
            snake.one_eye = 0;      
            snake.swell = 0;            
            toggSmile = true;
            toggSnail = false;
            toggEye = false;
        }else{
            snake.eac = 0;
            snake.jyt = 0;
            toggSmile = false;
        }
    }
    if(fitout == 'snail'){
        if(!toggSnail){
            eyeTogg(false);
            snake.one_eye = 0;      
            snake.swell = 0;
            snake.ed = 34;
            snake.esp = 14;
            snake.eca = 1;
            snake.eo = 3;
            snake.er = 8;
            snake.easp = .038;
            snake.pr = 4.5;
            snake.pma = 3;
            snake.slg = !0;
            toggSnail = true;
            toggSmile = false;
            toggEye = false;
        }else{
            snake.ed = 6;
            snake.esp = 6;
            snake.eca = 0.75;
            snake.eo = 0;
            snake.er = 6;
            snake.easp = .1;
            snake.pr = 3.5;
            snake.pma = 2.3;
            snake.slg = 0;
            toggSnail = false;
        }
    }
    if(fitout == 'store'){//Flag
        if(!toggStore){
            flagTogg(false);
            snake.eca = 1;
            snake.antenna = !0;
            snake.atba = 0;
            snake.atc1 = "#002828";
            snake.atc2 = "#80d0d0";
            snake.atwg = !0;
            snake.atia = .5;
            snake.abrot = !0;
            c = 9;
            snake.atx = new Float32Array(c);
            snake.aty = new Float32Array(c);
            snake.atvx = new Float32Array(c);
            snake.atvy = new Float32Array(c);
            snake.atax = new Float32Array(c);
            snake.atay = new Float32Array(c);
            for (--c; 0 <= c; c--) snake.atx[c] = snake.xx, snake.aty[c] = snake.yy;
            snake.bulb = playbulb;
            snake.blbx = -29;
            snake.blby = -74;
            snake.blbw = 142;
            snake.blbh = 149;
            snake.bsc = .36;
            snake.blba = 1;            
            toggStore = true;
        }else{
            snake.antenna = 0;
            toggStore = false;
        }
    }
}

function localImage() {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        theImage = reader.result;
        localStorage.setItem("savei", theImage);
        ii.src = localStorage.getItem("savei");
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function updateOptions(){
    var generalStyle = '<span style = "opacity: 0.8;">';
    window.txt_currentparty.innerHTML = generalStyle + '<span style = "opacity: 0.7;">Your Party: </span><b style="opacity:1;">' + currentPartyCode + '</b>';
    window.botstatus_overlay.innerHTML = generalStyle + '<b style="opacity:1;">(T)</b> <span style = "opacity: 0.7;">Autoplay(Bots): </span>' + handleTextColor(ai.isBotEnabled);    
    window.autorespawn_overlay.innerHTML = generalStyle + '<b style="opacity:1;">(R)</b> <span style = "opacity: 0.7;">AutoRespawn(Bots): </span>' + handleTextColor(window.autoRespawn);    
    window.txt_oneeye.innerHTML = generalStyle + '<b style="opacity:1;">(1)</b> <span style = "opacity: 0.7;">Monster Eye: </span>' + handleTextColor(toggEye);
    window.txt_pointcircle.innerHTML = generalStyle + '<b style="opacity:1;">(2)</b> <span style = "opacity: 0.7;">Arcade Go: </span>' + handleTextColor(toggArgo);
    window.txt_magnet.innerHTML = generalStyle + '<b style="opacity:1;">(3)</b> <span style = "opacity: 0.7;">Magnus: </span>' + handleTextColor(toggMag);
    window.txt_kiwi.innerHTML = generalStyle + '<b style="opacity:1;">(4)</b> <span style = "opacity: 0.7;">Kwebbelkop: </span>' + handleTextColor(toggKiw);
    window.txt_punch.innerHTML = generalStyle + '<b style="opacity:1;">(5)</b> <span style = "opacity: 0.7;">PewDiePie: </span>' + handleTextColor(toggPunch);
    window.txt_smile.innerHTML = generalStyle + '<b style="opacity:1;">(6)</b> <span style = "opacity: 0.7;">Jelly: </span>' + handleTextColor(toggSmile);
    window.txt_snail.innerHTML = generalStyle + '<b style="opacity:1;">(7)</b> <span style = "opacity: 0.7;">Slogoman: </span>' + handleTextColor(toggSnail);
    window.txt_store.innerHTML = generalStyle + '<b style="opacity:1;">(8)</b> <span style = "opacity: 0.7;">WebStore: </span>' + handleTextColor(toggStore);
    window.txt_reddit.innerHTML = generalStyle + '<b style="opacity:1;">(9)</b> <span style = "opacity: 0.7;">Reddit Skin: </span>' + handleTextColor(toggRed);
    window.txt_showhelp.innerHTML = generalStyle + '<b style="opacity:1;">(B)</b> <span style = "opacity: 0.7;">Show Quick Keys</span>';
    window.txt_zoomkey.innerHTML = generalStyle + '<b style="opacity:1;">(N/M)</b> <span style = "opacity: 0.7;">Zoom In/Out</span>';
    window.txt_reset.innerHTML = generalStyle + '<b style="opacity:1;">(X)</b> <span style = "opacity: 0.7;">Reset Zoom</span>';
    window.txt_changeskin.innerHTML = generalStyle + '<b style="opacity:1;">(Z)</b> <span style = "opacity: 0.7;">Change Skin</span>';
    window.txt_hide_menu.innerHTML = generalStyle + '<b style="opacity:1;">(S)</b> <span style = "opacity: 0.7;">Show/Hide Key List</span>';
}
var addedArea = false;
function showBotcontrol(origin = false){
    flagTogg(false);
    updateOptions();
    if(origin){
        currentPartyCode = null;
        playparty = false;
        window.history.pushState('slither.io', 'Title', '/');
    }
    if(addedArea == false){
        setTimeout(function(){
            var styleArea = 'color:#FFF;position:absolute;font-weight:bold;';
            $("[style='position: fixed; right: 16px; bottom: 16px; height: 104px; width: 104px; z-index: 10; display: inline; opacity: 1;']").append('<div style="'+styleArea+'left:30px;top:25px;">A</div><div style="'+styleArea+'right:30px;top:25px;">B</div><div style="'+styleArea+'bottom:25px;left:30px;">C</div><div style="'+styleArea+'bottom:25px;right:30px;">D</div>');
            addedArea = true;
        }, 4000)
    }
    loadSkin();
}
function loadSkin(){
    if (localStorage.snakercv != "undefined" && !snake == false) {
        setSkin(snake, localStorage.snakercv);
    }else{
        window.setTimeout(loadSkin, 500);
    }
}
function handleTextColor(enabled) {
    return '<span style=\"opacity: 0.8; color:' + (enabled ? 'green;\">enabled' : 'red;\">disabled') + '</span>';
}
document.getElementById("connect-party").addEventListener('click', function(){showBotcontrol();});
window.play_btn.btnf.addEventListener('click', function(){showBotcontrol(true);});
jQuery("body").bind('keydown',function(e){if(e.keyCode === 13){showBotcontrol(true);}});
jQuery("input#connect-btn").bind('click', function(){showBotcontrol(true);});
window.addEventListener('keydown', function(){updateOptions();});
function resizeScreen() {
    if (window.resize) {
        window.lww = 0;
        window.wsu = 0;
        window.resize();
        var wh = Math.ceil(window.innerHeight);
        window.lbf.style.bottom = null;
        window.lbf.style.left = null;
        window.lbf.style.textAlign = "right";
        window.lbf.style.right = "30px";
        window.lbf.style.bottom = "200px";
        window.lbf.style.fontFamily = "Consolas, Verdana";
        if (wh < 800) {
            var login = document.getElementById("login");
            window.lgbsc = wh / 800;
            login.style.top = -20 + "px";
            if (window.trf) {
                window.trf(login, "scale(" + window.lgbsc + "," + window.lgbsc + ")");
            }
        }            
    } else {
        setTimeout(resizeScreen, 100);
    }
}
window.addEventListener('resize', function(){resizeScreen()}, false);

window.social.src = "http://www.slither-io.com/chrome/social.html";
window.social.height = "80px";
document.getElementById('twt').remove();
document.getElementById('fb').remove();
document.getElementById("csk").childNodes[1].src = "http://www.slither-io.com/chrome/changeskin2.png";
//Default newest skin
if(localStorage.snakercv == undefined){
    localStorage.snakercv = max_skin_cv;
}
window.addEventListener('click', function(){$(window).focus()});
//Chat Online
var chatovodOnLoad = chatovodOnLoad || [];
chatovodOnLoad.push(function() {
    chatovod.addChatButton({host: "slither-io.chatovod.com", align: "bottomLeft",
        width: 680, height: 480, defaultLanguage: "en"});
    jQuery('div.chatovodButton').css('bottom','10px');
    jQuery('div.chatovodButton').css('left','205px');
});
//== Slither.io Friends Mods from Slither-io.com ==//

/*
+ See location all players has same IP Server on the map.
+ Players must install same this Extention (Extension created by slither-io.com)
*/
var socket = io.connect('http://slither-io-mods.herokuapp.com'); 
function createFriendDot(posX, posY) {
    var mapDiv = $("[style='position: fixed; right: 16px; bottom: 16px; height: 104px; width: 104px; z-index: 10; display: inline; opacity: 1;']");
    var friendDot = document.createElement("img");
    friendDot.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPxJREFUeNpi/P//PwM5gImBTEC2RhZkjrw8kxgLM3PZ58//Un7++gcWY2VlZBDgZ9nw+8+fsocP/73CqpGVhbnMQEsy0tXjMz8b5xeG//8ZGf7+5mA4slfE7+i5x2+ASkrgikGBA8OiokzfZkwVADL5///7w/n/329OIJv3//pVwv9BcshqUWz88eP/bzb2r5z//7IwvH8PEePh+cPAyvkDLIczcBgZQS4As5BcxAB2MiMjnsABBgTL3z8cDIzMEJtAmtg5mBj+/WYDyv1hwalRgJ9p9aG9wr4iwp+E2IHOgwQOG8OOjaJfBfi/rkFxHXLKISU6GIdOkgMIMABEooPIeiLJNAAAAABJRU5ErkJggg==";
    friendDot.className = "nsi";
    friendDot.style.opacity = 1;    
    friendDot.classList.add("aFriend");
    friendDot.style.position = "absolute";
    friendDot.style.zIndex = 12;
    friendDot.style.left = Math.round(52 + 40 * (posX - grd) / grd - 7) + "px";
    friendDot.style.top = Math.round(52 + 40 * (posY - grd) / grd - 7) + "px";    
    trf(friendDot, agpu);
    mapDiv.append(friendDot);
}

function refeshMap() {
    $(".aFriend").remove();
}

function createParty(){
    if(!window.playing){
        playparty = true;
        window.connect();  
        var server = window.bso.ip + ":" + window.bso.po;
        var postX = window.view_xx;
        var postY = window.view_yy;
        socket.emit('create', {
            "ip": server,
            "x": postX,
            "y": postY
        });
    }
}

function joinParty(){
    var postX = window.view_xx;
    var postY = window.view_yy;               
    mainParty = jQuery('#partycode').val() != '' ? jQuery('#partycode').val() : false ;
    currentPartyCode = mainParty;
    window.history.pushState(mainParty, 'Title', mainParty);
    socket.emit('join', {
        "code": mainParty,
        "x": postX,
        "y": postY
    });
}

function update(){
    if(window.playing){
        var postX = window.view_xx;
        var postY = window.view_yy;
        socket.emit('update',{
            "x": postX,
            "y": postY
        });
        setTimeout(function(){
            update();
        }, 5000);
    }else{
        playparty = false;
        socket.emit('leave');
    }
}

socket.on('create', function(partycode){
    jQuery('#partycode').val(partycode);
    window.history.pushState(partycode, 'Title', partycode);
    currentPartyCode = partycode;
});

socket.on('getIP', function(ipParty){
    if(!playparty && !window.playing){
        if (ipParty == null || !window.connect) {
            return;
        }   
        window.forcing = true;
        if (!window.bso) {
            window.bso = {};
        }
        if (jQuery('canvas').eq(1).css('display') != 'none') {
            jQuery('canvas').eq(1).css('display', 'none');
        }
        var srv = ipParty.trim().split(":");
        window.bso.ip = srv[0];
        window.bso.po = srv[1];
        window.connect();
        playparty = true;
    }
});

socket.on('uID', function(data){
    uID = data;
    socket.on('join', function(data){
        if(data){
            refeshMap();
            var s = '';
            for(var i = 0; i < data.length; i++){
                if(data[i]['user'] != uID){
                    createFriendDot(data[i]['x'], data[i]['y']);
                }
            }
        }
    });
    setTimeout(function(){
        update();
    }, 5000);
});

socket.on('wrongCode', function(){
    alert('Wrong party code');
    playparty = false;
});

$(window).bind("beforeunload", function() { 
    socket.emit('leave');
});

$('#create-party').click(function(){
    createParty();
});

$('#connect-party').click(function(){
    joinParty();
});
//== Slither.io Friends Mods from Slither-io.com ==//
var clans = [
        "SLI",
        "CAP",
        "IRM",
        "BAT",
        "SUP",
        "AG",
        "NKB",
        "MG",
        "Hero"
    ];

function asciize(b, claning = false) {
    var f, c, h;
    c = b.length;
    var u = !1;
    for (f = 0; f < c; f++)
        if (h = b.charCodeAt(f), 32 > h || 127 < h) {
            u = !0;
            break
        }
    if (u) {
        u = "";
        for (f = 0; f < c; f++) h = b.charCodeAt(f), u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
        return u
    }
    return !claning ? jQuery("#clantag").val() + ' ' + b : b;
}

nick.oninput = function() {
    var b = this.value,
        f = asciize(b, true);
    24 < f.length && (f = f.substr(0, 24));
    b != f && (this.value = f)
};
jQuery("#nick_holder").before('<div id="clan_tag" class="taho" style="width: 110px; height: 43px; margin-top: 10px; box-shadow: #000 0px 6px 50px; opacity: 1; background: #4C447C;"><select class="sumsginp" id="clantag" style="width: 85px; top: 0px; outline: 0; height: 43px;"></select></div>')
jQuery("#clantag").append("<option value='' style='background: rgb(76, 68, 124)'>- Clan -</option>");
for (clantag of clans) {
    jQuery("#clantag").append("<option value='[" + clantag + "]' style='background: rgb(76, 68, 124)'>[" + clantag + "]</option>");
}
jQuery('input#nick').css('height','23px');
jQuery('input#nick').attr('maxlength', 20);