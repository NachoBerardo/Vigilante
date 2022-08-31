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
console.log(capitalizar("papa"));

//Ejercicio 3
const MostrarAlumno = (AlumnoIngresado) => {
    console.log(
        "Nombre: " + AlumnoIngresado.nombre,
        "Apellido: " + AlumnoIngresado.apellido,
        "DNI: " + AlumnoIngresado.dni,
        "Curso: " + AlumnoIngresado.anio + "." + AlumnoIngresado.curso,
        "Nota: " + AlumnoIngresado.nota,
        )  
}
console.log(MostrarAlumno(Alumnos[0]));

//Ejercicio 4
let ArrayCapitalizado = Alumnos.map(function (x){
    return capitalizar(x.nombre) +" "+ capitalizar(x.apellido);

});
console.log(ArrayCapitalizado);

//Ejercicio 5
let ArrayMostrarAlumnos = Alumnos.map(function (x){
    return "Nombre: " + x.nombre,
    "Apellido: " + x.apellido,
    "DNI: " + x.dni,
    "Curso: " + x.anio + "." + x.curso,
    "Nota: " + x.nota;
});
console.log(ArrayMostrarAlumnos);