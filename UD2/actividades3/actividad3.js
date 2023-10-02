let random = Math.random() * 256;
let random2 = Math.random() * 256;
let random3 = Math.random() * 256;

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = "rgb(" + random + ", " + random2 + ", " + random3 + ")";
});