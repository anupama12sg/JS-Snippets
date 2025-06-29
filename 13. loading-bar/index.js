const counterEl = document.querySelector(".counter")

const barEl = document.querySelector(".loading-bar-front")

let idx = 0

updateNum()

function updateNum() {
    counterEl.innerText = idx + "%"
}