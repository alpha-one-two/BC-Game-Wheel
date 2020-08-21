var data = {};
data.low = [];
data.low[10] = [1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0];
data.low[20] = [1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0];
data.low[30] = [1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0];
data.low[40] = [1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0];
data.low[50] = [1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0];
data.medium = [];
data.medium[10] = [0, 1.9, 0, 1.5, 0, 2, 0, 1.5, 0, 3];
data.medium[20] = [1.5, 0, 2, 0, 2, 0, 2, 0, 1.5, 0, 3, 0, 1.8, 0, 2, 0, 2, 0, 2, 0];
data.medium[30] = [1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 2, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0, 2, 0, 1.7, 0, 4, 0, 1.5, 0, 2, 0];
data.medium[40] = [2, 0, 3, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0, 2, 0, 1.6, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0, 1.5, 0];
data.medium[50] = [2, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0, 1.5, 0, 2, 0, 2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0, 1.5, 0, 1.5, 0, 5, 0, 1.5, 0, 2, 0, 1.5, 0];
data.high = [];
data.high[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9];
data.high[20] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19.8];
data.high[30] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29.7];
data.high[40] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39.6];
data.high[50] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49.5];

function getResult() {
    var parent = $("div#placeholder1");
    $(parent).empty();
    var serverSeed = $("input#serverSeed").val();
    var clientSeed = $("input#clientSeed").val();
    var gameId = $("input#gameId").val();
    var lineHeight = 24;
    var rightSide = 120;
    var canvasWidth = 900;
    var canvasHeight = 420;
    var risk = $($("#risk .ui-selected")[0]).text();
    var segment = parseInt($($("#segment .ui-selected")[0]).text());
    var ctx = createCanvas($(parent), canvasWidth, canvasHeight, "#f8f8f8", true);
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#999";
    var x = 10;
    drawWrapText(ctx, "Use SHA256 to calculate the hash value after combining Server Seed, Client Seed, Game Id.  Sha256(Server_Seed+Client_Seed+Game_Id)", x, 800, lineHeight * 1, null, "  ");
    drawWrapText(ctx, "Take out the first 8 characters of the hash, and divide every 2 characters", x, 150, lineHeight * 4);
    drawWrapText(ctx, "Convert  hexadecimal  to decimal", 160, 250, lineHeight * 5.6, null, "  ");
    drawWrapText(ctx, "Separate calculation", 290, canvasWidth, lineHeight * 6.8);
    drawWrapText(ctx, "Add up the result,  multiply it by " + segment + ",  and round to an integer", 510, 630, lineHeight * 5.6, null, "  ");
    var hash = sha256(serverSeed + clientSeed + gameId);
    var firstEightChar = hash.substr(0, 8);
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "#000";
    drawWrapText(ctx, "Hash = " + hash, x, canvasWidth, lineHeight * 2.5);
    drawWrapText(ctx, firstEightChar, x, canvasWidth, lineHeight * 7);
    var txtSize = ctx.measureText(firstEightChar);
    var group = [];
    var sum = 0;
    for (var a = 0, b = 0; a < 4; a++, b += 2) {
        var _x = x + 100;
        group[a] = hash.substr(b, 2);
        var _y = lineHeight * (8 + a);
        drawWrapText(ctx, group[a], _x, canvasWidth, _y);
        group[a] = parseInt(group[a], 16);
        drawWrapText(ctx, group[a].toString(), _x += 30, 230, _y, "center");
        var num = group[a] / Math.pow(256, a + 1);
        sum += num;
        drawWrapText(ctx, group[a].toString() + " / 256 ^ " + (a + 1) + " = " + parseFloat((num).toPrecision(10)).toFixed(10), _x += 20, _x + 290, _y, "right");
        var dist = txtSize.width / 4;
        var startX = x + dist * 0.5 + (dist * a);
        var startY = lineHeight * 7.3;
        ctx.strokeStyle = "#999";
        ctx.lineCap = 'round';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        var endX = x + 95;
        var endY = _y - 5;
        ctx.quadraticCurveTo(Math.min(startX, endX), Math.max(startY, endY), endX, endY);
        ctx.moveTo(endX += 30, endY);
        ctx.lineTo(endX += 30, endY);
        ctx.moveTo(endX += 40, endY);
        ctx.lineTo(endX += 25, endY);
        startX = endX + 230;
        startY = endY;
        endX = startX + 30;
        endY = 187;
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(startX + (endX - startX) / 2, startY, startX + (endX - startX) / 2, endY, endX, endY);
        ctx.stroke();
    }
    drawWrapText(ctx, "sum = " + parseFloat((sum).toPrecision(10)).toFixed(10), 500, 670, lineHeight * 8, "center");
    drawWrapText(ctx, "x " + segment + " = " + parseFloat((sum *= segment).toPrecision(10)).toFixed(10), 500, 670, lineHeight * 9, "center");
    drawWrapText(ctx, "rounding = " + Math.floor(sum), 500, 670, lineHeight * 10, "center");
    var payouts = data[risk.toLowerCase()][segment];
    for (var a = 0; a < payouts.length; a++) {
        var cellWidth = canvasWidth / payouts.length;
        var _x = cellWidth * a;
        var _y = 310;
        if (payouts.length > 30) {
            cellWidth = canvasWidth / (payouts.length / 2 + 0.5);
            _x = cellWidth * a / 2 + (cellWidth * 0.5 * a % 2);
            _y = 310 + 60 * (a % 2);
        }
        ctx.lineCap = 'round';
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ddd";
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x, _y + 40);
        ctx.stroke();
        ctx.strokeStyle = "#999";
        if (a == Math.floor(sum)) {
            var startX = 626;
            var startY = 245;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            var endX = _x + cellWidth * 0.5;
            var endY = _y;
            if (payouts.length > 30 && a % 2) {
                endY -= 60;
                ctx.bezierCurveTo(startX, startY + (endY - startY) + 10, endX, endY - 60, endX, endY);
                ctx.lineTo(endX, endY + 60);
            } else {
                ctx.bezierCurveTo(startX, startY + (endY - startY) + 10, endX, endY - 60, endX, endY);
            }
            ctx.stroke();
            ctx.fillStyle = "#fff";
            ctx.fillRect(_x + 1, _y, cellWidth - 2, 40);
            ctx.strokeRect(_x + 1, _y, cellWidth - 2, 40);
        }
        ctx.font = "14px sans-serif";
        ctx.fillStyle = "#999";
        drawWrapText(ctx, a.toString(), _x, _x + cellWidth, _y + 14, "center");
        ctx.fillStyle = "#000";
        ctx.font = "bold 14px sans-serif";
        drawWrapText(ctx, payouts[a].toString(), _x, _x + cellWidth, _y + 33, "center");
    }
    var result = payouts[Math.floor(sum)];
    ctx.font = "34px sans-serif";
    drawWrapText(ctx, result >= 1 ? "YOU WIN" : "YOU LOSE", 680, 680 + 200, lineHeight * 4, "center");
    drawWrapText(ctx, "payout", 680, 680 + 200, lineHeight * 7, "center");
    ctx.font = "70px sans-serif";
    drawWrapText(ctx, result + "x", 680, 680 + 200, lineHeight * 10, "center");
}

function drawWrapText(ctx, str, left, right, top, align = "left", cutter = " ") {
    var lines = getLines(ctx, str, right - left, cutter);
    var height = parseInt(ctx.font.match(/\d+/), 10);
    for (var a = 0; a < lines.length; a++) {
        var txtSize = ctx.measureText(lines[a]);
        var x = left;
        if (align == "right") {
            x = right - txtSize.width;
        } else if (align == "center") {
            x = left + (right - left - txtSize.width) / 2;
        }
        ctx.fillText(lines[a], x, top + height * a);
    }
}

function createCanvas(parent, width, height, color, visiable) {
    var canvas = document.createElement('canvas');
    if (!visiable) {
        $(canvas).hide();
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    ctx.translate(0.5, 0.5);
    $(parent).append(canvas);
    return ctx;
}

function getLines(ctx, text, maxWidth, cutter = " ") {
    var words = text.split(cutter);
    var lines = [];
    var currentLine = words[0];
    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + cutter + word).width;
        if (width < maxWidth) {
            currentLine += cutter + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

$(function() {
    $("#segment,#risk").selectable({
        selected: getResult,
        stop: function(event, ui) {
            $(event.target).children('.ui-selected').not(':first').removeClass('ui-selected');
        }
    });
});