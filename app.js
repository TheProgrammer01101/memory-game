const selectElement = document.querySelector("select");
const board = document.querySelector("#board");
let secretNumbers = [];
let clickCount = 0;

let match = [];

if (document.querySelector(".box")) {
  var boxes = document.querySelectorAll(".box");
  console.log("exists")
}


selectElement.addEventListener("change", () => {

  // creating secret numbers according to the size of the board
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

  // setting up the board
  for (x = selectElement.value; x >= 1; x--) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.number = secretNumbers[x - 1];
    board.appendChild(box);
    document.querySelector(".setup").style.display = "none";
  }
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.addEventListener("click", (emoji) => {
      match.push(box.dataset.number);
      switch (parseInt(box.dataset.number)) {
        case 1:
          emoji = "🤥";
          break;
        case 2:
          emoji = "😄";
          break;

        case 3:
          emoji = "🙃";
          break;

        case 4:
          emoji = "😎";
          break;

        case 5:
          emoji = "😳";
          break;

        case 6:
          emoji = "😱";
          break;

        case 7:
          emoji = "🥵";
          break;

        case 8:
          emoji = "😶‍🌫️";
          break;

        case 9:
          emoji = "🤢";
          break;

        case 10:
          emoji = "🤡";
          break;

        case 11:
          emoji = "💩";
          break;

        case 12:
          emoji = "👻";
          break;
      }
      if (match.length >= 2) {
        if (match[0] == match[1]) {
          let matchingBox = document.querySelectorAll(`[data-number='${box.dataset.number}']`);

          matchingBox.forEach(mb => {
            mb.innerHTML = emoji;
            mb.dataset.done = "true";
          })

          console.log("yes")
          match = [];
        }
        else {
          boxes.forEach(b => {
            if (b.dataset.done != "true") {
              b.innerHTML = "";
            }
          })
          match = [];
          console.log("non match")
        }
      }
      // box.innerHTML = emoji;


    });
  })
})


