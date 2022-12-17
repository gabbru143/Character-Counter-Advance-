console.log("script running...");

let myText = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.getElementById("count-result").innerHTML = `Total Character: ${count}`;
});

let myalphabet = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let regex =/[a-zA-Z]/g;
    let count = (myalphabet.value.match(regex).length);
    document.getElementById("count-alphabet").innerHTML = `Total Alphabet: ${count}`;
});

let mynumbers = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let regex =/[^0-9]/gi;
    let count = (mynumbers.value.replace(/[^0-9]/gi,"").length);
    document.getElementById("count-numbers").innerHTML = `Total Numbers: ${count}`;
});

