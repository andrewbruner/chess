const view = {
    update(startNotation, endNotation) {
        const pieceImg = document.querySelector(`[data-notation="${startNotation}"] [data-type="piece"]`);
        const capturedImg = document.querySelector(`[data-notation="${endNotation}"] [data-type="piece"]`);
        const startDiv = document.querySelector(`[data-notation="${startNotation}"]`);
        const endDiv = document.querySelector(`[data-notation="${endNotation}"]`);

        startDiv.removeChild(pieceImg);
        if (capturedImg) {
            endDiv.removeChild(capturedImg);
        }
        endDiv.appendChild(pieceImg)
    },

    highlightMove(move) {
        const notation = move.endSquare.notation;
        const selector = `[data-notation ="${notation}"]`;
        const squareDiv = document.querySelector(selector);
        squareDiv.classList.add("highlight");
    },

    resetHighlights() {
        const squareDivs = document.querySelectorAll('.highlight');
        squareDivs.forEach((squareDiv) => {
            squareDiv.classList.remove("highlight");
        });
    }
};

export default view;
