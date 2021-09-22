function sumar(num1:number,num2?:number){}

interface MedioTransporte {
    motor:string;
    marca:string;
    moverse: () => void;
}

class Vehiculo implements MedioTransporte{
    motor: string;
    marca: string;

    constructor(motor:string,marca:string){
        this.motor = motor;
        this.marca = marca;
    }

    moverse(){
        console.log("Hola");
    }
        
    

}

class Auto extends Vehiculo{
    // private readonly _num_llantas: number; //private,Solo lo que pertenzca a la clase puede acceder a este atributo
    // private readonly _color: string; //protected, además de las clases que hereden pueden acceder a este atributo
    // private readonly _placas?: string;  

    //AL INSTANCIAR UN OBJETO, SE INIZIALIZAN SUS ATRIBUTOS
    constructor(readonly numero_llantas:number, readonly color:string, readonly motor:string, readonly marca:string, readonly placas?:string){
        super(motor,marca)
        //readonly, una vez definido ya no podrás editar su valor
        // this.num_llantas = numero_llantas; //this, hace referencia a la clase
        // this.color = color;
    }

    //regresan
    // get placas(){
    //     //modificar todo lo necesario para despues dar acceso a algo
    //     if(this.placas){
    //         print("si hay placas")
    //         return this.placas;
    //     }
    // }
    // //reciben
    // set placas(placas){
    //     this.placas=placas;
    // }
    arrancar(){
        //pass
    }
}

let auto1 = new Auto(5,"rojo","motor","marca");

auto1.arrancar()

