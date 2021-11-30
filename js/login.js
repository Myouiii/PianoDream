console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

// mo dong
const modal = document.querySelector(".js-modal");

function hideForm() {
  modal.classList.remove("open");
}
function showForm() {
  modal.classList.add("open");
}
// dong form khi click outside
modal.addEventListener("click", hideForm);
const modalContainer = document.querySelector(".js-modalContainer");
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

$(document).ready(function () {
  $("button").click(function () {
    $("#container").hide();
  });
});
