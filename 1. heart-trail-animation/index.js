const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    bodyElement.appendChild(spanElement);
});