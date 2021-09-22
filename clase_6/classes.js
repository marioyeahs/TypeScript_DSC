var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sumar(num1, num2) { }
var Vehiculo = /** @class */ (function () {
    function Vehiculo(motor, marca) {
        this.motor = motor;
        this.marca = marca;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("Hola");
    };
    return Vehiculo;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    // private readonly _num_llantas: number; //private,Solo lo que pertenzca a la clase puede acceder a este atributo
    // private readonly _color: string; //protected, además de las clases que hereden pueden acceder a este atributo
    // private readonly _placas?: string;  
    //AL INSTANCIAR UN OBJETO, SE INIZIALIZAN SUS ATRIBUTOS
    function Auto(numero_llantas, color, motor, marca, placas) {
        var _this = _super.call(this, motor, marca) || this;
        _this.numero_llantas = numero_llantas;
        _this.color = color;
        _this.motor = motor;
        _this.marca = marca;
        _this.placas = placas;
        return _this;
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
    Auto.prototype.arrancar = function () {
        //pass
    };
    return Auto;
}(Vehiculo));
var auto1 = new Auto(5, "rojo", "motor", "marca");
auto1.arrancar();
