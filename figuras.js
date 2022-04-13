
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
 return (lado1 + lado2 + base);
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


//Aquí interactuamos con el HTML

//Para el cuadrado
function calcularPerimetroCuadrado(){
    const input =  document.getElementById("InputCuadrado");
    const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro del cuadrado es: ${perimetro}`)
}

function calcularAreaCuadrado(){
    const input =  document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El area del cuadrado es: ${area}`)
}


//Para el Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputLado1");
    const input1 = document.getElementById("InputLado2");
    const input2 = document.getElementById("InputBase");

    const lado1 = parseInt(input.value);
    const lado2 = parseInt(input1.value);
    const base = parseInt(input2.value);

    const perimetroTrian = perimetroTriangulo(lado1, lado2, base);
    alert(`El perimetro del triangulo es  ${perimetroTrian}`);
}

function calcularAreaTriangulo(){

    const input2 = document.getElementById("InputBase");
    const inputAltu = document.getElementById("InputAltura");

    const base = parseInt(input2.value);
    const altura = parseInt(inputAltu.value);

    const areaTrian = areaTriangulo(base, altura);
    alert(`El area del triangulo es ${areaTrian}`);
}

