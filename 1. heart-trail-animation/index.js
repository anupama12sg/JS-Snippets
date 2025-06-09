const bodyElement = document.querySelector("body")

bodyElement.addEventListener("mousemove", (event) => {
    console.log(event.offsetY);
})