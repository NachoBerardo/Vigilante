let Alumnos = [
    {
        nombre: "carlos",
        apellido: "palonsky",
        dni: 46345678,
        anio: 4,
        curso: "A",
        nota: 8,
    },

    {
        nombre: "carlos",
        apellido: "gernardo",
        dni: 46755128,
        anio: 4,
        curso: "A",
        nota: 5,
    },

    {
        nombre: "boris",
        apellido: "su",
        dni: 45447698,
        anio: 5,
        curso: "A",
        nota: 10,
    },

    {
        nombre: "Messi",
        apellido: "Lionel",
        dni: 47025284,
        anio: 5,
        curso: "A",
        nota: 1,
    },

    {
        nombre: "micaela",
        apellido: "juan",
        dni: 45006745,
        anio: 4,
        curso: "B",
        nota: 6,
    },

    {
        nombre: "juli",
        apellido: "miso",
        dni: 45919137,
        anio: 4,
        curso: "B",
        nota: 7,
    },

    {
        nombre: "vicente",
        apellido: "toro",
        dni: 47475643,
        anio: 3,
        curso: "B",
        nota: 2,
    },

    {
        nombre: "Iginacio",
        apellido: "berardo",
        dni: 46871787,
        anio: 3,
        curso: "B",
        nota: 3,
    },

];

//Ejercicio 2
const capitalizar = (str) => {
    MayusculaPalabra = str[0].toUpperCase(); 
    RestoDePalabra = str.slice(1);
    Palabra = MayusculaPalabra + RestoDePalabra;
    return Palabra;
}
console.log("Ejercicio 2");
console.log(capitalizar("papa"));

//Ejercicio 3

const MostrarAlumno = (AlumnoIngresado) => {
    return "Nombre: " + AlumnoIngresado.nombre + " Apellido: " + AlumnoIngresado.apellido + " DNI: " + AlumnoIngresado.dni + " Curso: " + AlumnoIngresado.anio + "." + AlumnoIngresado.curso + "Nota: " + AlumnoIngresado.nota;
};
console.log("Ejercicio 3");
console.log(MostrarAlumno(Alumnos[6]));

//Ejercicio 4
let ArrayCapitalizado = Alumnos.map(function (x){
    return capitalizar(x.nombre) +" "+ capitalizar(x.apellido);

});
console.log("Ejercicio 4");
console.log(ArrayCapitalizado);

//Ejercicio 5
let ArrayMostrarAlumnos = Alumnos.map(function (y){
    return MostrarAlumno(y);
});
console.log("Ejercicio 5");
console.log(ArrayMostrarAlumnos);

//Ejercicio 6
let AlumnosAprobados = Alumnos.filter(function (Aprobado){
    return Aprobado.nota >= 6;
});
console.log("Ejercicio 6");
console.log(AlumnosAprobados);

//Ejercicio 7
let AlumnosCuartoAnio = Alumnos.filter(function (CuartoAnio){
    return CuartoAnio.anio === 4;
});
console.log("Ejercicio 7");
console.log(AlumnosCuartoAnio);

//Ejercicio 8
let AlumnosCursoB = Alumnos.filter(function (CursoB){
    return CursoB.curso === "B";
});
console.log("Ejercicio 8");
console.log(AlumnosCursoB);