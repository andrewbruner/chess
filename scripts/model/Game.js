import Player from './Player.js';
import Board from './Board.js';

class Game {
    constructor() {
        this.whitePlayer = new Player();
        this.blackPlayer = new Player();
        this.playerTurn = this.whitePlayer;

        this.board = new Board();
        this.history = [];
        this.captured = {
            white: [],
            black: []
        };
    }

    
}

export default Game;
