"use strict";

$(document).ready(function() {

    const age = function() { $('#greeting').text('22!!!')};
    const greeting = function() { $('#greeting').text('Happy Birthday Daniel!!')};

    function changing() {
        setTimeout(age, 2000);
        setTimeout(greeting, 4000);
    }

    changing();

    let startTimer;

    for (let i = 0; i < 20; i++) {
        startTimer = setInterval(function () {
                changing();
                console.log("hello");
        }, 4000);
    }





});
