import Game from './model/Game.js';
import controller from './controller/controller.js';

const chessgame = new Game();

window.chessgame = chessgame;

document.querySelector('.chessboard').addEventListener('click', controller.handleClick);

export default chessgame;
