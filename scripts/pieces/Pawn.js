import Piece from './Piece.js';
import Move from '../Move.js';

class Pawn extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'pawn';
        this.notation = '';
    }

    get movement() {
        const movement = { };
        movement.repeat = 'once';
        if (this.color == 'white') {
            movement.matrix = [[0, 1]];
            movement.capture = [[1, 1], [-1, 1]];
        } else {
            movement.matrix = [[0, -1]];
            movement.capture = [[1, -1], [-1, -1]];
        }
        return movement;
    }

    get moves() {
        const moves = [];
        const startCoordinates = this.square.coordinates;
        const startSquare = this.square;

        this.movement.matrix.forEach((direction) => {
            const endCoordinates = [startCoordinates[0] + direction[0], startCoordinates[1] + direction[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];

            if (!endSquare.piece && !this.selfCheck(endSquare)) {
                moves.push(new Move(this, startSquare, endSquare));
                if (!this.hasMoved) {
                    const repeatedMove = this.repeatDirection(direction, endSquare);
                    repeatedMove.forEach((move) => {
                        moves.push(move);
                    });
                }
            // endSquare has opponenet piece and does not selfcheck
            } else if (endSquare.piece.color != this.color && !this.selfCheck(endSquare)) {
                moves.push(new Move(startSquare, endSquare));
            }
            
        });
        return moves;
    }

    repeatDirection(direction, startSquare) {
        const move = [];
        const startCoordinates = startSquare.coordinates;
        const endCoordinates = [startCoordinates[0] + direction[0], startCoordinates[1] + direction[1]];
        const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
        const endSquare = chessgame.board[endNotation];

        if (endSquare) {
            if (!endSquare.piece && !this.selfCheck(endSquare)) {
                move.push(new Move(this, startSquare, endSquare));
            }
        }
        return move;
    }
}

export default Pawn;
