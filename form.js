export const createForm = (parentElement) => {
    let callback = null;
    return { 
        onsubmit: (callbackInput) => { callback = callbackInput; },
        render: (Map,conf) => {
            //creazione input
            parentElement.innerHTML = 
                `<div>Inserisci la località<br/><input id="nome" type="text" class="form-label form-control"/></div>`+
                `<button id="Ricerca" type="button" class="btn btn-outline-danger btn-lg">Cerca</button>`+
                `<div id="outputform"></div>`
            //lettura valori inseriti
            document.querySelector("#Ricerca").onclick = () => {
                const nome = document.querySelector("#nome").value;
                Map.add(nome,conf,Map);                
            }

        }
    }
}
