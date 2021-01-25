import Square from './Square.js';
import { Rook, Knight, Bishop, Queen, King, Pawn } from './Pieces.js'

class Board {
    constructor() {
        this.a1 = new Square('a1', [0, 0], 'dark');
        this.a2 = new Square('a2', [0, 1], 'light');
        this.a3 = new Square('a3', [0, 2], 'dark');
        this.a4 = new Square('a4', [0, 3], 'light');
        this.a5 = new Square('a5', [0, 4], 'dark');
        this.a6 = new Square('a6', [0, 5], 'light');
        this.a7 = new Square('a7', [0, 6], 'dark');
        this.a8 = new Square('a8', [0, 7], 'light');

        this.b1 = new Square('b1', [1, 0], 'light');
        this.b2 = new Square('b2', [1, 1], 'dark');
        this.b3 = new Square('b3', [1, 2], 'light');
        this.b4 = new Square('b4', [1, 3], 'dark');
        this.b5 = new Square('b5', [1, 4], 'light');
        this.b6 = new Square('b6', [1, 5], 'dark');
        this.b7 = new Square('b7', [1, 6], 'light');
        this.b8 = new Square('b8', [1, 7], 'dark');

        this.c1 = new Square('c1', [2, 0], 'dark');
        this.c2 = new Square('c2', [2, 1], 'light');
        this.c3 = new Square('c3', [2, 2], 'dark');
        this.c4 = new Square('c4', [2, 3], 'light');
        this.c5 = new Square('c5', [2, 4], 'dark');
        this.c6 = new Square('c6', [2, 5], 'light');
        this.c7 = new Square('c7', [2, 6], 'dark');
        this.c8 = new Square('c8', [2, 7], 'light');

        this.d1 = new Square('d1', [3, 0], 'light');
        this.d2 = new Square('d2', [3, 1], 'dark');
        this.d3 = new Square('d3', [3, 2], 'light');
        this.d4 = new Square('d4', [3, 3], 'dark');
        this.d5 = new Square('d5', [3, 4], 'light');
        this.d6 = new Square('d6', [3, 5], 'dark');
        this.d7 = new Square('d7', [3, 6], 'light');
        this.d8 = new Square('d8', [3, 7], 'dark');

        this.e1 = new Square('e1', [4, 0], 'dark');
        this.e2 = new Square('e2', [4, 1], 'light');
        this.e3 = new Square('e3', [4, 2], 'dark');
        this.e4 = new Square('e4', [4, 3], 'light');
        this.e5 = new Square('e5', [4, 4], 'dark');
        this.e6 = new Square('e6', [4, 5], 'light');
        this.e7 = new Square('e7', [4, 6], 'dark');
        this.e8 = new Square('e8', [4, 7], 'light');

        this.f1 = new Square('f1', [5, 0], 'light');
        this.f2 = new Square('f2', [5, 1], 'dark');
        this.f3 = new Square('f3', [5, 2], 'light');
        this.f4 = new Square('f4', [5, 3], 'dark');
        this.f5 = new Square('f5', [5, 4], 'light');
        this.f6 = new Square('f6', [5, 5], 'dark');
        this.f7 = new Square('f7', [5, 6], 'light');
        this.f8 = new Square('f8', [5, 7], 'dark');

        this.g1 = new Square('g1', [6, 0], 'dark');
        this.g2 = new Square('g2', [6, 1], 'light');
        this.g3 = new Square('g3', [6, 2], 'dark');
        this.g4 = new Square('g4', [6, 3], 'light');
        this.g5 = new Square('g5', [6, 4], 'dark');
        this.g6 = new Square('g6', [6, 5], 'light');
        this.g7 = new Square('g7', [6, 6], 'dark');
        this.g8 = new Square('g8', [6, 7], 'light');

        this.h1 = new Square('h1', [7, 0], 'light');
        this.h2 = new Square('h2', [7, 1], 'dark');
        this.h3 = new Square('h3', [7, 2], 'light');
        this.h4 = new Square('h4', [7, 3], 'dark');
        this.h5 = new Square('h5', [7, 4], 'light');
        this.h6 = new Square('h6', [7, 5], 'dark');
        this.h7 = new Square('h7', [7, 6], 'light');
        this.h8 = new Square('h8', [7, 7], 'dark');

        this.setUpBoard();
    }

    setUpBoard() {
        this.a1.piece = new Rook('white', this.a1);
        this.a2.piece = new Pawn('white', this.a2);
        this.a7.piece = new Pawn('black', this.a7);
        this.a8.piece = new Rook('black', this.a8);

        this.b1.piece = new Knight('white', this.b1);
        this.b2.piece = new Pawn('white', this.b2);
        this.b7.piece = new Pawn('black', this.b7);
        this.b8.piece = new Knight('black', this.b8);

        this.c1.piece = new Bishop('white', this.c1);
        this.c2.piece = new Pawn('white', this.c2);
        this.c7.piece = new Pawn('black', this.c7);
        this.c8.piece = new Bishop('black', this.c8);

        this.d1.piece = new Queen('white', this.d1);
        this.d2.piece = new Pawn('white', this.d2);
        this.d7.piece = new Pawn('black', this.d7);
        this.d8.piece = new Queen('black', this.d8);

        this.e1.piece = new King('white', this.e1);
        this.e2.piece = new Pawn('white', this.e2);
        this.e7.piece = new Pawn('black', this.e7);
        this.e8.piece = new King('black', this.e8);

        this.f1.piece = new Bishop('white', this.f1);
        this.f2.piece = new Pawn('white', this.f2);
        this.f7.piece = new Pawn('black', this.f7);
        this.f8.piece = new Bishop('black', this.f8);

        this.g1.piece = new Knight('white', this.g1);
        this.g2.piece = new Pawn('white', this.g2);
        this.g7.piece = new Pawn('black', this.g7);
        this.g8.piece = new Knight('black', this.g8);

        this.h1.piece = new Rook('white', this.h1);
        this.h2.piece = new Pawn('white', this.h2);
        this.h7.piece = new Pawn('black', this.h7);
        this.h8.piece = new Rook('black', this.h8);
    }
}

export default Board;

//     constructBoard() {
//         const board = { };
//         const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//         const blackSquares = ['a1', 'c1', 'e1', 'g1', 'b2', 'd2', 'f2', 'h2', 'a3', 'c3', 'e3', 'g3', 'b4', 'd4', 'f4', 'h4', 'a5', 'c5', 'e5', 'g5', 'b6', 'd6', 'f6', 'h6', 'a7', 'c7', 'e7', 'g7', 'b8', 'd8', 'f8', 'h8'];
        
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 const notation = letters[i] + (j + 1);

//                 if (blackSquares.includes(notation)) {
//                     board[notation] = new Square(notation, 'black');
//                 } else {
//                     board[notation] = new Square(notation, 'white');
//                 }
//             }
//         }

//         return board;
//     }

//     setUpBoard() {
//         for (const notation in this.squares) {
//             switch (notation) {
//                 case 'a1':
//                 case 'h1':
//                     this.squares[notation].piece = new Rook('white', this.squares[notation]);
//                     break;
//                 case 'b1':
//                 case 'g1':
//                     this.squares[notation].piece = new Knight('white', this.squares[notation]);
//                     break;
//                 case 'c1':
//                 case 'f1':
//                     this.squares[notation].piece = new Bishop('white', this.squares[notation]);
//                     break;
//                 case 'd1':
//                     this.squares[notation].piece = new Queen('white', this.squares[notation]);
//                     break;
//                 case 'e1':
//                     this.squares[notation].piece = new King('white', this.squares[notation]);
//                     break;
//                 case 'a2':
//                 case 'b2':
//                 case 'c2':
//                 case 'd2':
//                 case 'e2':
//                 case 'f2':
//                 case 'g2':
//                 case 'h2':
//                     this.squares[notation].piece = new Pawn('white', this.squares[notation]);
//                     break;
//                 case 'a8':
//                 case 'h8':
//                     this.squares[notation].piece = new Rook('black', this.squares[notation]);
//                     break;
//                 case 'b8':
//                 case 'g8':
//                     this.squares[notation].piece = new Knight('black', this.squares[notation]);
//                     break;
//                 case 'c8':
//                 case 'f8':
//                     this.squares[notation].piece = new Bishop('black', this.squares[notation]);
//                     break;
//                 case 'd8':
//                     this.squares[notation].piece = new Queen('black', this.squares[notation]);
//                     break;
//                 case 'e8':
//                     this.squares[notation].piece = new King('black', this.squares[notation]);
//                     break;
//                 case 'a7':
//                 case 'b7':
//                 case 'c7':
//                 case 'd7':
//                 case 'e7':
//                 case 'f7':
//                 case 'g7':
//                 case 'h7':
//                     this.squares[notation].piece = new Pawn('black', this.squares[notation]);
//             }
//         }
//     }
// }

// export default Board;
