import Game from './js/Game.js';

const chessgame = new Game();
chessgame.startGame();

window.chessgame = chessgame;

document.querySelector('.chessboard').addEventListener('click', (event) => {
    let start = null;
    let end = null;

    if (!chessgame.selectedPiece) {
        if (event.target.classList.contains('piece')) {
            const piece = chessgame.board.squares[event.target.parentNode.dataset.square].piece;
            const moves = chessgame.findMoves(piece);
            moves.forEach((move) => {
                document.querySelector(`[data-square="${move.end.notation}"]`).classList.add('highlight');
            });
        }
    } else {
        start = document.querySelector(`[data-square="${chessgame.selectedPiece.square.notation}"]`);
        const moves = chessgame.findMoves(chessgame.selectedPiece);
        if (event.target.classList.contains('square')) {
            end = event.target;
            chessgame.chooseMove(chessgame.selectedPiece, chessgame.board.squares[event.target.dataset.square]);
            document.querySelectorAll('.highlight').forEach((square) => {
                square.classList.remove('highlight');
            });
        } else if (event.target.classList.contains('piece')) {
            end = event.target.parentNode;
            chessgame.chooseMove(chessgame.selectedPiece, chessgame.board.squares[event.target.parentNode.dataset.square]);
            document.querySelectorAll('.highlight').forEach((square) => {
                square.classList.remove('highlight');
            });
        }
        if (!chessgame.board.squares[start.dataset.square].piece) {
            start.removeChild(start.querySelector('.piece'));
            if (end.querySelector('.piece')) {
                end.removeChild(end.querySelector('.piece'));
            }
            const img = document.createElement('img');
            img.setAttribute('class', 'piece');
            img.setAttribute('data-piece', chessgame.board.squares[end.dataset.square].piece.notation);
            img.setAttribute('src', `./pieces/${chessgame.board.squares[end.dataset.square].piece.color.charAt(0)}${chessgame.board.squares[end.dataset.square].piece.notation ? chessgame.board.squares[end.dataset.square].piece.notation : 'P'}.png`);
            end.appendChild(img);
        }
    }
});

export default chessgame;