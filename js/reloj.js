//obtener la fecha actual
function obtenerHora(){
    let fechaActual = new Date();
    // console.log(fechaActual);
    // console.log(fechaActual.getDate());// 1- 31
    // console.log(fechaActual.getDay()); // 0 - 6
    // console.log(fechaActual.getMonth());
    // console.log(fechaActual.getFullYear());
    
    const diaSemana = ['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
    
    let parrafoFecha = document.getElementById('fecha');
    
    parrafoFecha.innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    let parrafoHora = document.getElementById('hora');
    
    parrafoHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`
}

setInterval(obtenerHora,1000)