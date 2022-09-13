//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("#header h1");

//? 3. method
h1.onmouseover = function () {
  h1.style.color = "green";
  h1.style.fontWeight = "300";
  console.log("onmouseover");
};

h1.onmouseout = function () {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
  console.log("onmouseout");
};

//? 4.method (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
document.getElementById("btn").addEventListener("click", function () {
  //   if (!input.value) {
  //     alert("Please enter an item");
  //   } else {
  //     alert(`${input.value} entered`);

  //   }
  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);
  input.value = "";
  document.querySelector("#input").focus();
});

const list = document.querySelectorAll(".list");
list.forEach((li) => {
  li.style.transition = "all 0.8s";
  li.style.lineHeight = "3rem";
  li.style.border = "2px solid red";
  li.style.width = "25%";
  li.style.text = "center";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(-10px)";
    li.style.color = "green";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
    li.style.color = "black";
  };
});

//* EXAMPLE-4 (onload)
//* -------------------------------------------------
// window.onload = function () {
//   document.querySelector("#input").focus();
// };

// const print = () => {
//   console.log("Starting");
// };

// print();
