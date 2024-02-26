import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    name?: string,
    destination?: string
}


export class ServerApp {

    static run ({base, limit, showTable, name, destination = 'outputs/'}: RunOptions ) {
        console.log('Sever Running..')
        

        const table = new CreateTable().execute({base, limit})

        const wasCreado = new SaveFile()
            .excecute({ fileContent: table, destination: `${destination}-${ name }`, fileName: `${ base }` })

        if(showTable) console.log(table);

        (wasCreado)
            ? console.log('se creo el archivo')
            : console.log('file error;')
    }

}