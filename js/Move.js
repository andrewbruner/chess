import chessgame from '../script.js';

class Move {
    constructor(piece, start, end) {
        this.piece = piece;
        this.start = start;
        this.end = end;
    }

    movePiece() {
        // if piece in end square, capture!
        if (this.end.piece) {
            chessgame.capturedPieces.push(this.end.piece);
            this.end.piece.square = null;
        }
        // put piece into end square
        this.end.piece = this.piece;
        this.piece.square = this.end;
        // remove piece from start square
        delete this.start.piece;
        // update pawn first movement
        if (!this.piece.notation) {
            this.piece.moved = true;
        }
    }
}

export default Move;
