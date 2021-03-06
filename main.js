"use strict";

$(document).ready(function() {

    function changing() {
        let x = document.getElementById("greeting");
        if (x.innerHTML === "Happy Birthday Daniel!!") {
            x.innerHTML = "22!!!";
        } else {
            x.innerHTML = "Happy Birthday Daniel!!";
        }
    }
    // https://stackoverflow.com/questions/17712247/why-innerhtml-dosent-work-inside-settimeout
    function changeText(num) {
        if (num > 0) {
            changing();
            setTimeout(function(){changeText(num-1)}, 3000);
        }
    }

    changeText(60);

    let cakeChange = document.getElementById('cake'); // cache the element
    let greetingChange = document.getElementById('greeting'); // cache the element
    let button = document.getElementById('button');
    let cakeTones = ['aqua','greenyellow','#c3f9ca', '#f9913c', '#f9283a']; // any amount can be added
    let greetingTones = ['#c3f9ca', '#f9913c', '#f9283a', 'aqua','greenyellow',];
    let current = 0; // click counter

    button.addEventListener('click', function() {
        current++; // add one to click count
        current %= cakeTones.length; // if count is larger than length of array use modulus to return to beginning
        cakeChange.style.color = cakeTones[current];//change background style to current number in the array
        greetingChange.style.color = greetingTones[current];
    });


});
