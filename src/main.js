// Create variables targetting the relevant DOM elements here 👇
var image = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");

var customizeBtn = document.querySelector(".random-cover-button");
var createNewBookButton = document.querySelector(".make-new-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var viewSavedCoversBtn = document.querySelector(".view-saved-button");
var makeMyBookBtn = document.querySelector(".create-new-book-button");
var savedCoverSection = document.querySelector(".saved-covers-section");
// var deleteElementBtn = document.querySelector(".saved-covers-section");

// ### varibles for form input ###

var userCover = document.getElementById("cover");
var userTitle = document.getElementById("title");
var userDesc1 = document.getElementById("descriptor1");
var userDesc2 = document.getElementById("descriptor2");

// ### variables for functions ###

var customImage = getRandomItem(covers);
var customTitle = getRandomItem(titles);
var customDiscr1 = getRandomItem(descriptors);
var customDiscr2 = getRandomItem(descriptors);

// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover = new Cover(
  customImage,
  customTitle,
  customDiscr1,
  customDiscr2
);

showCover(currentCover);
// Add your event listeners here 👇

customizeBtn.addEventListener("click", randomizeBtn);
homeBtn.addEventListener("click", home);
viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
createNewBookButton.addEventListener("click", makeYourCover);
makeMyBookBtn.addEventListener("click", createNewBook);
saveCoverBtn.addEventListener("click", saveCover);
deleteElementBtn.addEventListener("dblclick", deleteElement);

// Create your event handlers and other functions here 👇

function deleteElement() {}

function viewSavedCovers() {
  savedCoverSection.innerHTML = "";
  for (var i = 1; i < savedCovers.length; i++) {
    createCoverElement(savedCovers[i]);
  }
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  customizeBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  savedView.classList.remove("hidden");
}

function makeYourCover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  customizeBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  savedView.classList.add("hidden");
}

function createNewBook(event) {
  event.preventDefault();

  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDesc1 = userDesc1.value;
  var inputDesc2 = userDesc2.value;

  covers.push(inputCover);
  titles.push(inputTitle);
  descriptors.push(inputDesc1, inputDesc2);

  currentCover = new Cover(inputCover, inputTitle, inputDesc1, inputDesc2);

  showCover(currentCover);

  home();
}

function saveCover() {
  savedCovers.push(currentCover);
}

function createCoverElement(obj) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", obj.id);
  newDiv.classList.add("mini-cover");
  newDiv.style.overflow = "hidden";
  newDiv.style.background = `url(${obj.cover})`;
  newDiv.style.backgroundSize = "100%";
  newDiv.innerHTML = `
  <h4 class='cover-title'>${obj.title}</h4>
  <p class='tagline'> A tale of ${obj.tagline1} and ${obj.tagline2}</p>
  `;

  savedCoverSection.appendChild(newDiv);
}

function home() {
  homeView.classList.remove("hidden");
  homeBtn.classList.add("hidden");
  customizeBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
}

function getRandomItem(array) {
  var randomIndex = getRandomIndex(array);
  return array[randomIndex];
}
function randomizeBtn() {
  currentCover = new Cover(
    getRandomItem(covers),
    getRandomItem(titles),
    getRandomItem(descriptors),
    getRandomItem(descriptors)
  );
  showCover(currentCover);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showCover(cover) {
  image.src = cover.cover;
  title.innerText = cover.title;
  tagLine1.innerText = cover.tagline1;
  tagLine2.innerText = cover.tagline2;
}
