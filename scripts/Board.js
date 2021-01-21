import Square from './Square.js';
import { Rook, Knight, Bishop, Queen, King, Pawn } from './Pieces.js'

class Board {
    constructor() {
        this.squares = this.constructBoard();
    }

    constructBoard() {
        const board = { };
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const blackSquares = ['a1', 'c1', 'e1', 'g1', 'b2', 'd2', 'f2', 'h2', 'a3', 'c3', 'e3', 'g3', 'b4', 'd4', 'f4', 'h4', 'a5', 'c5', 'e5', 'g5', 'b6', 'd6', 'f6', 'h6', 'a7', 'c7', 'e7', 'g7', 'b8', 'd8', 'f8', 'h8'];
        
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const notation = letters[i] + (j + 1);

                if (blackSquares.includes(notation)) {
                    board[notation] = new Square(notation, 'black');
                } else {
                    board[notation] = new Square(notation, 'white');
                }
            }
        }

        return board;
    }

    setUpBoard() {
        for (const notation in this.squares) {
            switch (notation) {
                case 'a1':
                case 'h1':
                    this.squares[notation].piece = new Rook('white', this.squares[notation]);
                    break;
                case 'b1':
                case 'g1':
                    this.squares[notation].piece = new Knight('white', this.squares[notation]);
                    break;
                case 'c1':
                case 'f1':
                    this.squares[notation].piece = new Bishop('white', this.squares[notation]);
                    break;
                case 'd1':
                    this.squares[notation].piece = new Queen('white', this.squares[notation]);
                    break;
                case 'e1':
                    this.squares[notation].piece = new King('white', this.squares[notation]);
                    break;
                case 'a2':
                case 'b2':
                case 'c2':
                case 'd2':
                case 'e2':
                case 'f2':
                case 'g2':
                case 'h2':
                    this.squares[notation].piece = new Pawn('white', this.squares[notation]);
                    break;
                case 'a8':
                case 'h8':
                    this.squares[notation].piece = new Rook('black', this.squares[notation]);
                    break;
                case 'b8':
                case 'g8':
                    this.squares[notation].piece = new Knight('black', this.squares[notation]);
                    break;
                case 'c8':
                case 'f8':
                    this.squares[notation].piece = new Bishop('black', this.squares[notation]);
                    break;
                case 'd8':
                    this.squares[notation].piece = new Queen('black', this.squares[notation]);
                    break;
                case 'e8':
                    this.squares[notation].piece = new King('black', this.squares[notation]);
                    break;
                case 'a7':
                case 'b7':
                case 'c7':
                case 'd7':
                case 'e7':
                case 'f7':
                case 'g7':
                case 'h7':
                    this.squares[notation].piece = new Pawn('black', this.squares[notation]);
            }
        }
    }
}

export default Board;
