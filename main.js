const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");

yesAnswerMethod = () => {
    container.style.display = 'none'
    confirmation.style.display = 'block'
}

noAnswerMethod = () => {
    no.style.position = 'absolute'

    const maxWidth = container.clientWidth * 0.8;
    const maxHeight = container.clientHeight * 0.8;

    const yesRect = yes.getBoundingClientRect();
    const noRect = no.getBoundingClientRect();

    let xPosition, yPosition;

    do {
        xPosition = Math.floor(Math.random() * maxWidth);
        yPosition = Math.floor(Math.random() * maxHeight);
    } while (
        xPosition + noRect.width > yesRect.left &&
        xPosition < yesRect.right &&
        yPosition + noRect.height > yesRect.top &&
        yPosition < yesRect.bottom
    );

    no.style.top = `${yPosition}px`;
    no.style.left = `${xPosition}px`;
}

no.addEventListener('click', noAnswerMethod)
yes.addEventListener('click', yesAnswerMethod)

document.getElementById("fix").addEventListener("click", function () {
    window.location = "https://t.me/takispadar";
}, false);