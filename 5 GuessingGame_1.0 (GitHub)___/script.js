const guessBtn = document.getElementById('guessBtn');
const result = document.getElementById('result');

guessBtn.addEventListener('click', () => {
    const guess = Math.floor(Math.random() * 10) + 1;
    result.value = guess;
});