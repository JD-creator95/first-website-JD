const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Profile Pic.jpg") {
    myImage.setAttribute("src", "images/animated pic");
  } else {
    myImage.setAttribute("src", "images/animated pic");
  }
});
