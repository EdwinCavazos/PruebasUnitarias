const medidorcarga = (carga)=>{ //definimos la constante y le pasamos la variable
    var result; //declaramos la variable para el resultado
    if (carga < 30) { //le damos una condicion
      result = "se recomienda cargar la bateria";
     } 
    if(carga >= 60){
       result = "aun cuentas con carga";
     }
    return result;
   
  }
  const funcion = { //guardamos todo
    medidorcarga,
  };
module.exports = funcion; //lo exportamos para el test