function yesAnswer() {
    const response = document.getElementById('response');
    response.textContent = "Yay! I love you! 💖";
    response.style.display = 'block';
}

function shrinkNoButton() {
    const noButton = document.getElementById('noButton');
    noButtonClickCount++;

    if (noButtonClickCount >= 3) {
        noButton.style.display = 'none';
    } else {
        let currentWidth = noButton.offsetWidth;
        let currentHeight = noButton.offsetHeight;

        currentWidth -= 10;
        currentHeight -= 5;
        noButton.style.width = `${currentWidth}px`;
        noButton.style.height = `${currentHeight}px`;
        noButton.style.fontSize = `${currentHeight / 2}px`;
    }
}