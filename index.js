const name = document.querySelector("input")
const btn = document.querySelector("button")


console.log(name);
console.log(btn);


btn.onclick = () => {
    if (name == "Firdavs") {
        document.write("To'g'ri topdingiz")
    } else {
        document.write("Noto'g'ri topdingiz")
    }
}














// function ww() {
    //     if (name = "Firdavs") {
    //         document.write = "Togri topdingiz";
    //     } else {
    //         document.write = "Notog'ri topdingiz";
    //     }
    // }