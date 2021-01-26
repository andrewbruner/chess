import Move from '../Move.js';
import chessgame from '../script.js';

class Piece {
    constructor(color, square) {
        this.color = color;
        this.square = square;
        this.hasMoved = false;
    }

    get moves() {
        const moves = [];
        const startCoordinates = this.square.coordinates;
        const startSquare = this.square;

        const repeatDirection = (direction, newStartSquare) => {
            const moves = [];
            const newStartCoordinates = newStartSquare.coordinates;
            const endCoordinates = [newStartCoordinates[0] + direction[0], newStartCoordinates[1] + direction[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];
    
            if (endSquare) {
                if (!endSquare.piece) {
                    moves.push(new Move(this, startSquare, endSquare));
                    const repeatedMoves = repeatDirection(direction, endSquare);
                    repeatedMoves.forEach((move) => {
                        moves.push(move);
                    });
                } else if (endSquare.piece.color != this.color) {
                    moves.push(new Move(this, startSquare, endSquare, { willCapture: true }))
                }
            }
            return moves;
        }

        this.movement.matrix.forEach((direction) => {
            const endCoordinates = [startCoordinates[0] + direction[0], startCoordinates[1] + direction[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];

            // if endSquare exists
            if (endSquare) {
                // if endSquare is empty
                if (!endSquare.piece) {
                    moves.push(new Move(this, startSquare, endSquare));
                    // repeat direction
                    if (this.movement.repeat) {
                        const repeatedMoves = repeatDirection(direction, endSquare);
                        repeatedMoves.forEach((move) => {
                            moves.push(move);
                        });
                    }
                // endSquare has opponenet piece
                } else if (endSquare.piece.color != this.color) {
                    moves.push(new Move(this, startSquare, endSquare, { willCapture: true }));
                }
            }
        });
        return moves;
    }

    removeSelfCheck(moves) {
        let kingSquare = null;
        for (const notation in chessgame.board) {
            if (chessgame.board[notation].piece?.name == 'king' && chessgame.board[notation].piece?.color == this.color) {
                kingSquare = chessgame.board[notation];
            }
        }

        const safeMoves = [];

        moves.forEach((move) => {
            let originalEndPiece = null;
            if (move.endSquare.piece) {
                originalEndPiece = move.endSquare.piece;
            }
            move.startSquare.piece = null;
            move.endSquare.piece = move.piece;
            move.piece.square = move.endSquare;
            let safeToMove = true;
            for (const notation in chessgame.board) {
                if (chessgame.board[notation].piece && chessgame.board[notation].piece?.color != move.piece.color) {
                    chessgame.board[notation].piece.moves.forEach((oppMove) => {
                        if (oppMove.endSquare == kingSquare) {
                            safeToMove = false;
                        }
                    });
                }
            }
            if (safeToMove) {
                safeMoves.push(move);
            }
            move.endSquare.piece = originalEndPiece;
            move.startSquare.piece = move.piece;
            move.piece.square = move.startSquare;
        });

        return safeMoves;
    }
}

export default Piece;
