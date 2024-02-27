
/**
 *  esta funcion nos  va a permitir modificar el argv
 *  esta funcion se hizo asincrona para poder importala en el codigo
 *  y que cada vez que se ejecute el codigo cree una nueva instancia de yargs
 * */ 
const runCommand = async( args: string [] ) => {

    process.argv = [...process.argv, ...args]

    const { yarg } = await import('../../../src/config/plugins/yargs.plugin')
    

    return yarg;

}


describe('config/plugin/yargs.plugin.test.ts', () => {

    const originalArgv = process.argv

    beforeEach(() => {

         process.argv = originalArgv; // process tendra su valor inicial
         jest.resetModules(); // para asegurarnos de que todo esta en su modo inicial  
    })

    // verificamos que nos retorne los valores por defecto
    test('should return default values',async () => {

        const argv = await runCommand(['-b', '5'])
        // console.log(argv)
        expect( argv ).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: true,
            n: 'Table',
            d: './outputs',
        }))
        
    })

    test('should return configuiration with custom values', async () => {

        const argv = await runCommand(['-b','10', '-l', '15', '-s','false', '-n', 'tablenode', '-d','./outputs-diego'])
        // console.log( argv )
        expect( argv ).toEqual( expect.objectContaining(
            {
            b: 10,
            l: 15,
            s: false,
            n: 'tablenode',
            d: './outputs-diego',}) )

    })

})