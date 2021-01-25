import Piece from './Piece.js';
import Move from '../Move.js';
import chessgame from '../script.js';

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
