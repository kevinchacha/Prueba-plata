//creamos objeto
let deadpool={
    nombre:'Wade',
    apellido:'Wilson',
    poder:'Regeneracion',

    // getNombre :function() {
    //     return `${this.nombre}${this.apellido}${this.poder}`
    // }
    // getNombre :()=> {
    // return `${this.nombre}${deadpool.apellido}${this.poder}`
    // }
    getNombre(){ 
        return `${this.nombre}${this.apellido}${this.poder}` 
}}

console.log(deadpool.getNombre());
console.log("ags")
let nom=deadpool.nombre;
let ape=deadpool.apellido;
let pod=deadpool.poder;
console.log(nom,ape,pod)
console.log("------------------------------")
let{nombre :primeronom,apellido,poder}=deadpool; //primernom es como un alias
console.log(primeronom,apellido,poder)