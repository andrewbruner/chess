import Piece from './Piece.js';

class Rook extends Piece {
    constructor(color, square) {
        super(color);
        this.notation = 'R';
        this.square = square;
        this.movement = {
            direction: [[0, 1], [1, 0], [0, -1], [-1, 0]],
            repeat: true,
        };
    }
}

export default Rook;

// getMoves() {
//     const alphaA = this.square.charAt(0);
//     const alpha1 = alphaA.charCodeAt(0) - 96;
//     const numericA = this.square.charAt(1);
//     const numeric1 = parseInt(numericA, 10);
//     const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//     const moves = [];

//     if (this.name == 'rook') {
//         for (let i = 1; numeric1 + i < 9; i++) {
//             let move = alphaA + (numeric1 + i);
//             moves.push(move);
//         }
//         for (let i = 1; alpha1 + i < 9; i++) {
//             let move = letters[(alpha1 + i) - 1] + numericA;
//             moves.push(move);
//         }
//         for (let i = 1; numeric1 - i > 0; i++) {
//             let move = alphaA + (numeric1 - i);
//             moves.push(move);
//         }
//         for (let i = 1; alpha1 - i > 0; i++) {
//             let move = letters[(alpha1 - i) - 1] + numericA;
//             moves.push(move);
//         }
//     }

//     return moves;
// }