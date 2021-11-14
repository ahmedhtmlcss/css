var turn=true;
var squers=[];

function reset(A,B,C){
    document.getElementById('A' + A).style.color="#000";
    document.getElementById('A' + B).style.color="#000";
    document.getElementById('A' + C).style.color="#000";
    setTimeout(function(){location.reload()},4000);
}

function check(){
    for(var i=1 ; i<=9 ; i++){
        squers[i]=document.getElementById('A' + i).innerHTML;
    }

//////////صف
if(squers[1]==squers[2] && squers[2]==squers[3] && squers[1]!=""){
    alert('player ' + squers[1] +' win the game');

    reset(1,2,3);

}

if(squers[4]==squers[5] && squers[5]==squers[6] && squers[4]!=""){
    alert('player ' + squers[4] +' win the game');
    reset(4,5,6);
}
if(squers[7]==squers[8] && squers[8]==squers[9] && squers[7]!=""){
    alert('player ' + squers[7] +' win the game');
    reset(7,8,9);

}
/////////بالغرض
if(squers[1]==squers[4] && squers[4]==squers[7] && squers[1]!=""){
    alert('player ' + squers[1] +' win the game');
    reset(1,4,7);

}
if(squers[2]==squers[5] && squers[5]==squers[8] && squers[2]!=""){
    alert('player ' + squers[2] +' win the game');
    reset(2,5,8);

}
if(squers[3]==squers[6] && squers[6]==squers[9] && squers[3]!=""){
    alert('player ' + squers[3] +' win the game');
    reset(3,6,9);

}
//////////////////بالقطر
if(squers[1]==squers[5] && squers[5]==squers[9] && squers[9]!=""){
    alert('player ' + squers[9] +' win the game');
    reset(1,5,9);

}
if(squers[3]==squers[5] && squers[5]==squers[7] && squers[7]!=""){
    alert('player ' + squers[7] +' win the game');
    reset(3,5,7);

}

}

function insert(id){
    var s= document.getElementById(id);
    if (turn && s.innerHTML==""){
        s.innerHTML="X";
        turn = !turn;
    }
    else if(!turn &&s.innerHTML==""){
        s.innerHTML="O";
        turn = !turn;


    }
    check();

}
