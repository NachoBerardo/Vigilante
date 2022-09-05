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
    console.log(" DNI: " + AlumnoIngresado.dni.toString().slice(0, 2) + "." + AlumnoIngresado.dni.toString().slice(2, 5) + "." + AlumnoIngresado.dni.toString().slice(5) +"\n Nombre y apellido: " + AlumnoIngresado.nombre + " " + AlumnoIngresado.apellido +  "\n Curso: " + AlumnoIngresado.anio + "°" + AlumnoIngresado.curso + "\n Nota: " + AlumnoIngresado.nota);
};
console.log("Ejercicio 3");
MostrarAlumno(Alumnos[6]);

//Ejercicio 4
 Alumnos.map((e) => capitalizar(e.nombre) && capitalizar(e.apellido));
     


//Ejercicio 5
console.log("Ejercicio 5");
let ArrayMostrarAlumnos = Alumnos.map((e) => MostrarAlumno(e));


//Ejercicio 6
console.log("Ejercicio 6");
let AlumnosAprobados = Alumnos.filter((e) => e.nota >= 6);
AlumnosAprobados.map((y) => MostrarAlumno(y));

//Ejercicio 7
console.log("Ejercicio 7");
let AlumnosCuartoAnio = Alumnos.filter((e) => e.curso === "B");
AlumnosCuartoAnio.map((y) => MostrarAlumno(y));

//Ejercicio 8
console.log("Ejercicio 8");
let AlumnosB = Alumnos.filter((e) => e.anio === 4);
AlumnosB.map((y) => MostrarAlumno(y));