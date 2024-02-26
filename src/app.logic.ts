import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";


// console.log(yarg)




const createTable = (numero: number, limit: number) => {
  const tablaMultiplicar = [];
  tablaMultiplicar.push(`
    ==================================
             Tabla del ${numero}
    ==================================
    `);
  for (let index = 1; index <= limit; index++) {
    tablaMultiplicar.push(`${numero} x ${index} = ${numero * index}`);
  }
  const contenido = tablaMultiplicar.join("\n");

  return contenido;
};

const createToFile = (contenido: string, numero: number) => {
    fs.writeFile(`outputs/tabla-${numero}.txt`, contenido, (err) => {
        if (err) {
            console.error("Error al escribir el archivo:", err);
            return;
        }
        console.log(`la Tabla del ${numero} se ah guardado correctamente`);
    });
};

const readToFile = (numero: number, show: boolean) => {
    fs.readFile(`outputs/tabla-${numero}.txt`, "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        } else if ( show && numero){
            console.log("Contenido de la tabla", data);
        } else {
            console.log(`La tabla del ${numero} se ah creado correctamente pero no se mostrara!`)
        }
        
    });
};

const main = (): void => {
    const contenidoDelatabla = createTable(yarg.b, yarg.l);
    createToFile(contenidoDelatabla, yarg.b);
    readToFile(yarg.b, yarg.s)
}

main();