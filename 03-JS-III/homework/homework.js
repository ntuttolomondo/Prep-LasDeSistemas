// No cambies los nombres de las funciones.

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal"
  }
  else if (letra.length > 1) { //esta condición debería ir en el primer if 
    return "Dato incorrecto";
  }
  return "Dato incorrecto"
}


function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x === y) {
    return x;
  }
  else {
    return Math.max(Math.abs(x), Math.abs(y));
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return 'Allowed';
  }
  return 'Not allowed';
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return 'Online';
  }
  else if (status === 2) {
    return 'Away';
  }
  return 'Offline';
}


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman') {
    return 'Guten Tag!';
  }
  else if (idioma === 'mandarin') {
    return 'Ni Hao!';
  }
  else if (idioma === 'ingles') {
    return 'Hello!';
  }
  else if (idioma === 'undefined') {
    return 'Hola!';
  }
  return 'Hola!';
}


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  }
  return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === Math.floor(numero)) { // numero % 1 === 0
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) { // numero % 15 ===0
    return "fizzbuzz"
  }
  else if (numero % 5 === 0) {
    return "buzz";
  }
  else if (numero % 3 === 0) {
    return "fizz"
  }
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error';
  }
  else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  }
  else if (num1 > num2 && num1 > num3 && Math.floor(num1) === num1) {
    return 'Número 1 es mayor y positivo';
  }
  else if (num3 > num1 && num3 > num2) {
    var num3 = ++num3;
    return num3;
  }
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
if (numero ===0 || numero ===1) { // es más fácil poner numero<2
      return false;
    }    
  for (var i = 2; i < numero; i++) {
		if (numero % i === 0) {
      return false;
    }
    return true;
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor == !false) {
    return 'Soy verdadero';
  }
    return 'Soy falso'
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero.toString().length === 3) { // numero > 99 && numero < 1000
    return true;
  }
  return false;
}


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle ... while.
  let n=0;
  let resultado=numero;
  while (n<8) {
    n++;
    resultado = resultado+5;
  }
  return resultado;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  esVocal,
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};
