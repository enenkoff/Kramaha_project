'use strict'

function firstDuplicate(a) {
    var num = null,
        nArr = [],
        arrRes = [];
    a.forEach(function (i) {
        if (nArr.indexOf(i) !== -1) arrRes.push(i);
        nArr.push(i);
    });
    num = (arrRes.length > 0) ? arrRes[0] : -1;
    return num;
}

let data = [2, 1, 3, 5, 3, 2];

document.getElementById('app').innerHTML = firstDuplicate(data);