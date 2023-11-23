function f1(callback) {
    setTimeout (function(){
        console.log('f1'); 
        if (callback) callback(); 
    }, 1000);
}
function f2(callback) {
    setTimeout (function () {
        console.log('f2');
        if (callback) callback();
    }, 700);
}

function f3(callback) {
    setTimeout (function(){
        console.log('f3');
        if (callback) callback();
    }, 800);
}

/* 
uma forma de callback
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola');
        });
    });
}); */

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('ola')
}