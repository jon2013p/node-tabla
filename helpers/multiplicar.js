const fs = require('fs');
const colors = require('colors');

const crearArchivo =  async ( base = 5, listar = false, hasta = 10 ) => {

    try{
        if(listar){
            console.log('==============================='.cyan);
            console.log(`         Tabla del: ${base}`);
            console.log('==============================='.cyan);
        }
        
    
        let salida = '';
        let consola = '';
    
        for (let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
        }

        if(listar){
            console.log(consola);
        }
    
    
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
            return console.log(`tabla-${base}.txt creada`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    crearArchivo
}