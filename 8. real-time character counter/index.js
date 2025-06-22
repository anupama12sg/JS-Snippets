const textAreaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")

textAreaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalCounterEl.innerText = textAreaEl.value.length
}