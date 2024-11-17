const tabella = document.getElementById("tabella");
const precendente = document.getElementById("precedente");
const successiva = document.getElementById("successiva");
const formElement = document.getElementById("form");
let starDay = 0;

import {tableComponent} from './componenti/table.js';
import {createForm} from './componenti/form.js';
import {generateFetchComponent} from './componenti/fetch_component.js';
import {createMap} from './componenti/mappa.js';
import {ricerca} from './componenti/barra_ricerca.js';

fetch("conf.json").then(r => r.json()).then(conf => {
    const form = createForm(formElement);
    const table1 = tableComponent();
    const compFetch = generateFetchComponent()
    const Map = createMap();

    compFetch.caricaDati(conf)
    compFetch.getData().then(data => {
        table1.setData(data); // Imposta i dati nel componente tabella
        table1.setParentElement(tabella);
        table1.render(starDay);// Renderizza la tabella con i dati recuperati
        Map.setData(data)
        Map.render();
    });
    precendente.onclick = () => {
        starDay -= 7;
        table1.start(starDay)
        table1.render();
    }

    successiva.onclick = () => {
        starDay += 7;
        table1.start(starDay)
        table1.render();
    }
    form.render(table1, Map, conf,compFetch);
    //BARRA DI RICERCA
    let filtro = document.getElementById("filtro");
    filtro.addEventListener('input', function() {
        let dati = table1.exportData()
        let new_data=ricerca(filtro.value,dati);
        table1.render_filtro(new_data)
    });
});
