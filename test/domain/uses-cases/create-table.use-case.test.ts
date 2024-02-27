import { option } from 'yargs';
import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';


describe('domain/uses-cases/create-table.use-case.test', () => {


    test('Should create Table with default values', () => {
        
        const createTable = new CreateTable();

        const table = createTable.execute({ base: 2 })

        

        expect( createTable  ).toBeInstanceOf( CreateTable )
        expect( table ).toContain('2 x 1 = 2')
        expect( table ).toContain('2 x 10 = 20')

    } )


    test('Should create table with custom values', () => {
        
        const createTable = new CreateTable()
        const options = {
            base: 3,
            limit: 20
         }


         const table = createTable.execute(options)

         expect( table ).toContain('3 x 1 = 3');
         expect( table ).toContain('3 x 20 = 60');

    })

})

