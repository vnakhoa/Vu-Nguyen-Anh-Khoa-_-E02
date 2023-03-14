"use strict";
exports.__esModule = true;
function demo() {
    var input = document.getElementById("fullname");
    var fullname = input.value;
    var result = 'Hi ' + fullname + ' !';
    var p = document.getElementById("result-content");
    p.innerHTML = result;
}
