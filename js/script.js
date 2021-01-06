'use strict';

function hide1() {
    if(document.getElementById('btn1').style.opacity != 0.5) {
        document.getElementById('btn1').style.opacity = 0.5;
    } else{
        document.getElementById('btn1').style.opacity = 1;
    }
}

function hide2() {
    if(document.getElementById('btn2').style.opacity != 0.01) {
        document.getElementById('btn2').style.opacity = 0.01;
    } else{
        document.getElementById('btn2').style.opacity = 1;
    }
}

function hide3() {
    if(document.getElementById('btn3').style.opacity == 0) {
        document.getElementById('btn3').style.opacity = 0;
    } else{
        document.getElementById('btn3').style.opacity = 1;
    }
}

function hide4() {
    if(document.getElementById('btn4').style.opacity != 1) {
        document.getElementById('btn4').style.opacity = 0;
    } else{
        document.getElementById('btn4').style.opacity = 1;
    }
}

function hide5() {
    if(document.getElementById('btn5').style.opacity == 0) {
        document.getElementById('btn5').style.opacity = 0;
    } else{
        document.getElementById('btn5').style.opacity = 1;
    }
}