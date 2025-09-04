const buzzer1 = document.getElementById("btn_buzzer1")
const buzzer2 = document.getElementById("btn_buzzer2")
const backBuzzer1 = document.getElementById("buzzer1")
const backBuzzer2 = document.getElementById("buzzer2")
TIMEOUT = 300
let audio = new Audio("https://download.dashmap.live/1de9ad7c-5237-41b5-a9e7-ced0356aa235/wrong-answer-sound-effect.mp3")

function buzzer1clicked () {
    buzzer2.disabled = true
    backBuzzer1.style.backgroundColor = "yellow"
    blinkInterval = setInterval(() =>blink(backBuzzer1), TIMEOUT)
    audio.play()
}

function buzzer2clicked () {
    buzzer1.disabled = true
    backBuzzer2.style.backgroundColor = "yellow"
    blinkInterval = setInterval(() =>blink(backBuzzer2), TIMEOUT)
    audio.play()
}

function reset() {
    buzzer2.disabled = false
    buzzer1.disabled = false
    backBuzzer1.style.backgroundColor = "#313338"
    backBuzzer2.style.backgroundColor = "#313338"
    clearInterval(blinkInterval)
}

function blink (buzzer) {
    if (buzzer.style.backgroundColor == "yellow") {
        buzzer.style.backgroundColor = "red"
    } else {
        buzzer.style.backgroundColor = "yellow"
    }
}

