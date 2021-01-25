import chessgame from './script.js';

class Move {
    constructor(piece, startSquare, endSquare) {
        this.piece = piece;
        this.startSquare = startSquare;
        this.endSquare = endSquare;
    }

    get notation() {
        console.log(this.piece.notation, this.endSquare.notation);
        return this.piece.notation + this.endSquare.notation
    }

    get willCapture() {

    }

    get willCheck() {

    }

    get isEnPassant() {

    }

    get isCastle() {

    }

    get isPromotion() {

    }
}

export default Move;
