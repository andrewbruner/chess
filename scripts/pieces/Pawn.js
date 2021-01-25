import Piece from './Piece.js';

class Pawn extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'pawn';
        this.notation = '';
        this.moved = false;
    }

    get movement() {
        const movement = { };
        if (this.color == 'white') {
            movement.matrix = [[0, 1]];
            movement.attack = [[1, 1], [-1, 1]];
        } else {
            movement.matrix = [[0, -1]];
            movement.attack = [[1, -1], [-1, -1]];
        }
        return movement;
    }
}

export default Pawn;
