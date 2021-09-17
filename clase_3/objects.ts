
const Estudiantes: {
    boleta: number;
    escuela: string;
    inscrito:boolean,
}[] = [];
Estudiantes.push({boleta:2019, escuela:"IPN",inscrito:true});

interface Jugador{
    nombre: string;
    camiseta: number;
    equipo: {
        nacional: string[];
        internacional: ["America", "Asia", "Europa", "Oceanía", "África"]
    }
}
const jugadores:Jugador[] = [];
jugadores.push({nombre:"Juan",camiseta:10, equipo:{nacional:["chivas"],internacional:["America", "Asia", "Europa", "Oceanía", "África"]} })

const Persona: {
    edad: number;
    nombre:string;
    pasatiempos: {
        extremos: string[];
        comunes: {
            solo: string[];
            pareja: string[];
        }
    }
    comprometido: boolean;
} = {
    edad: 30,
    nombre:"Juan",
    pasatiempos: {
        extremos: ["MMA", "BMX", "Karate"],
        comunes: {
            solo: ["leer", "programar", "dibujar"],
            pareja: ["futbol", "bandaRock"]
        },
    },
    comprometido: true,
}


