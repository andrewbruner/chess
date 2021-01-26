import Piece from './Piece.js';
import Move from '../Move.js';
import chessgame from '../script.js';

class Pawn extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'pawn';
        this.notation = '';
    }

    get movement() {
        const movement = { };
        if (this.color == 'white') {
            movement.advance = [[0, 1]];
            movement.attack = [[1, 1], [-1, 1]];
        } else {
            movement.advance = [[0, -1]];
            movement.attack = [[1, -1], [-1, -1]];
        }
        return movement;
    }

    get moves() {
        const moves = [];
        const startCoordinates = this.square.coordinates;
        const startSquare = this.square;

        // find advancements
        this.movement.advance.forEach((route) => {
            const endCoordinates = [startCoordinates[0] + route[0], startCoordinates[1] + route[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];

            // end square is empty and move does not selfcheck
            if (!endSquare.piece) {
                moves.push(new Move(this, startSquare, endSquare));
                // if pawn has not moved yet
                if (!this.hasMoved) {
                    const newEndCoordinates = [startCoordinates[0] + route[0] + route[0], startCoordinates[1] + route[1] + route[1]];
                    const newEndNotation = String.fromCharCode(newEndCoordinates[0] + 97) + (newEndCoordinates[1] + 1);
                    const newEndSquare = chessgame.board[newEndNotation];
                    // next end square is empty and move does not selfcheck
                    if (!newEndSquare.piece) {
                        moves.push(new Move(this, startSquare, newEndSquare));
                    }
                }
            }
        });

        // find attacks
        this.movement.attack.forEach((capture) => {
            const endCoordinates = [startCoordinates[0] + capture[0], startCoordinates[1] + capture[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];

            // end square on board
            if (endSquare) {
                // end square holds piece
                if (endSquare.piece) {
                    // end square piece is opponent and move does not selfcheck
                    if (endSquare.piece.color != this.color) {
                        moves.push(new Move(this, startSquare, endSquare));
                    }
                }
            }
        });
        
        return moves;
    }
}

export default Pawn;
