import Piece from './Piece.js';

class Queen extends Piece {
    constructor(color, square) {
        super(color);
        this.notation = 'Q';
        this.square = square;
        this.movement = {
            direction: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
            repeat: true
        };
    }
}

export default Queen;
