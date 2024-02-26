import yargs, { option } from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
// Los option son los parametros que recibimos
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplicacion Table Base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplicacion Table Limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: true,
        describe : 'Show multiplicacion Table'
    })
    .option('n',{
        alias: 'name',
        type:'string',
        default: 'Table',
        describe: 'File Name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination'
    })
    .check((argv, options) => {

        // console.log({ argv, options })

        if( argv.b < 1 ) throw 'Error: base must be greater than 0'

        return true;

    })
    .parseSync()



