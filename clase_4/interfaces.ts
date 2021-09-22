interface Humano {
    nombre:string;
    edad: number;
    //comer:(comida:string) => number;
}

interface Profesor extends Humano {
    boleta: string;
    materias: string[];
}

let profesorX: Profesor = {
    nombre: "Javier",
    edad:23,
    boleta:"dsfvdf",
    materias:["fisica","mate"]
    // comer:("Tacos") => {
    //     //pass
    //     return false;
    // }
}