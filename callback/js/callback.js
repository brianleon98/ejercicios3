
function callback1(n) {
	alert("hola bienvenido" + " " + n);//muesta el mensaje mas lo que le entra por parametro
}

function proceso(callback) {
	var name = prompt("ingrese un nombre");
	//if que hace una comparacion
	if (name == "david" || name == "andres") { 
		callback(name)
	} else {
     alert ("acceso denegado")
	}
	
}
proceso(callback1);

function callback2(n) {
	alert("el resultado es" + n);//muestra un mensaje mas lo que le esta entrando por parametro
}

function proceso2(callback) {
    //esta funcion hace un if que compara si lo que esta en la variable i es igual a suma muestra el resultado
	var s = 2;
	var r = 5;
	var i = "suma"
	var resultado = s + r ;
	if (i == "suma") {
		callback(resultado)
	} else {
     alert ("no se pudo")
	}
	
}
proceso2(callback2);

function callback3(n) {
	document.write(" " + n);
}
//esta funcion imprime la tabla del numero que le introduscamos en el promp
function proceso3(callback) {
	var x = parseInt(prompt("ingrese numero"));
	for (var i = 1; i <= 10; i++) {
	  var resultado = i * x ;
	  callback(resultado)
	}	
}
proceso3(callback3);


function callback4(n) {
	alert(n); // funcion que muestra lo que le esta entrando por parametro
}

function proceso4(callback) {
	//esta funcion hace una comparacion de que si x es igual a call of duty o si es igual a fifa 12 muestra compraste si no no esta disponible
	var x = prompt("por favor ingrese nombre del juego")
	if (x == "call of duty" || x == "fifa 12") {
        callback(`compraste ${x}`)
	} else {
		callback("no esta disponible")
	}
}
proceso4(callback4);



function callback5(n) {
	alert(n);
}

function proceso5(callback) {
	var d = prompt("por favor ingrese nombre del producto")
	if (d == "arepas") {
        callback("no hay")
	} else {
		callback("exito en la compra")
	}
}
proceso5(callback5)
//esta funcion concate la variable saludo mas lo que lentra por bparametro para mostrar un saludo
function callback6(n) {
	var saludo = "hola como estas "
	alert(saludo + n);
}
//esta funcion muestra una ventana pidiendo un nombre  y se alamacena en una variable
function proceso6(callback) {
	var name = prompt("ingrese nombre");
	callback(name);
}
proceso6(callback6)

//aqui esta funcion multiplica lo que le entra por parametro * un numero que va ser generado aleatoriamente
function callback7(n) {
	var resultado = n * Math.random();
	alert(resultado);
}

//esta funcion pide un numero
function proceso7(callback) {
	var numero = parseInt(prompt("ingrese numero"));
	callback(numero);
}
proceso7(callback7)

//esta funcion hace la raiz cuadrada de el num ero que le ingresa por parametro
function callback8(n) {
	var resultado = Math.sqrt(n)
	alert(resultado);
}
//esta funcion pide un numero
function proceso8(callback) {
	var s = parseInt(prompt("ingrese numero"));
	callback(s);
}
proceso8(callback8)

//esta funcion muestra el resultado de la resta
function callback9(n) {
	alert(n);
}
//esta funcion pide dos numeros para ser restados
function proceso9(callback) {
	var d = parseInt(prompt("ingrese numero"));
	var s = parseInt(prompt("ingrese otro numero"));
    var resultado = s - d
	callback(resultado);
}
proceso9(callback9)





function callback10(n) {
	alert(n);
}

function proceso10(callback) {
	var d = parseInt(prompt("ingrese numero"));
	var s = parseInt(prompt("ingrese otro numero"));
    var resultado = s / d
	callback(resultado);
}
proceso10(callback10)




