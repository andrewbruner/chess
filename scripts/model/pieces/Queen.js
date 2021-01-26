import Piece from './Piece.js';

class Queen extends Piece {
    constructor(color, square) {
        super(color, square);
        this.name = 'queen';
        this.notation = 'Q';
        this.movement = {
            matrix: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
            repeat: true
        };
    }
}

export default Queen;
