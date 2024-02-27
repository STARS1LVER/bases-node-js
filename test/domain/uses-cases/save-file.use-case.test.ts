import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';

describe('domain/uses-cases/save-file.use-case.test.ts', () => {    

    // beforeEach(() => {
    //     fs.rmSync('outputs', {recursive: true})
    // })

    const customOption = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table',
    }

    // beforeEach(() => {
    //     jest.clearAllMocks(); // limpiamos los mock
    // })

    afterEach(() => {

        const outputsFolderExist = fs.existsSync('outputs')
        if( outputsFolderExist ) fs.rmSync('outputs', {recursive: true})

        const customOutputFolderExits = fs.existsSync(customOption.fileDestination, )
        if( customOutputFolderExits ) fs.rmSync(customOption.fileDestination, {recursive: true})
        
    })

    // test('should save file with default values', () => {

    //     const saveFile = new SaveFile();

    //     const filePath = 'outputs/tabla-24.txt'

    //     const options = {
    //         fileContent: 'test content'
    //     }

    //     const result = saveFile.excecute(options)
    //     const fileExists = fs.existsSync(filePath) // si el arcchivo existe indicara si sera true o false
    //     // const fileContent = fs.readFileSync( filePath, {encoding: 'utf-8'})
    //     expect( result ).toBe( true )
    //     // expect( fileExists ).toBe(true)
    //     // expect( fileContent ).toBe( options.fileContent )

    // })


    test('should save file with custom values', () => {

        const option = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table',
        }

        const saveFile = new SaveFile()

        const filePath = `${option.fileDestination}/${option.fileName}.txt`

        const result = saveFile.excecute(option)
        const fileExists = fs.existsSync(filePath)

    })


    test('should return false if file could not be create', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs,'mkdirSync').mockImplementation(
            ()=> { throw new Error('This is a custom error message from testing') }
        )

        const result = saveFile.excecute( customOption )
        expect(result).toBe( false )

        mkdirSpy.mockRestore()


    })

})