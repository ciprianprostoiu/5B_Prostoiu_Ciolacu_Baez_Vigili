export const createForm = (parentElement) => {
    return {
        setLabels: (labels) => { dato = labels; }, 
        render: (table1, mappa, conf) => {
            //creazione input
            parentElement.innerHTML = 
                `<div>Inserisci la località<br/><input id="indirizzo" type="text" class="form-label form-control"/></div>`+
                `<div>Data dell'incidente<br/><input id="Data" type="date" class="form-label form-control"/></div>`+
                `<div>Ora dell'incidente<br/><input id="Ora" type="time" class="form-label form-control"/></div>`+
                `<div>Targa 1<br/><input id="Targa1" type="text" class="form-label form-control"/></div>`+
                `<div>Targa 2<br/><input id="Targa2" type="text" class="form-label form-control"/></div>`+
                `<div>Targa 3<br/><input id="Targa3" type="text" class="form-label form-control"/></div>`+
                `<div>Numero feriti<br/><input id="Feriti" type="number" class="form-label form-control"/></div>`+
                `<div>Numero morti<br/><input id="Morti" type="number" class="form-label form-control"/></div>`+
                `<div id="outputform"></div>`
            //lettura valori inseriti
            document.querySelector("#Aggiungi").onclick = () => {
                const indirizzo = document.querySelector("#indirizzo").value;
                const data = document.querySelector("#Data").value;
                const ora = document.querySelector("#Ora").value;
                const targa1 = document.querySelector("#Targa1").value;
                const targa2 = document.querySelector("#Targa2").value;
                const targa3 = document.querySelector("#Targa3").value;
                const feriti = document.querySelector("#Feriti").value;
                const morti = document.querySelector("#Morti").value;
                if (indirizzo === "" || data === "" || ora === "" || targa1 === "" && targa2 === "" && targa3 === "" || feriti === "" || morti === "") {
                    outputform.innerHTML="ko"
                }else{
                    outputform.innerHTML="ok";
                    const dataDiz = {
                        "indirizzo": indirizzo,
                        "data": data,
                        "ora": ora,
                        "targa1": targa1,
                        "targa2": targa2,
                        "targa3": targa3,
                        "feriti": feriti,
                        "morti": morti

                    
                    };
                    table1.addData(dataDiz);
                    table1.render();
                    mappa.add(indirizzo, conf, mappa, dataDiz);
                }
                
            }
        }
    }
};
