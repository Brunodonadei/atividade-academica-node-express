const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const grid = document.getElementById("grid-cards");

let contador = 1;

function gerarCards(quantidade) {
  for (let i = 0; i < quantidade; i++) {
    const novoCard = document.createElement("div");
    novoCard.classList.add("card");

    novoCard.innerHTML = `
            <h3>Item #${contador}</h3>
            <p>Gerado automaticamente às ${new Date().toLocaleTimeString()}</p>
        `;

    grid.appendChild(novoCard);

    contador++;
  }
}

btnAdd.addEventListener("click", () => {
  gerarCards(3);
});

btnClear.addEventListener("click", () => {
  grid.innerHTML = "";
  contador = 1;
});
