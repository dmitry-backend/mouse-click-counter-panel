let count = 0;

const valueEl = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateUI() {
  valueEl.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  ++count;
  updateUI();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    --count;
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    ++count;
  }

  if (event.key === "ArrowDown" && count > 0) {
    --count;
  }

  updateUI();
});
