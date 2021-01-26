import chessgame from './script.js';

class Move {
    constructor(piece, startSquare, endSquare, {
        willCapture = false,
        willCheck = false,
        provokesEnPassant = false,
        isEnPassant = false,
        isCastle = false,
        isPromotion = false
    } = { }) {
        this.piece = piece;
        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.willCapture = willCapture;
        this.willCheck = willCheck;
        this.provokesEnPassant = provokesEnPassant;
        this.isEnPassant = isEnPassant;
        this.isCastle = isCastle;
        this.isPromotion = isPromotion;
    }

    get notation() {
        let notation = this.piece.notation;
        if (this.willCapture) {
            if (!this.piece.notation) {
                notation += this.piece.startSquare.notation.charAt(0);
            }
            notation += 'x';
        }
        notation += this.endSquare.notation;
        return notation;
    }
}

export default Move;
