const countersEl = document.querySelectorAll(".counter")

countersEl.forEach(countersEl => {
    countersEl.innerText = "0";

    incrementCounter()

    function incrementCounter() {
        const currentNum = +countersEl.innerHTML
        const dataCeil = countersEl.getAttribute("data-ceil")
    }
});