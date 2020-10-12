var board;
var turns =0;
var info = [];
var ngame;
window.onload = function () {
    board = document.getElementById("board");
    for (let index = 0; index < 9; index++) {
        let count = 0;
        board.children.item(index).classList.add("square");
        board.children.item(index).addEventListener("click", function() {
            if ((turns %2) == 0) {
                board.children.item(index).innerHTML = "X";
                board.children.item(index).classList.add("X");
                info[index] = "X";
            } else {
                board.children.item(index).innerHTML = "O";
                board.children.item(index).classList.add("O");
                info[index] = "O";
            }
            check();
            turns++;
        });
        board.children.item(index).onmouseenter = function() {
            board.children.item(index).classList.add("hover");
        }
        board.children.item(index).onmouseleave = function() {
            board.children.item(index).classList.remove("hover");
        }
    }
}
function check() {
    if (info[0] == info[1] && info[0] == info[2] && info[0] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[0] + " is the Winner"; 
    } if (info[3] == info[4] && info[3] == info[5] && info[3] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[3] + " is the Winner";
    } if (info[6] == info[7] && info[6] == info[8] && info[6] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[6] + " is the Winner";
    } if (info[0] == info[3] && info[0] == info[6] && info[0] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[0] + " is the Winner";
    } if (info[1] == info[4] && info[1] == info[7] && info[1] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[1] + " is the Winner";
    } if (info[2] == info[5] && info[2] == info[8] && info[2] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[2] + " is the Winner";
    } if (info[0] == info[4] && info[0] == info[8] && info[0] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[0] + " is the Winner";
    } if (info[2] == info[4] && info[2] == info[6] && info[2] != undefined) {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! " + info[2] + " is the Winner";
    }
}