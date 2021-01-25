import Piece from './Piece.js';

class King extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'king';
        this.notation = 'K';
        this.movement = {
            matrix: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
            repeat: false
        };
    }
}

export default King;
