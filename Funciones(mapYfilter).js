// const Miarray = [1, 2, 3, 4, 5];

// Miarray.forEach((e, i)=> {
//     console.log ("En la posicion" + i + "se encuentra el elemento:" + e);

const Miarray = ["a", "b", "c", "d", "e"];
let OtroArray = Miarray.map (e => e.toUpperCase());
console.log(Miarray);
console.log(OtroArray);

const Miarray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = Miarray2.filter((e) => e % 2 == 0);
console.log(pares);

let Miarray2 = [...Miarray, ...Miarray2];
log(Miarray2);
