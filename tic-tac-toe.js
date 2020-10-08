var board;
var turns =0;
window.onload = function () {
    board = document.getElementById("board");
    for (let index = 0; index < 9; index++) {
        let count = 0;
        board.children.item(index).classList.add("square");
        board.children.item(index).addEventListener("click", function(){
            if ((turns %2) == 0) {
                board.children.item(index).innerHTML = "X";
                board.children.item(index).classList.add("X");
            } else {
                board.children.item(index).innerHTML = "O";
                board.children.item(index).classList.add("O");
            }
            turns++;
        });
    }
}

