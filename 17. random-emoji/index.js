const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=061c1b8aa901b2b2b14edbcda506481d2182156a")

    data = await response.json()

    console.log(data)

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName

        })
    }
}

getEmoji()

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName
    emojiNameEl.innerText = emoji[randomNum].emojiCode
})
