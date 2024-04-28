let inputVal = document.getElementById("input")
let btn = document.getElementById("btn1")
let total


function loadfunction() {

    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let r1 = Math.floor(Math.random() * 11)
    let r2 = Math.floor(Math.random() * 11)
    num1.innerHTML = r1
    num2.innerHTML = r2
    total = r1 + r2

}

window.onload = loadfunction()

btn.addEventListener("click", function () {
    if (Number(inputVal.value) == total) {
        alert("GOED GEDAAN!! 🎈👍❤✅🎉✨")
        loadfunction()
    } else {
        alert("NIET GOED , PROBEER NOG EEN KEER!! 😌⛔🐾")
        loadfunction()
    }

})

