const btnStart = document.querySelector(".start");
const text = document.querySelector(".text-tx");
const myApp = document.querySelector(".my-app");

 
// CREO DINAMICAMENTE ELEMENTI : RISULTATO DEL COUNTER ris E I BUTTON btnMinus btnReset btnPlus CHE INCREMENTERANNO / DECREMENTARANNO / RESETTERANNO IL COUNTER 
let ris = document.createElement("p");
ris.textContent=0;
ris.setAttribute("class","ris");
ris.setAttribute("value","0");
myApp.appendChild(ris);

const action = document.createElement("div");
action.setAttribute("class", "action");
myApp.appendChild(action);

const btnMinus = document.createElement("button");
btnMinus.textContent="-";
btnMinus.setAttribute("class","minus");
action.appendChild(btnMinus);

const btnReset = document.createElement("button");
btnReset.textContent="⟳";
btnReset.setAttribute("class","reset");
action.appendChild(btnReset);

const btnPlus = document.createElement("button");
btnPlus.textContent="+";
btnPlus.setAttribute("class","plus");
action.appendChild(btnPlus);

// AVVIO UNA FUNZIONE CHE AL CLICCARE DEL BUTTON btnStart ELIMINA DALLA PAGINA SIA IL BUTTON btnStart SIA IL PARAGRAFO text E MANDA A SCHERMA I BUTTON E IL RISULTATO DEL CONTATORE
btnStart.addEventListener('click', () => {
    btnStart.style.display="none";
    text.style.display="none";
    ris.style.display="block";
    action.style.display="block";
});    


//FUNZIONE CHE INCREMENTA ris DI 1 AL CLICK DI btnPlus
btnPlus.addEventListener('click', () => {
        ris.textContent++;
});

//FUNZIONE CHE DESCREMENTA ris DI 1 AL CLICK DI btnPlus
btnMinus.addEventListener('click', () => {
    ris.textContent--;
});

//FUNZIONE CHE AZZERA ris
btnReset.addEventListener('click', () => {
    ris.textContent=0;
});


