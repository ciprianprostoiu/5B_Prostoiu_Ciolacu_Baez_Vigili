const ricerca = (input,dati) =>{
    let lista = []
    console.log(input)
    for(let via of dati){
      console.log(via.name.indirizzo)
      if (via.name.indirizzo.includes(input)){
        lista.push(via)
      }
    }
  }