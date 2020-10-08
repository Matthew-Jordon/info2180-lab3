var board;
var turns =0;
window.onload = function () {
    board = document.getElementById("board");
    for (let index = 0; index < 9; index++) {
        let count = 0;
        board.children.item(index).classList.add("square");
    }
}

