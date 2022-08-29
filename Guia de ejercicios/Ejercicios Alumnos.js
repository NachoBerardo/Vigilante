let Alumnos = [
    {
        nombre: "Carlos",
        apellido: "Palonsky",
        dni: 46345678,
        anio: 4,
        curso: "A",
        nota: 8,
    },

    {
        nombre: "Carlos",
        apellido: "Gernardo",
        dni: 46755128,
        anio: 4,
        curso: "A",
        nota: 5,
    },

    {
        nombre: "Boris",
        apellido: "Su",
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
        nombre: "Micaela",
        apellido: "Juan",
        dni: 45006745,
        anio: 4,
        curso: "B",
        nota: 6,
    },

    {
        nombre: "Juli",
        apellido: "Miso",
        dni: 45919137,
        anio: 4,
        curso: "B",
        nota: 7,
    },

    {
        nombre: "Vicente",
        apellido: "Toro",
        dni: 47475643,
        anio: 3,
        curso: "B",
        nota: 2,
    },

    {
        nombre: "Ignacio",
        apellido: "Berardo",
        dni: 46871787,
        anio: 3,
        curso: "B",
        nota: 3,
    },

];

//Ejercicio 2
const capitalizar = (str) => {
    Palabra = str[0].toUpperCase() + str.slice(1,);
    return str;
}

console.log(capitalizar("hola"));

//Ejercicio 3
const MostrarAlumno = (Alumno) => {
    console.log(
        "Nombre: " + Alumno[0],
        "Apellido: " + Alumno[1],
        "DNI: " + Alumno[2],
        "Curso: " + Alumno[3,4],
        "Nota: " + Alumno[5],
    )
}