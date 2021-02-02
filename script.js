// initialize new chess.js
const chessgame = new Chess()

// define variables
const whiteSquareGrey = '#a9a9a9'
const blackSquareGrey = '#696969'

// function to add grey highlight to square
const greySquare = (square) => {
    const squareDiv = document.querySelector(`#chessboard .square-${square}`);
    let background = whiteSquareGrey;
    if (squareDiv.classList.contains('black-3c85d')) {
        background = blackSquareGrey;
    }
    squareDiv.style.background = background;
};

// function to remove grey highlights from all squares
const removeGreySquares = () => {
    document.querySelectorAll('#chessboard .square-55d63')
        .forEach((square) => { square.style.background = '' });
};

const pieceValues = {
    p: 1,
    n: 3,
    b: 3,
    r: 5,
    q: 9,
    k: 1000
};

const evaluateBoard = (board) => {
    let score = 0;
    board.forEach((rank) => {
        rank.forEach((square) => {
            if (square) {
                if (square.color == 'w') {
                    score += pieceValues[square.type];
                } else {
                    score -= pieceValues[square.type];
                }
            }
        })
    });
    return score;
};

const makeAiMove = () => {
    let highScore = 0;
    let bestMoves =[];
    let moves = chessgame.moves();
    console.log(moves);
    moves.forEach((move) => {
        chessgame.move(move);
        const score = evaluateBoard(chessgame.board())
        if (score == highScore) {
            bestMoves.push(move);
        }
        if (score < highScore) {
            highScore = score;
            bestMoves = [move];
        }
        chessgame.undo();
    });
    if (bestMoves) {
        moves = bestMoves;
    }
    console.log(moves);
    chessgame.move(moves[Math.floor(Math.random() * moves.length)]);
    chessboard.position(chessgame.fen());
}

// CONFIG FUNCTIONS
const onMouseoverSquare = (square, piece, position, orientation) => {
    const moves = chessgame.moves({ square: square, verbose: true });
    if (moves.length === 0) { return; }
    greySquare(square);
    moves.forEach((move) => { greySquare(move.to) });
};

const onMouseoutSquare = (square, piece, position, orientation) => {
    removeGreySquares();
};

const onDragStart = (source, piece, position, orientation) => {
    if (chessgame.game_over()) { return false };
    if (piece.charAt[0] == 'b') { return false }
};

const onDrop = (source, target, piece, newPosition, oldPosition, orientation) => {
    removeGreySquares();
    const move = chessgame.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });
    if (move == null) { return 'snapback' };
    window.setTimeout(makeAiMove, 250);
};

const onSnapEnd = (source, target, piece) => {
  chessboard.position(chessgame.fen());
};

// chessboard.js configuration
const config = {
    draggable: true,
    position: 'start',
    onMouseoverSquare: onMouseoverSquare,
    onMouseoutSquare: onMouseoutSquare,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
};

// initialize chessboard.js
chessboard = Chessboard('chessboard', config);

// export chess.js to browser window
window.chessgame = chessgame;
