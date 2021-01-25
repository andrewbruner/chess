import Piece from './Piece.js';

class Bishop extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'bishop'
        this.notation = 'B';
        this.movement = {
            matrix: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
            repeat: true
        };
    }
}

export default Bishop;
