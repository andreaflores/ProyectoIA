"use strict"
import {Player} from './Player.js';
import {Board} from './Board.js';

var players, actualPlayer, board, mov;

startGame();

function startGame() {
    players = [
        new Player("ia_negro", 0, true),
        new Player("ia-blanco", 1, true) //white
    ];
    actualPlayer = 1;
    board = new Board(players);

    return renderBoard(board.board);
}

function renderBoard(board) {
    for (var y = 0; y < board.length; ++y) {
        for (var x = 0; x < board.length; ++x) {
            var piece = board[x][y] ? board[x][y] : "";
        }
    }
    return play();
}

function play() {
    if(actualPlayer === 1){
        if(players[actualPlayer].isIa) {
            setTimeout(function(){
                try {
                    var move = players[actualPlayer].getMove(board); 
                    console.log("Movimiento a realizar " + move.x + ", " + move.y);
                    mov = move.y + "" + move.x
                } catch (error) {
                    // algun error en el movimiento   
                }
            }, 1000);
        }
    }

}

export {startGame, mov};