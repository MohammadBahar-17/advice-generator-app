const advice = document.querySelector(".advice");
const quote = document.querySelector(".quote");
const diceButton = document.querySelector(".dice-container");

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }
    const { slip } = await response.json();
    quote.textContent = slip.advice;
    advice.textContent = `Advice #${slip.id}`;
  } catch (error) {
    alert(error.message);
  }
};

diceButton.addEventListener("click", fetchAdvice);
