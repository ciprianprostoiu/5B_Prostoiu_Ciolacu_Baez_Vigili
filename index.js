const formElement = document.getElementById("form");

import {createForm} from '/form.js';
import {createMap} from '/mappa.js';


fetch("conf.json").then(r => r.json()).then(conf => {
    const form = createForm(formElement);
    const Map = createMap()
    Map.render()
    form.render(Map,conf)
});
