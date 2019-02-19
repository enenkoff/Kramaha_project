'use strict'
function isValidWalk(walk) {
    var timely;

    if (walk.length < 10) timely = false;
    else if (walk.length > 10) walk.length = 10;

    var arrNew = walk.map(function (i) {
        switch (i) {
            case 'N': return i = 1; break;
            case 'E': return i = 1; break;
            case 'W': return i = -1; break;
            case 'S': return i = -1; break
        }
    });

    var arrNewSum = arrNew.reduce(function (sum, current) {
        return sum + current;
    });

    timely = (arrNewSum === 0) ? true : false;

    return timely;
}

let data = ['N', 'E', 'N', 'E', 'S', 'W', 'S', 'S', 'W', 'N'];
document.getElementById('app').innerHTML = isValidWalk(data);