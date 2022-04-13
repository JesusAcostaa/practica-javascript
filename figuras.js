
//Codigo para el cuadrado

console.group("Cuadrado")


function perimetroCuadrado(lado){
    return lado *4;
}

function areaCuadrado(lado){
    return lado * lado;
} 


console.groupEnd();


//Codigo para el triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) { 
 return lado1 + lado2 + base;
} 

function areaTriangulo(base , altura) {
    return (base * altura)/2;
}

console.groupEnd();


//Codigo para la circunferencia

console.group("Círculos")

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
 
function areaCirculo(radio){
return (radio * radio) * PI;
}

console.groupEnd();
