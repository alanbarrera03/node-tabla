// const fs = require('fs');
// // const { argv } = require('yargs');
// const { options } = require('yargs');

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log( argv );

// console.log( 'base: yargs', argv.b );

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.splist( '=' );

// const base = 7;

crearArchivo( argv.b, argv.l, argv.s )
    .then( nombreArchivo => console.log( nombreArchivo.italic.bgCyan, 'creado' ) )
    .catch( err => console.log( err ) );
     