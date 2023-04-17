const button = document.getElementById("go-button");
const svgImage = document.getElementById("svg");
const pdfImage = document.getElementById("pdf");
const svgTimer = document.getElementById("svg-speed");
const pdfTimer = document.getElementById("pdf-speed");

button.addEventListener("click", startRace);


function startRace() {
    let svgStart = Date.now();
    console.log(svgStart)
    svgImage.src = "images/hcb-svg.svg";
    svgTimer.innerText = Date.now() - svgStart;
    console.log(Date.now());
    let pdfStart = Date.now();
    pdfImage.src = "images/hcb-pdf.pdf" + "#zoom=75";
    pdfTimer.innerText = Date.now() - pdfStart;
}