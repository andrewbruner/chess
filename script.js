document.querySelector('.chessboard').addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('piece')) {
        e.target.classList.add('highlight');
    };
});

document.querySelector('.chessboard').addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('piece')) {
        e.target.classList.remove('highlight')
    }
});