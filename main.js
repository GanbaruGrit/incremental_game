var points = 0;
var cursors = 0;
var save = {
    points: points,
    cursors: cursors,
    prestige: prestige
}

function pointClick(number) {
    points = points + number;
    document.getElementById('points').innerHTML = points;
};

// function buildingsOutput(number) {
//     points = points + number;
//     document.getElementById('points').innerHTML = points;
// };

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

// function buyBuilding() {
//     var buildingCost = Math.floor(10 * Math.pow(1.1, buildings));
//     if(points >= buildingCost) {
//         buildings = buildings + 1;
//         points = points - buildingCost;
//         document.getElementById('buildings').innerHTML = buildings;
//         document.getElementById('points').innerHTML = points;
//     };
//     var nextCost = Math.floor(10 * Math.pow(1.1, buildings));
//     document.getElementById('buildingCost').innerHTML = nextCost;
// };


window.setInterval(function() {
    pointClick(cursors);
}, 1000);

// Save game, link to button
// put this in a try/catch statement for practice
localStorage.setItem("save", JSON.stringify(save));

// Load save, link to button
var savegame = JSON.parse(localStorage.getItem("save"));

if (typeof savegame.points !== "undefined") points = savegame.points;
if (typeof savegame.cursors !== "undefined") points = savegame.cursors;

// Delete save, link to button
localStorage.removeItem("save")

// window.setInterval(function() {
//     buildingsOutput(buildings);
// }, 10000);


// Dealing with rogue decimals
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

// Call this when presenting number to player
document.getElementById('points').innerHTML = prettify(points);

// Original tut http://dhmstark.co.uk/articles/incrementals-part-2.html