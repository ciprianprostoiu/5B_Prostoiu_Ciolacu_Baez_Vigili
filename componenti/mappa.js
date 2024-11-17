export const createMap = () =>{
    let zoom = 12;
    const Limiti = [
        [45.390, 9.010],
        [45.550, 9.290] 
    ];
    let maxZoom = 19;
    let map = L.map('map',{maxBounds: Limiti,}).setView([45.464098, 9.191926], zoom);
    let places = [];
     return{
        add: (dato) =>{
                map.setView(dato.coords, zoom);
                places.push(dato);
            },
        render: () => {
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
               maxZoom: maxZoom,
               minZoom: zoom,
               attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            places.forEach((place) => {
               const marker = L.marker(place.coords).addTo(map);
               marker.bindPopup(`<h4>${place.name.indirizzo}</h4><p>Data: ${place.name.data}</p><p>Ora: ${place.name.ora}</p>
                    <p>Targa 1: ${place.name.targa1}</p><p>Targa 2: ${place.name.targa2}</p><p>Targa 3: ${place.name.targa3}</p>
                    <p>N° Feriti: ${place.name.feriti}</p><p>N° Morti: ${place.name.feriti}</p>
                `);
            });
     }
    }
}