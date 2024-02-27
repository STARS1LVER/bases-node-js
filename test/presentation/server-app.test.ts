import { CreateTable } from "../../src/domain/use-cases/create-table.use-case";
import { SaveFile } from "../../src/domain/use-cases/save-file.use-case";
import { ServerApp } from "../../src/presentation/server-app";

describe("presentation/server-app.test.ts", () => {

  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    fileDestination: "test-destination",
    fileName: "test-filename",
  };

  test("Should create Server App", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp); // validamos que sea una instancia validad
    expect(typeof ServerApp.run).toBe("function"); // Validamos que sea una funcion
  });

  // test('Should run ServerApp with options', () => {

  //     const logSpy = jest.spyOn(console, 'log')
  //     const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute')
  //     const saveSpyFile = jest.spyOn( SaveFile.prototype, 'excecute' )

  //     const options = {
  //         base            : 2,
  //         limit           : 10,
  //         showTable       : false,
  //         fileDestination : 'test-destination',
  //         fileName        : 'test-filename'
  //     }

  //     ServerApp.run(options)

  //     expect( logSpy ).toHaveBeenCalledTimes( 3 ); // que se haya llamado 3 veces
  //     expect( logSpy ).toHaveBeenCalledWith('Sever Running..') // que se haya llamado
  //     expect( logSpy ).toHaveBeenLastCalledWith('se creo el archivo') // que el ultimo log contenga eso
  //     expect( createTableSpy ).toHaveBeenCalledTimes( 1 ) // que el metodo alla sido llamado al menos una vez
  //     expect( createTableSpy ).toHaveBeenCalledWith({
  //         base  : options.base,
  //         limit : options.limit
  //     })
  //     expect( saveSpyFile ).toHaveBeenCalledTimes( 1 )
  //     // expect( saveSpyFile ).toHaveBeenCalledWith({
  //     //     fileContent     : expect.any(String),
  //     //     fileDestination : options.fileDestination,
  //     //     fileName        : options.fileName

  //     // })
  // })

  test("should run with custom values mock", () => {
    // 1. arrange
    const logMock = jest.fn()
    const logErrorMock = jest.fn()
    const createMock = jest.fn().mockReturnValue('1 x 2 = 2')
    const saveFileMock = jest.fn()

    // 2. act
    console.log = logMock;
    console.error = logErrorMock
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.excecute = saveFileMock;
    
    ServerApp.run(options)

    // 3. assert
    expect( logMock ).toHaveBeenCalledWith('Sever Running..')
    expect( createMock ).toHaveBeenCalledWith({"base": options.base, "limit": options.limit})
    expect( saveFileMock ).toHaveBeenCalledWith({
        fileContent: '1 x 2 = 2',
        fileDestination: options.fileDestination,
        fileName: options.fileName
    });

    expect( logErrorMock ).not.toHaveBeenCalledWith();



  });
});
