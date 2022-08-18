const carga = require('./bateriaCargada'); //pasamos los datos
//Empezar el test
test('sin carga',() =>{
    expect (carga.medidorcarga(10)).toBe("se recomienda cargar la bateria"); //funciona porque tiene poca batería
})

test('con carga',() =>{
   expect (carga.medidorcarga(60)).toBe("aun cuentas con carga"); //funciona porque tiene ,mucha batería
})