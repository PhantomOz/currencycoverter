// [2:01 PM, 7/21/2022] +234 706 716 2698: // console.log(document.getElementById("my-form"));

// let container = document.querySelector(".container");

// let hiTag = document.querySelector("h1");

// // multiple elements selector

// document.querySelectorAll(".item");
// document.querySelectorAll("li");
// document.querySelectorAll("div");
// document.getElementsByClassName("item");
// document.getElementsByTagName("li");

// //DOM Manipulation
// let ulElements = document.querySelector(".items");
// //ulElements.remove();
// //ulElements.lastElementChild.remove();

// ulElements.firstElementChild.textContent = "Javascript";
// ulElements.children[1].innerText = "C#.NET";
// ulElements.lastElementChild.innerHTML = "<h1>Agile</h1>";

// const btn = document.querySelector(".btn");

// btn.style.background = "green";

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById("my-form").style.background = "red";
//   document.querySelector("header").style.background = "blue";
//   document.querySelector("body").classList.add("bg-dark");
//   ulElements.lastElementChild.innerHTML = "<h1>Design Thinking</h1>";
// });

// let inputName = document.querySelector("#name");
// [2:02 PM, 7/21/2022] +234 706 716 2698: // inputName.addEventListener("input", (e) => {
//   document.querySelector(".container").append(inputName.value);
// });
// let inputEmail = document.querySelector("#email");
// inputEmail.addEventListener("input", (e) => {
//   document.querySelector(".container").append(inputEmail.value);
// });

//get the DOM elements and assign them to variables

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter your name and email";
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}