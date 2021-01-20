import Game from './js/Game.js';

const chessgame = new Game();

window.chessgame = chessgame;

document.querySelector('.chessboard').addEventListener('click', (event) => {
    if (!chessgame.selectedPiece) {
        if (event.target.classList.contains('piece')) {
            const piece = chessgame.board.squares[event.target.parentNode.dataset.square].piece;
            const moves = chessgame.findMoves(piece);
            moves.forEach((move) => {
                document.querySelector(`[data-square=${move.end.notation}]`).classList.add('highlight');
            });
        }
    } else {
        const moves = chessgame.findMoves(chessgame.selectedPiece);
        if (event.target.classList.contains('square')) {
            chessgame.chooseMove(chessgame.selectedPiece, chessgame.board.squares[event.target.dataset.square]);
            document.querySelectorAll('.highlight').forEach((square) => {
                square.classList.remove('highlight');
            });
        } else if (event.target.classList.contains('piece')) {
            chessgame.chooseMove(chessgame.selectedPiece, chessgame.board.squares[event.target.parentNode.dataset.square]);
            document.querySelectorAll('.highlight').forEach((square) => {
                square.classList.remove('highlight');
            });
        }
    }
});