import Piece from './Piece.js';

class King extends Piece {
    constructor(color, square) {
        super(color, square);
        this.notation = 'K';
        this.movement = {
            direction: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
            repeat: false
        };
    }
}

export default King;
