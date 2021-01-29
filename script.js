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

const makeAiMove = () => {
    const moves = chessgame.moves({ verbose: true });
    const captureMoves = [];
    let chosenMoves = null;

    if (!moves.length) { return; }

    moves.forEach((move) => {
        if (move.captured) { captureMoves.push(move); }
    });
    if (captureMoves.length) { chosenMoves = captureMoves; }
    if (!captureMoves.length) { chosenMoves = moves; }
    const randomIdx = Math.floor(Math.random() * chosenMoves.length)
    chessgame.move(chosenMoves[randomIdx].san);
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
