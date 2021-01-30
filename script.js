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
    // black can capture in 2
    const betterMoves = [];
    // black can capture now
    const bestMoves = [];

    // find moves
    let moves = chessgame.moves({ verbose: true });

    // if no moves, checkmate
    if (!moves.length) { return; }

    // for each move
    moves.forEach((move) => {
        // if it captures
        if (move.captured) {
            // push to best moves
            bestMoves.push(move);
            // go to next move
            return;
        }
        // pretend to move
        let chessgame2 = new Chess(chessgame.fen());
        const from = move.from;
        const to = move.to;
        chessgame2.put(chessgame2.remove(from), to);
        // find next moves
        const nextMoves = chessgame2.moves({ verbose: true });
        // for each next move
        nextMoves.forEach((nextMove) => {
            // if it captures
            if (nextMove.captured) {
                // push to better moves (if not already there)
                if (!betterMoves.some((betterMove) => { betterMove == move })) {
                    betterMoves.push(move);
                }
            }
        });
    });

    if (betterMoves.length) {
        moves = betterMoves;
    }
    if (bestMoves.length) {
        moves = bestMoves;
    }

    const sans = [];
    moves.forEach((move) => { sans.push(move.san) });
    console.log(sans);
    const randomIdx = Math.floor(Math.random() * moves.length)
    const randomMove = moves[randomIdx];
    console.log(randomMove.san);
    chessgame.move(randomMove.san);
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
