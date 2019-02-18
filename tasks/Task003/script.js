'use strict'

function isValidWalk(walk) {
    if(walk.length<1 || walk.length>20){
        return -1;
    }
    var timely;
    var x = 0;
    var y = 0;
     for(var i in walk){
         switch(walk[i]) {
             case 'N':
                x +=1;
                break;
             case 'E':
                 y +=1;
                 break;
             case 'S':
                 x -=1;
                 break;
             case 'W':
                 y -=1;
                 break;
             default:
                     return -1;
         }
     }
     if(x==0 && y==0 && walk.length==10){
         timely = true;
     }else {
         timely = false;
     }

    return timely;
}

let data = ['N', 'E', 'N', 'E', 'S', 'W', 'S', 'S', 'W', 'N'];

document.getElementById('app').innerHTML = isValidWalk(data);