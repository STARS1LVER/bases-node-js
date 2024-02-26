
export interface CreateTableUseCase {
    execute:( options: CreateTableOptions )=> string;
}

export interface CreateTableOptions{
    base   : number;
    limit? : number;
}


export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI = inyecccion de dependencias
         */
    ){}

    execute({ base, limit = 10 }: CreateTableOptions){
        let outputMessage = ''
        for (let index = 1; index <= limit; index++) {
            outputMessage += `${base} x ${index} = ${base * index}\n`
            
        }

        return outputMessage;
    }

}