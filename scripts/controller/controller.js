import chessgame from '../script.js';
import view from '../view/view.js';

const controller = {
    handleClick(event) {
        const target = event.target;
        if (!chessgame.selectedPiece) {
            if (target.dataset.type == 'piece') {
                const square = chessgame.board[target.parentNode.dataset.notation];
                const piece = square.piece;
                const possibleMoves = piece.moves;
                const moves = piece.removeSelfCheck(possibleMoves);
                if (moves.length) {
                    moves.forEach((move) => {
                        view.highlightMove(move);
                    });
                    chessgame.selectedPiece = piece;
                }
            }
        } else if (chessgame.selectedPiece) {
            if (target.dataset.type == 'square' || target.dataset.type == 'piece') {
                const piece = chessgame.selectedPiece;
                if (target.dataset.type == 'piece' && target.dataset.color == piece.color) {
                    chessgame.selectedPiece = null;
                    view.resetHighlights();
                    return controller.handleClick({ type: 'click', target: document.querySelector(`[data-notation="${target.parentNode.dataset.notation}"] [data-type="piece"]`) });
                }
                const square = target.dataset.type == 'square' ? chessgame.board[target.dataset.notation] : chessgame.board[target.parentNode.dataset.notation];
                const possibleMoves = piece.moves;
                const moves = piece.removeSelfCheck(possibleMoves);
                moves.forEach((move) => {
                    if (move.endSquare == square) {
                        console.log(move.notation);
                    }
                });
                view.resetHighlights();
                chessgame.selectedPiece = null;
            }
        }
        view.update();
    }
};

export default controller;
