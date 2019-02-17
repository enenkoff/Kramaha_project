'use strict'

function firstDuplicate(arr) {

    var arr2 = [];
    for (var j = 0; j < arr.length; j++) {
        var num = arr[j];

        for (var i = j + 1; i < arr.length; i++) {
            if (num == arr[i]) arr2.push(i);
        }
    }
    if (arr2.length > 0) return arr[Math.min.apply(null, arr2)];
    return -1;

}

let data = [1, 2, 3, 4, 1];

document.getElementById('app').innerHTML = firstDuplicate(data);

