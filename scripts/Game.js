import Player from './Player.js';
import Board from './Board.js';

class Game {
    constructor() {
        this.whitePlayer = new Player();
        this.blackPlayer = new Player();
        this.playerTurn = this.whitePlayer;

        this.board = new Board();
        this.history = [];
        this.captured = [];
    }
}

export default Game;

//     startGame() {
//         this.board.setUpBoard();
//     }

//     findMoves(piece) {
//         const alphaA = piece.square.notation.charAt(0);
//         const alpha1 = alphaA.charCodeAt(0) - 96;
//         const numericA = piece.square.notation.charAt(1);
//         const numeric1 = parseInt(numericA, 10);
//         const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//         const movement = piece.movement;
//         const moves = [];

//         if (piece.notation) {
//             movement.direction.forEach((move) => {
//                 let newNotation = null;
//                 if (letters[(alpha1 + move[0] - 1)]) {
//                     newNotation = letters[(alpha1 + move[0] - 1)].toString() + (numeric1 + move[1]).toString();
//                 }
//                 const newSquare = this.board.squares[newNotation];
//                 if (newSquare) {
//                     if (!newSquare.piece) {
//                         moves.push(new Move(piece, piece.square, newSquare));

//                         const repeatMove = (start) => {
//                             const newAlphaA = start.notation.charAt(0);
//                             const newAlpha1 = newAlphaA.charCodeAt(0) - 96;
//                             const newNumericA = start.notation.charAt(1);
//                             const newNumeric1 = parseInt(newNumericA, 10);

//                             let newNewNotation = null;
//                             if (letters[newAlpha1 + move[0] - 1]) {
//                                 newNewNotation = letters[(newAlpha1 + move[0] - 1)].toString() + (newNumeric1 + move[1]).toString();
//                             }
//                             const newNewSquare = this.board.squares[newNewNotation];
//                             if (newNewSquare) {
//                                 if (!newNewSquare.piece) {
//                                     moves.push(new Move(piece, piece.square, newNewSquare));
//                                     repeatMove(newNewSquare);
//                                 }
//                                 if (newNewSquare.piece) {
//                                     if (newNewSquare.piece.color != piece.color) {
//                                         moves.push(new Move(piece, piece.square, newNewSquare));
//                                     }
//                                 }
//                             }
//                         };

//                         if (movement.repeat) {
//                             repeatMove(newSquare);
//                         }

//                     }
//                     if (newSquare.piece) {
//                         if (newSquare.piece.color != piece.color) {
//                             moves.push(new Move(piece, piece.square, newSquare));
//                         }
//                     }
//                 }
//             });
//         } else {
//             movement.direction.forEach((move) => {
//                 let newNotation = null;
//                 if (letters[(alpha1 + move[0] - 1)]) {
//                     newNotation = letters[(alpha1 + move[0] - 1)].toString() + (numeric1 + move[1]).toString();
//                 }
//                 const newSquare = this.board.squares[newNotation];
//                 if (newSquare) {
//                     if (!newSquare.piece) {
//                         moves.push(new Move(piece, piece.square, newSquare));
//                         if (!piece.moved) {
//                             const newAlphaA = newSquare.notation.charAt(0);
//                             const newAlpha1 = newAlphaA.charCodeAt(0) - 96;
//                             const newNumericA = newSquare.notation.charAt(1);
//                             const newNumeric1 = parseInt(newNumericA, 10);

//                             let newNewNotation = null;
//                             if (letters[newAlpha1 + move[0] - 1]) {
//                                 newNewNotation = letters[(newAlpha1 + move[0] - 1)].toString() + (newNumeric1 + move[1]).toString();
//                             }
//                             const newNewSquare = this.board.squares[newNewNotation];
//                             if (newNewSquare) {
//                                 if (!newNewSquare.piece) {
//                                     moves.push(new Move(piece, piece.square, newNewSquare));
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//             movement.attack.forEach((attack) => {
//                 let newNotation = null;
//                 if (letters[(alpha1 + attack[0] - 1)]) {
//                     newNotation = letters[(alpha1 + attack[0] - 1)].toString() + (numeric1 + attack[1]).toString();
//                 }
//                 const newSquare = this.board.squares[newNotation];
//                 if (newSquare) {
//                     if (newSquare.piece) {
//                         if (newSquare.piece.color != piece.color) {
//                             moves.push(new Move(piece, piece.square, newSquare));
//                         }
//                     }
//                 }
//             });
//         }

//         this.selectedPiece = piece;
        
//         return moves;

//     }

//     chooseMove(piece, square) {
//         const moves = this.findMoves(piece);

//         moves.forEach((move) => {
//             if (square.notation == move.end.notation) {
//                 move.movePiece();
//             }
//         });

//         delete this.selectedPiece;
//     }
// }