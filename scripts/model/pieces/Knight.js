import Piece from './Piece.js';

class Knight extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'knight';
        this.notation = 'N';
        this.movement = {
            matrix: [[1, 2], [2, 1], [2, -1], [1, -2], [-1,-2], [-2, -1], [-2, 1], [-1, 2]],
            repeat: false
        };
    }
}

export default Knight;
