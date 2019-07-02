var points = 0;
var cursors = 0;

function pointClick(number) {
    points = points + number;
    document.getElementById('points').innerHTML = points;
};

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if(points >= cursorCost) {
        cursors = cursors + 1;
        points = points - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('points').innerHTML = points;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

window.setInterval(function() {
    pointClick(cursors);
}, 1000);
