const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.blue(archivo)))
            //opciones de color
            //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}




///let argv2 = process.argv;

//console.log(argv.base);
//---------console.log('Limite', argv.limite);
//console.log(argv2);
//let base = '6';
//console.log(process.argv);

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);



//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch(e => console.log(e));