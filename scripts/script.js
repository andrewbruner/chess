import Game from './model/Game.js';
import controller from './controller/controller.js';

const chessgame = new Game();

window.chessgame = chessgame;

document.querySelector('.chessboard').addEventListener('click', controller.handleClick);

export default chessgame;

// const handleClick = (event) => {
//     const target = event.target;

//     // if no piece selected...
//     if (!chessgame.selectedPiece) {
//         // and if piece is clicked
//         if (target.classList.contains('piece')) {
//             const squareNotation = target.parentNode.dataset.square;  // eg 'a1'
//             const piece = chessgame.board.squares[squareNotation].piece; // eg Pawn Object
//             // find moves for piece
//             const moves = chessgame.findMoves(piece); // eg [Move Object, Move Object, Move Object]
//             // for each Move Object
//             moves.forEach((move) => {
//                 const endSquareNotation = move.end.notation;
//                 // add highlight class to end square div
//                 document.querySelector(`[data-square="${endSquareNotation}"]`).classList.add('highlight');
//             });
//         }
//         // else nothing
//     // else if piece is selected
//     } else {
//         const selectedPiece = chessgame.selectedPiece;
//         const startDiv = document.querySelector(`[data-square="${selectedPiece.square.notation}"]`);
//         const startNotation = startDiv.dataset.square;
//         const endDiv = target.classList.contains('square') ? target : (target.classList.contains('piece') ? target.parentNode : null);
//         const endNotation = endDiv.dataset.square;
//         const endSquare = chessgame.board.squares[endNotation];

//         // and if target is square or piece
//         if (target.classList.contains('square') || target.classList.contains('piece')) {
//             // attempt move of selected piece
//             chessgame.chooseMove(selectedPiece, endSquare);
//             // remove highlights
//             document.querySelectorAll('.highlight').forEach((square) => {
//                 square.classList.remove('highlight');
//             });
//             // if piece moved
//             if (!chessgame.board.squares[startNotation].piece) {
//                 const pieceImg = startDiv.querySelector('.piece');
//                 // remove piece image from startDiv
//                 startDiv.removeChild(pieceImg);
//                 // if piece in endDiv
//                 if (endDiv.querySelector('.piece')) {
//                     // remove piece image from endDiv
//                     endDiv.removeChild(endDiv.querySelector('.piece'));
//                 }
//                 endDiv.appendChild(pieceImg);
//                 // create image element
//             }
//         }        
//     }
// };