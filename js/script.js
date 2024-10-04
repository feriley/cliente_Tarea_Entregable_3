

// Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
const array = ["Joaquin", 1, ["Hola","Adios"], true] ;


// 1) Recorrer el array e insertar dichos valores en el localstorage. 
// El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.


for (let i = 0; i < array.length; i++) {
    localStorage.setItem(`variable${i}`, array[i]);
}

// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage

for (let i = 0; i < array.length; i++) {
    const variable = localStorage.getItem(`variable${i}`);
    console.log(variable);
}



// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div

for (let i = 0; i < array.length; i++) {
    const variable = localStorage.getItem(`variable${i}`);
    const div = document.createElement("div");
    div.innerHTML = variable;
    document.body.appendChild(div);
}

// 4) insertar estos divs en el body del html

for (let i = 0; i < array.length; i++) {
    const variable = localStorage.getItem(`variable${i}`);
    const div = document.createElement("div");
    div.innerHTML = variable;
    document.body.appendChild(div);
}

