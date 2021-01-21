import Piece from './Piece.js';

class Bishop extends Piece {
    constructor(color, square) {
        super(color);
        this.notation = 'B';
        this.square = square;
        this.movement = {
            direction: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
            repeat: true
        };
    }
}

export default Bishop;
