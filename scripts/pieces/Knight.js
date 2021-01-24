import Piece from './Piece.js';

class Knight extends Piece {
    constructor(color, square) {
        super(color, square);
        this.notation = 'N';
        this.movement = {
            direction: [[1, 2], [2, 1], [2, -1], [1, -2], [-1,-2], [-2, -1], [-2, 1], [-1, 2]],
            repeat: false
        };
    }
}

export default Knight;
