class Move {
    constructor(piece, start, end) {
        this.piece = piece;
        this.start = start;
        this.end = end;
    }

    movePiece() {
        console.log('Piece moved!');
    }
}

export default Move;
