const container = document.querySelector(".card-grid");
const flips = document.querySelector(".flips");
const reset = document.querySelector(".reset");

let first = undefined;
let second = undefined;
let flip = 0;
flips.textContent = "Flips - " + flip;

let dataArray = [
  { id: 1, image: "./pictures/car1.jpg" },
  { id: 1, image: "./pictures/car1.jpg" },
  { id: 2, image: "./pictures/car2.jpg" },
  { id: 2, image: "./pictures/car2.jpg" },
  { id: 3, image: "./pictures/car3.jpg" },
  { id: 3, image: "./pictures/car3.jpg" },
  { id: 4, image: "./pictures/car4.jpg" },
  { id: 4, image: "./pictures/car4.jpg" },
  { id: 5, image: "./pictures/car5.jpg" },
  { id: 5, image: "./pictures/car5.jpg" },
  { id: 6, image: "./pictures/car6.jpg" },
  { id: 6, image: "./pictures/car6.jpg" },
  { id: 7, image: "./pictures/car7.jpg" },
  { id: 7, image: "./pictures/car7.jpg" },
  { id: 8, image: "./pictures/car8.jpg" },
  { id: 8, image: "./pictures/car8.jpg" },
];

dataArray.sort(() => Math.random() - 0.5);

dataArray.forEach((el) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", el.id);
  card.innerHTML = `  
  <div class="front">
  </div>
  <div class="back">
  <img class="image" src=${el.image} alt="hz"/>
  </div>
  `;
  container.append(card);
});

const card = document.querySelectorAll(".card");

reset.addEventListener("click", (e) => {
  first = undefined;
  second = undefined;
  flip = 0;
  flips.textContent = "Flips - " + flip;
  dataArray.sort(() => Math.random() - 0.5);
  card.forEach((el, index) => {
    el.classList.remove("active");
    el.setAttribute("data-id", dataArray[index].id);
    setTimeout(() => {
      el.innerHTML = `  
      <div class="front">
      </div>
      <div class="back">
      <img class="image" src=${dataArray[index].image} alt="hz"/>
      </div>
      `;
    }, 200);
  });
});

card.forEach((e) => {
  const clickHandler = () => {
    if (e.classList.contains("active") || (first && second)) {
      return;
    }

    e.classList.add("active");

    if (!first && !second) {
      first = e;
    } else {
      second = e;
      flip++;
      flips.textContent = "Flips - " + flip;

      if (first.getAttribute("data-id") === second.getAttribute("data-id")) {
        first = undefined;
        second = undefined;
      } else {
        setTimeout(() => {
          first.classList.remove("active");
          second.classList.remove("active");
          first = undefined;
          second = undefined;
        }, 500);
      }
    }
  };
  e.addEventListener("click", clickHandler);
});
