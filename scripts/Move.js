import chessgame from './script.js';

class Move {
    constructor(piece, startSquare, endSquare, {
        willCapture = false,
        provokesEnPassant = false,
        isEnPassant = false,
        isCastle = false,
        isPromotion = false
    } = { }) {
        this.piece = piece;
        this.startSquare = startSquare;
        this.endSquare = endSquare;
        this.willCapture = willCapture;
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
        if (this.willCheck) {
            notation += '+'
        }
        return notation;
    }

    get willCheck() {
        let check = false;

        let kingSquare = null;
        for (const notation in chessgame.board) {
            if (chessgame.board[notation].piece?.name == 'king' && chessgame.board[notation].piece?.color != this.piece.color) {
                kingSquare = chessgame.board[notation];
            }
        }

        let originalEndPiece = null;
        if (this.endSquare.piece) {
            originalEndPiece = this.endSquare.piece;
        }

        this.startSquare.piece = null;
        this.endSquare.piece = this.piece;
        this.piece.square = this.endSquare;

        for (const notation in chessgame.board) {
            if (chessgame.board[notation].piece && chessgame.board[notation].piece?.color == this.piece.color) {
                chessgame.board[notation].piece.moves.forEach((newMove) => {
                    if (newMove.endSquare == kingSquare) {
                        check = true;
                    }
                });
            }
        }

        this.endSquare.piece = originalEndPiece;
        this.startSquare.piece = this.piece;
        this.piece.square = this.startSquare;

        return check;
    }
}

export default Move;
