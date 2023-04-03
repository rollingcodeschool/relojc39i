//setTimeout -> ejecuta una funcion pasado cierto tiempo

let contador = 1;

function saludar(){
    document.write(`<p>Hola mundo, cantidad de veces ${contador}</p>`)
    if(contador === 5){
        clearInterval(identificador)
    }
    contador++;
}

// window.setTimeout(saludar, 3000);

// setTimeout(saludar, 3000);

// setTimeout(()=>{
//     document.write(`<p>Hola mundo, cantidad de veces ${contador}</p>`)
// }, 4000);

//setInterval -> repite el llamado de una funcion cada x milisegundos

 let identificador = setInterval(saludar, 2000)

