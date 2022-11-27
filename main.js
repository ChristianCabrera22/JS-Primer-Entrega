//Primera Pre-Entrega
let vida=3; //Cantidad de intentos
let alerVida=false; //Alerta sobre ultima vida
let letrasIngresadas =""; //va concatenando las letras ingresadas
let repetido=false; //bloquea el ingreso de una letra ya ingresada
let palabra="MASCOTA"; //Palabra ganadora, por ahora 1 sola.. con array podria poner más
let palabraTemporal=""; //concatena las letras ingresadas
let conGanador=0;
let win=false; //ganador o perdedor
const patron = new RegExp('^[A-Z]+$', 'i'); //patron para que se ingrese solo letras - Y NO NUMEROS -

 //Ingreso nombre y validando el nombre
let nombre=prompt("Hola! Como te llamas?");
while(nombre == null || nombre == "") {
    nombre=prompt("Por favor! Como te llamas?"); //Solicita nuevamente el nombre
}
console.log("Nombre del jugador: "+nombre);

//Mensaje bienvenida:
alert("Bienvenido "+nombre+", este es el juego del ahorcado! \n Tu misión es salvar al tutor de las garras de CODER");


do {
do {
    if(vida==1&&alerVida==false) {
        alert("Ultima vida!");
        alerVida=true;
    }
    letra=prompt("      ____ :::::JUEGO DEL AHORCADO::::: ____\n\nJugador: "+nombre+"\n\nVidas Restantes: "+vida+"\nPalabras ingresadas:  "+letrasIngresadas+"\n"+palabraTemporal+"\nIngresa una letra:"); //Solicita la letra
        if (letra!=null) {
        letra=letra.toUpperCase();
    }
    repetido=verRepetido(); //no te deja repetir la letra ingresada
    console.log("Repitio letra?: "+repetido);
} while(letra == null || letra == "" || letra.length !==1 || !patron.test(letra) || repetido==true ); //

console.log("Letra ingresada: "+letra);
console.log("Vidas: "+vida)
acerto=CompararLetra();

letrasIngresadas=letrasIngresadas+letra+" - ";
if (acerto==0) {
    vida--;
    console.log("Acertó?: NO");
    console.log("----------------------------------");
} else {    
    palabraTemporal=palabraTemporal+letra;
    conGanador=conGanador+acerto;
    console.log("Acertó?: SI");
    console.log(conGanador+" acertadas de "+palabra.length+"\n");
    console.log("----------------------------------");
    if (conGanador==palabra.length){
        console.log("Ganador!!");
        win=true;
        break;
    }
}

} while (vida!=0);

if (win==true){
    alert("Ganador!! ");
} else {
    console.log("FIN DEL JUEGO:::")
    alert("Lo siento, perdiste..\nLa palabra era: "+palabra+"\n\nSuerte en la proxima!");
}
//M A S C O T A




//funciones:
function agregarLetraPT(){
    for (let i = 0; i< palabra.length; i++) {
        let caracter = palabra.charAt(i);
        if(caracter == letra) {}
   }
}
function CompararLetra(){
    let b=0;
    for (let i = 0; i< palabra.length; i++) {
        let caracter = palabra.charAt(i);
        if(caracter == letra) {b++;}
    }
   return b;
}
function verRepetido(){
    let b=false;
    for (let i = 0; i< letrasIngresadas.length; i++) {
        let caracter = letrasIngresadas.charAt(i);
        if(caracter == letra) {b= true;}
   }
   return b;
}