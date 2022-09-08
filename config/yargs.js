const argv = require('yargs')
                .options( 'b', {
                    alias:        'base',
                    type:         'number',
                    demandOption: true,
                    describe:     'base de la tabla'
                })
                .options( 'l', {
                    alias:    'listar',
                    type:     'boolean',
                    default:  false,
                    describe: 'listar la tabla'
                })
                .options( 's', {
                    alias:    'hasta',
                    type:     'number',
                    default:  10,
                    describe: 'indica hasta que base llegará la lista'
                })
                .check( ( argv, options ) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                } )
                .argv;

module.exports = argv;