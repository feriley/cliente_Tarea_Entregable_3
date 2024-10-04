/*Storage es un API de almacenamiento web que nos permite almacenar datos de manera local en el navegador
sin necesidad de realizar conexion a una base de datos */
// Añadir variables
localStorage.setItem("nombre", "Joaquin"); //Solo almacena Strings
sessionStorage.setItem("nombre2", "Jorge Juan"); //Solo almacena Strings

let arr = ["Hola", "Mundo"];

const arrString = JSON.stringify(arr); //Pasar a String cualquier objeto
console.log(arrString);
localStorage.setItem("array", arrString);

// Acceder a variables
const nombre = localStorage.getItem("nombre");
console.log(nombre);

const arrayString = localStorage.getItem("array");
let arrayNormal = JSON.parse(arrayString);
console.log(arrayString);

// Eliminar variables
localStorage.removeItem("nombre");

// En local storage no existe actualizar. Para actualizar debemos acceder a la variable que queremos actualizar, modificarla y añadirla de nuevo
const arrayUpdated = JSON.parse(localStorage.getItem("array"));
arrayUpdated[0] = "Joaquin";
console.log(arrayUpdated);
localStorage.setItem("array", JSON.stringify(arrayUpdated));

localStorage.clear();