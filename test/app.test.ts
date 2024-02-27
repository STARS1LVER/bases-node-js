import { ServerApp } from "../src/presentation/server-app"


describe('App', () => {

    test('Should call server.run with values', async ()=> {
        
        const serverRunMock = jest.fn()
        ServerApp.run = serverRunMock

        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'test-destination']
        
        await import('../src/app')

        expect( serverRunMock ).toHaveBeenCalledWith({
            base: 10,
            limit: 5,
            showTable: true,
            fileName: 'test-file',
            fileDestination: 'test-destination'
        })

    } )



})