const inputs = document.querySelectorAll(".input");
// Selects all elements in the document that have a class of "input" and returns a NodeList containing these elements. This NodeList is then assigned to the inputs variable.

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
