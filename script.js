let inputVal = document.getElementById("input")
let btn = document.getElementById("btn1")
let total
let answer = document.getElementById("answer")





function loadfunction() {

    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let r1 = Math.floor(Math.random() * 11)
    let r2 = Math.floor(Math.random() * 11)
    num1.innerHTML = r1
    num2.innerHTML = r2
    total = r1 + r2
    answer.setAttribute("title", total)
    inputVal.focus()
}

window.onload = loadfunction()

btn.addEventListener("click", function () {
    if (Number(inputVal.value) == total) {
        var audio = new Audio("./audio/success-1.mp3")
        audio.play()
        inputVal.value = ""
        loadfunction()

    } else {
        var audio = new Audio("./audio/fail-1.mp3")
        audio.play()
        inputVal.value = ""
        loadfunction()

    }

})


document.addEventListener("keypress", function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        if (Number(inputVal.value) == total) {
            var audio = new Audio("./audio/success-1.mp3")
            audio.play()
            inputVal.value = ""
            loadfunction()

        } else {
            var audio = new Audio("./audio/fail-1.mp3")
            audio.play()
            inputVal.value = ""
            loadfunction()

        }
    }
})
