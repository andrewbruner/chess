const view = {
    update() {
        console.log("view updated!");
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
