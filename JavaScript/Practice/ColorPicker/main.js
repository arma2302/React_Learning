let color = null;
let colorContainer = document.querySelector(".color-palette");
let isClicked = false;

let palette = document.querySelectorAll(".palette div");
console.log(palette);
palette.forEach((div) => {
  console.log(div);
  div.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    console.log(window.getComputedStyle(div));

    let styles = window.getComputedStyle(div);
    let background = styles.getPropertyValue("background-color");
    color = background;
    document.querySelector(".small-div").style.backgroundColor = color;
  });
});

function onSelect() {
  document.body.style.backgroundColor = color;
}
function onCancle() {
  isClicked = !isClicked;
  if (!isClicked) {
    colorContainer.style.display = "block";
  } else {
    colorContainer.style.display = "none";
  }
}
function toggle() {
  isClicked = !isClicked;
  console.log(isClicked);

  if (isClicked) {
    colorContainer.style.display = "block";
  } else {
    colorContainer.style.display = "none";
  }
}
