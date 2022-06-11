const selectElement = document.querySelector("select");
const board = document.querySelector("#board");
let secretNumbers = [];
let clickCount = 0;


if (document.querySelector(".box")) {
  var boxes = document.querySelectorAll(".box");
  console.log("exists")
}


selectElement.addEventListener("change", () => {
  for (i = selectElement.value / 2; i >= 1; i--) {
    secretNumbers.push(parseInt(i));
    if (i == 1) {
      i = selectElement.value / 2 + 1;
    }
    if (secretNumbers.length == selectElement.value) {
      break;
    }
  }
  secretNumbers.sort(() => 0.5 - Math.random());

  for (x = selectElement.value; x >= 1; x--) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.number = secretNumbers[x - 1];
    board.appendChild(box);
    document.querySelector(".setup").style.display = "none";
  }
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.addEventListener("click", () => {
      clickCount++;

    });
  })
})


