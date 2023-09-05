var listaNumerosEjemplo = [2,4,6,-1,5,-4,0];
/*
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden inverso al que fueron recibidos.
 * 
 * Ejemplos:
 * - invertirLista([2,3,4]) retorna [4,3,2]
 */
function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]))


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor calculado de promedio para los números en la lista recibida.
 * 
 * Ejemplos:
 * - calcularPromedio([2,3,4]) retorna 3
 */
function calcularPromedio(listaDeNumeros) {
    let sumaTotal = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        sumaTotal += listaDeNumeros[i];
    }
    let promedio = sumaTotal / listaDeNumeros.length;
    return promedio

}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]))
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo))


/**
 * Recibe
 * - `inicio`: un número, con el valor inicial de la lista
 * - `fin`: un número, con el valor final de la lista
 * 
 * Retorna: 
 * - una lista (array) con valores numéricos en secuencia, desde `inicio` hasta `fin`.
 * 
 * Ejemplos:
 * - crearListaDeNumeros(1,5) retorna [1,2,3,4,5]
 * - crearListaDeNumeros(3,6) retorna [3,4,5,6]
 * - crearListaDeNumeros(2,2) retorna [2]
 */
function crearListaDeNumeros(inicio, fin) {
    let array = []
    array[0] = inicio
    for (let i = 1; i < fin - 1; i++) {
        array[i] = inicio + i;
    }
    return array
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5))


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden decreciente (de mayor a menor).
 * 
 * Ejemplos:
 * - ordenarDeMayorAMenor([2,-1,4]) retorna [4,2,-1]
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    const n = listaDeNumeros.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (listaDeNumeros[j] < listaDeNumeros[j + 1]) {
                // Intercambia los elementos si están en el orden incorrecto.
                const temp = listaDeNumeros[j];
                listaDeNumeros[j] = listaDeNumeros[j + 1];
                listaDeNumeros[j + 1] = temp;
            }
        }
    }

    return listaDeNumeros;
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2,3,4]))
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo))


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor del numero más grande contenido en la lista recibida.
 * 
 * Ejemplos:
 * - encontrarNumeroMayor([2,3,4]) retorna 4
 */
function encontrarNumeroMayor(listaDeNumeros) {
    let mayor = listaDeNumeros[0]; 

    for (let i = 1; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] > mayor) {
            mayor = listaDeNumeros[i]; 
        }
    }

    return mayor;
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]))
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo))


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una lista (array) de palabras (string), con los mismos valores que la lista recibida pero ordenados de manera creciente de acuerdo a su cantidad de caracteres.
 * 
 * Ejemplos:
 * - ordenarPalabrasPorLongitud(['abc', 'a', 'ab']) retorna ['a', 'ab', 'abc']
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    listaDePalabras.sort(function(a, b) {
        return a.length - b.length; // Compara las longitudes de las palabras.
    });
    return listaDePalabras;
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']))


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una palabras (string) que dentro del listado tenga la menor cantidad de caracteres de longitud. En caso de que haya varias palabras con la misma longitud, se puede devolver la primera encontrada.
 * 
 * Ejemplos:
 * - encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c']) retorna 'a'
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    let palabraMasCorta = listaDePalabras[0]; 

    for (let i = 1; i < listaDePalabras.length; i++) {
        if (listaDePalabras[i].length < palabraMasCorta.length) {
            palabraMasCorta = listaDePalabras[i]; 
        }
    }

    return palabraMasCorta;
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']))


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista (array) de números, conteniendo sólo los valores positivos de la lista de números recibida.
 * 
 * Ejemplos:
 * - filtrarSoloPositivos([1,-1,2]) retorna [1,2]
 */
function filtrarSoloPositivos(listaDeNumeros) {
    const numerosPositivos = listaDeNumeros.filter(numero => numero > 0);

    return numerosPositivos;
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]))
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo))


/**
 * Recibe
 * - `listaDeNotas`: una lista (array) de números con valores entre 1 y 10.
 * 
 * Retorna: 
 * - un numero, con la cantidad de notas que superan el criterio de aprobación.
 * 
 * Ejemplos:
 * - contarAprobados([10,2,9]) retorna 2
 */
function contarAprobados(listaDeNotas) {
    const notaMinima = 7; 
    const notasAprobadas = listaDeNotas.filter(nota => nota >= notaMinima);

    return notasAprobadas.length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]))


/**
 * Recibe
 * - `listaDeValores`: una lista (array) de valores de distintos tipos.
 * 
 * Retorna: 
 * - una lista (array) conteniendo sólo los valores que son considerados 'truthy' por el lenguaje JavaScript
 * 
 * Ejemplos:
 * - filtrarSoloTruthy(["Hola", "", 0, 1]) retorna ["Hola", 1]
 */
function filtrarSoloTruthy(listaDeValores) {
    const valoresTruthy = listaDeValores.filter(valor => (valor > 0));

    return valoresTruthy;
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]))


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (strings).
 * 
 * Retorna: 
 * - Una oración (string), donde se enumeran cada una de las palabras recibidas en la lista.
 * - Bonus: una oración correctamente formada debería empezar en mayúscula, terminar con punto, y además el ultimo elemento de enumeración deberia estar separado con "y".
 * 
 * Ejemplos:
 * - enumerarLista(["Han", "Leia", "Luke", "Yoda"]) "Han, Leia, Luke y Yoda."
 */
function enumerarLista(listaDePalabras) {
    let oracion = listaDePalabras[0]; // Inicializa la oración con la primera palabra.

    for (let i = 1; i < listaDePalabras.length; i++) {
        if (i === listaDePalabras.length - 1) {
            // Si es el último elemento, unirlo con "y".
            oracion += ` y ${listaDePalabras[i]}.`;
        } else {
            // De lo contrario, unirlo con una coma.
            oracion += `, ${listaDePalabras[i]}`;
        }
    }

    // Convierte la primera letra en mayúscula.
    oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);

    return oracion;
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]))
