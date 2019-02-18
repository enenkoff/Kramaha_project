'use strict'

function firstDuplicate(a) {
    var num;
    if(a.length>=1 && a.length<=500){
        for(var i = 0; i < a.length; i++){
            for(var j = i + 1; j < a.length; j++){
                if(a[i] == a[j]){
                    num = a[i];
                    break;
                }
            }
        }
        if(num == undefined){
            num = -1;
        }
    }else {
        return -1;
    }

    return num;
}

let data = [2, 1, 3, 5, 3, 2];

document.getElementById('app').innerHTML = firstDuplicate(data);