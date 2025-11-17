const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredientsList = document.querySelectorAll("#ingredientsList li");

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateSpell() {
    let countdown = 3;
    spellArea.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        spellArea.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval); 

            const randomIndex = Math.floor(Math.random() * ingredientsList.length);
            const randomIngredient = ingredientsList[randomIndex].textContent;
            
            spellArea.textContent = "your magical spell is " + randomIngredient;
            
            spellArea.style.backgroundColor = getRandomColor();
        }
    }, 1000);
}

function resetSpell () {
    spellArea.textContent = "";
    spellArea.style.backgroundColor = "";
}

generateButton.addEventListener("click", generateSpell);
resetButton.addEventListener("click", resetSpell);