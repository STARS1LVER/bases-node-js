import fs from 'fs';

// interface de como quiero que se comporte mi clase
export interface SaveFileUseCase {
    excecute: ( options: SaveFileOptions ) => boolean;
}

interface SaveFileOptions{
    fileContent  : string;
    destination? : string;
    fileName?    : string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(){
        
    }

    excecute ({
        fileContent, 
        destination = 'outputs', 
        fileName ='table' }: SaveFileOptions ): boolean {

        try {
            fs.mkdirSync( destination,  { recursive: true }) // si no existe el directorio que lo cree de manera recursiva
    
            fs.writeFileSync(`${ destination }/tabla-${ fileName }.txt`, fileContent )
            console.log( 'File Created' )
            return true
            
        } catch (error) {
            console.log(error)
            return false;
        }
        

    };

}