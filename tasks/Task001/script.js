'use strict'

function firstDuplicate(a) {
    var num;

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
    return num;
}

let data = [499];

document.getElementById('app').innerHTML = firstgitDuplicate(data);