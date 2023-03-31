const navLinks = document.querySelectorAll("nav ul a");
const mainHeading = document.getElementById("mainHeading");
let mainHeadingText = "Enjoy your healthy delicous food";

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    link.classList.add("nav-active");
  });
});

function setHeadingText(text) {
  mainHeading.innerHTML = "";
  let created = false;

  for (let i = 0, len = text.length; i < len; i++) {
    if (text[i] !== " ") {
      let span = document.createElement("span");
      span.appendChild(document.createTextNode(text[i]));
      mainHeading.appendChild(span);
    } else {
      if (i >= 15 && created === false) {
        mainHeading.appendChild(document.createElement("br"));
        created = true;
      }
      mainHeading.appendChild(document.createTextNode(text[i]));
    }
  }
}
setHeadingText(mainHeadingText);

const headingChars = document.querySelectorAll("#mainHeading span");

headingChars.forEach((char) => {
  char.classList.add("gello");
});

headingChars.forEach((char) => {
  char.addEventListener("mouseover", () => {
    char.style.animationName = "gello";
  });
  char.addEventListener("animationend", () => {
    char.style.animationName = "";
  });
});
