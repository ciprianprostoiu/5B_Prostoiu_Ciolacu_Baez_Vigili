export const ricerca = (input,dati) =>{
    let lista = []
    console.log(input)
    for(let via of dati){
      console.log(via)
      if (via.indirizzo.includes(input)){
        lista.push(via)
      }
    }
    return lista
  }