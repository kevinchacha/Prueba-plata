//dos formas de declarar las funciones
//primera
/*function suma(a,b){
    return a+b;
}*/
// let sumar2 =suma(7,2)
// console.log(sumar)

let sumar=(a,b)=>{
    return a+b
}
console.log(sumar(7,2));
//saludar

let saludar=(nombre)=>`hola ${nombre}`;
console.log(saludar('Kevin'))