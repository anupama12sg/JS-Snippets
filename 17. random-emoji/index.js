const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=061c1b8aa901b2b2b14edbcda506481d2182156a")
}

getEmoji()

btnEl.addEventListener("click", () => {

})
