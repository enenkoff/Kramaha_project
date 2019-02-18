'use strict'

function almostIncreasingSequence(sequence) {
    var isIncreasing;
    var countDel=0;


    if (sequence.length == 1){
        return isIncreasing = true;
    }
    if (sequence.length>=2 && sequence.length<=Math.pow(10, 5)) {
        for (var i=1; i<sequence.length; i++){

            if(sequence[i-1]< sequence[i]){
                isIncreasing = true;
            } else if(countDel<1){
                countDel = 1;
                sequence.splice(i,1);
                if(sequence[i-1]< sequence[i]){
                    isIncreasing = true;
                }else isIncreasing = false;
            }

            else isIncreasing = false;
        }
    } else return -1;


    return isIncreasing;
}


let data =  [1, 3, 2, 5];

document.getElementById('app').innerHTML = almostIncreasingSequence(data);