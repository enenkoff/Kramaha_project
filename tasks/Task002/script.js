'use strict'

function almostIncreasingSequence(sequence) {
    var isIncreasing;
    for (var i = 0; i<sequence.length-1; i++) {
        if ( sequence[i] - sequence[i+1] !== -1 ) {
            var ind = sequence.indexOf(sequence[i+1]);
            sequence.splice(ind,1);
            break;
        }
    }
    for (var i = 0; i<sequence.length-1; i++) {
        isIncreasing = ( sequence[i] - sequence[i+1] !== -1 ) ? false : true;
    }
    return isIncreasing;
}


let data = [1, 3, 2, 1];

document.getElementById('app').innerHTML = almostIncreasingSequence(data);