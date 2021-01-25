class Piece {
    constructor(color, square) {
        this.color = color;
        this.square = square;
        this.hasMoved = false;
    }

    get moves() {
        const moves = [];
        const startCoordinates = this.square.coordinates;
        const startSquare = this.square;

        this.movement.matrix.forEach((direction) => {
            const endCoordinates = [startCoordinates[0] + direction[0], startCoordinates[1] + direction[1]];
            const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
            const endSquare = chessgame.board[endNotation];

            // if endSquare exists
            if (endSquare) {
                // if endSquare is empty and move does not selfcheck
                if (!endSquare.piece && !this.selfCheck(endSquare)) {
                    moves.push(new Move(this, startSquare, endSquare));
                    // repeat direction
                    if (this.movement.repeat) {
                        const repeatedMoves = this.repeatDirection(direction, endSquare);
                        repeatedMoves.forEach((move) => {
                            moves.push(move);
                        });
                    }
                // endSquare has opponenet piece and does not selfcheck
                } else if (endSquare.piece.color != this.color && !this.selfCheck(endSquare)) {
                    moves.push(new Move(startSquare, endSquare));
                }
            }
        });
        return moves;
    }

    repeatDirection(direction, startSquare) {
        const moves = [];
        const startCoordinates = startSquare.coordinates;
        const endCoordinates = [startCoordinates[0] + direction[0], startCoordinates[1] + direction[1]];
        const endNotation = String.fromCharCode(endCoordinates[0] + 97) + (endCoordinates[1] + 1);
        const endSquare = chessgame.board[endNotation];

        if (endSquare) {
            if (!endSquare.piece && !this.selfCheck(endSquare)) {
                moves.push(new Move(this, startSquare, endSquare));
                if (this.movement.repeat != 'once') {
                    const repeatedMoves = this.repeatDirection(direction, endSquare);
                    repeatedMoves.forEach((move) => {
                        moves.push(move);
                    });
                }
            } else if (endSquare.piece.color != this.color && !this.selfCheck(endSquare)) {
                moves.push(new Move(startSquare, endSquare))
            }
        }
        return moves;
    }

    selfCheck(endSquare) {
        return false;
    }
}

export default Piece;
