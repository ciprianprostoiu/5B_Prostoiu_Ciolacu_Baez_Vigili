const tabella = document.getElementById("tabella");
const precendente = document.getElementById("precedente");
const successiva = document.getElementById("successiva");
const formElement = document.getElementById("form");
let starDay = 0;

import {tableComponent} from './componenti/table.js';
import {createForm} from './componenti/form.js';
//import {generateFetchComponent} from './componenti/fetch_component.js';
import {createMap} from './componenti/mappa.js';
import {ricerca} from './componenti/barra_ricerca.js';

fetch("conf.json").then(r => r.json()).then(conf => {
    const form = createForm(formElement);
    const table1 = tableComponent();
    //const compFetch = generateFetchComponent()
    const Map = createMap();
    const formIst = createForm(formElement)

    //compFetch.caricaDati(conf)
    //compFetch.getData().then(data => {
        //form.setLabels(data);
        //table1.setData(data); // Imposta i dati nel componente tabella
        table1.setParentElement(tabella);
        table1.render(starDay);// Renderizza la tabella con i dati recuperati
        Map.render();
    //});
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
    form.render(table1, Map, conf);
    //setInterval(()=>{
        //compFetch.getData().then(data => {
            //form.setLabels(data);
            //table1.setData(data); // Imposta i dati nel componente tabella
            //table1.render(starDay);// Renderizza la tabella con i dati recuperati
            
        //});
    //},300000)
});
let filtro = document.getElementById("filtro");
filtro.addEventListener('input', function() {
  console.log('Il valore è stato modificato:', filtro.value);
  //dati sono gli incidenti che salviamo
  let new_data=ricerca(filtro.value,dati);
  table1.render_filtro(new_data)
});