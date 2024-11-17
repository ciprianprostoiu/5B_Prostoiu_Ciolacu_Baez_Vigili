export const ricerca = (input,dati) =>{
    let lista = []
    dati.forEach(element => {
      if (element.name.indirizzo.includes(input)){
        lista.push(element)
      }
    });
    return lista
  }