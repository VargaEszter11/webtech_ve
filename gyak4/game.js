let targetNumber = Math.floor(Math.random() * 1000001);
const maxAttempts = 20;
let attempt = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const messageField = document.getElementById("message");
const attemptsField = document.getElementById("attempts");
const restartButton = document.getElementById("restartButton");

// Gombkattintásra vagy Enterre tippelés
guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

restartButton.addEventListener("click", restartGame);

function checkGuess() {
    let guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < 0 || guess > 1000000) {
        messageField.innerText = "❌ Kérlek, adj meg egy érvényes számot 0 és 1 000 000 között!";
        messageField.style.color = "red";
        return;
    }

    attempt++;
    attemptsField.innerText = `Próbálkozások: ${attempt} / ${maxAttempts}`;

    if (guess === targetNumber) {
        messageField.innerText = `🎉 Gratulálok! ${attempt} lépésből eltaláltad!`;
        messageField.style.color = "green";
        endGame();
    } else if (guess > targetNumber) {
        messageField.innerText = `${attempt}. tipp nem talált: 🔽 A megoldás kisebb.`;
        messageField.style.color = "blue";
    } else {
        messageField.innerText = `${attempt}. tipp nem talált: 🔼 A megoldás nagyobb.`;
        messageField.style.color = "blue";
    }

    if (attempt >= maxAttempts) {
        messageField.innerText = `😞 Sajnos nem sikerült! A helyes szám: ${targetNumber}`;
        messageField.style.color = "red";
        endGame();
    }

    guessInput.value = "";
    guessInput.focus(); // Tipp után automatikusan fókuszál a beviteli mezőre
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = "block";
}

function restartGame() {
    targetNumber = Math.floor(Math.random() * 1000001);
    attempt = 0;
    attemptsField.innerText = `Próbálkozások: 0 / ${maxAttempts}`;
    messageField.innerText = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = "";
    restartButton.style.display = "none";
    guessInput.focus(); // Új játék után azonnal fókuszál a beviteli mezőre
}


