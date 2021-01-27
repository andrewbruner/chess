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
                    // if clicked square is end square of move
                    if (move.endSquare == square) {
                        // push move to history
                        chessgame.history.push(move.notation);
                        // if there's is a piece in the end square
                        if (square.piece) {
                            // move piece to captured
                            chessgame.captured[square.piece.color].push(square.piece);
                            // change piece square to null
                            square.piece.square = null;
                        }
                        // remove piece from start square
                        move.startSquare.piece = null;
                        // place piece in end square
                        square.piece = piece;
                        // change piece square to end square
                        piece.square = square;
                        // update piece has moved
                        piece.hasMoved = true;
                        // update view
                        view.update(move.startSquare.notation, square.notation);
                    }
                });
                view.resetHighlights();
                chessgame.selectedPiece = null;
            }
        }
    }
};

export default controller;
