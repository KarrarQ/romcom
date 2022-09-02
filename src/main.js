// Create variables targetting the relevant DOM elements here 👇
var image = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var customizeBtn = document.querySelector(".random-cover-button");
var makeYourCoverBtn = document.querySelector(".make-new-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var randomCoverBtn = document.querySelector(".random-cover-button");
var createNewBookButton = document.querySelector(".create-new-book-button");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDescriptor1 = document.querySelector(".user-desc1");
var userDescriptor2 = document.querySelector(".user-desc2");

var customImage = getRandomItem(covers);
var customTitle = getRandomItem(titles);
var customDiscr1 = getRandomItem(descriptors);
var customDiscr2 = getRandomItem(descriptors);

image.src = customImage;
title.innerText = customTitle;
tagLine1.innerText = customDiscr1;
tagLine2.innerText = customDiscr2;

// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

// Add your event listeners here 👇

customizeBtn.addEventListener("click", randomizeBtn);
makeYourCoverBtn.addEventListener("click", makeYourCover);
homeBtn.addEventListener("click", home);
createNewBookButton.addEventListener("click", createNewBook);


// Create your event handlers and other functions here 👇

function makeYourCover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  customizeBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
}

function createNewBook() {
  event.preventDefault();

  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDesc1 = userDescriptor1.value;
  var inputDesc2 = userDescriptor2.value;


  covers.push(inputCover);
  titles.push(inputTitle);
  descriptors.push(inputDesc1, inputDesc2);

  currentCover = new Cover(inputCover, inputTitle, inputDesc1, inputDesc2);

  image.src = inputCover;
  title.innerText = inputTitle;
  tagLine1.innerText = inputDesc1;
  tagLine2.innerText = inputDesc2;


  home();
}

function home() {
  homeView.classList.remove("hidden");
  homeBtn.classList.add("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  formView.classList.add("hidden");
}

function getRandomItem(array) {
  var randomIndex = getRandomIndex(array);
  return array[randomIndex];
}
function randomizeBtn() {
  image.src = getRandomItem(covers);
  title.innerText = getRandomItem(titles);
  tagLine1.innerText = getRandomItem(descriptors);
  tagLine2.innerText = getRandomItem(descriptors);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
