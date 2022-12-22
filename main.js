//Declarung global variables
const head = document.querySelector(".head");
const content = document.querySelector(".content");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  axios(`https://api.adviceslip.com/advice`).then(({ data }) => {
    let res = data.slip;
    content.innerHTML = `<p>${res.advice}</p>`;
    head.innerHTML = `<h3>Advice #${res.id}</h3>`;
  });
});
