// import dependencies
import Game from './model/Game.js';
import controller from './controller/controller.js';

// start new game
const chessgame = new Game();

// add event listener for chessboard clicks
document
    .querySelector('.chessboard')
    .addEventListener('click', controller.handleClick);

// enable chessgame access in browser console
window.chessgame = chessgame;

// export chessgame
export default chessgame;
