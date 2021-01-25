import Piece from './Piece.js';

class Rook extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'rook';
        this.notation = 'R';
        this.movement = {
            matrix: [[0, 1], [1, 0], [0, -1], [-1, 0]],
            repeat: true,
        };
    }
}

export default Rook;
