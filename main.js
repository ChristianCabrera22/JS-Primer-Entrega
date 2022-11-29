//Primera Pre-Entrega Christian Cabrera.. 
let vida=3; //Cantidad de intentos
let alerVida=false; //Alerta sobre ultima vida
let letrasIngresadas =""; //va concatenando las letras ingresadas
let repetido=false; //bloquea el ingreso de una letra ya ingresada

/////////////puedes cambiar la palabra, esta diseñado para que pongas la palabra que quieras: 

let palabra="MASCOTA"; //Palabra ganadora, por ahora 1 sola.. con array podria poner más

////////////////////////

palabra=palabra.toUpperCase(); //convierte todo en mayuscula (por las dudas que coloquen en minuscula)
let palabra2="";
let palabraTemporal=""; //concatena las letras ingresadas
let conGanador=0;
let faltantes=""; //auxilar1 faltantes ej: _A__S_T_
//let auxFaltantes=""; //auxiliar2 para guardar los mostrados
let palabrasAcertadas=""; //Muestra aciertos
let win=false; //ganador o perdedor
let auxFaltantes=""; //cantidad de ______ para ir mostrando
for (let i = 0; i< palabra.length; i++) {
    auxFaltantes=auxFaltantes+"_";
}
const patron = new RegExp('^[A-Z]+$', 'i'); //patron para que se ingrese solo letras - Y NO NUMEROS -

 //Ingreso nombre y validando el nombre
let nombre=prompt("Hola! Como te llamas?");
while(nombre == null || nombre == "") {
    nombre=prompt("Por favor! Como te llamas?"); //Solicita nuevamente el nombre
}
console.log("Nombre del jugador: "+nombre);

//Mensaje bienvenida:
alert("Bienvenido "+nombre+", este es el juego del ahorcado! \n Tu misión es salvar al tutor de las garras de CODER");


do { //arranca lo bueno
do {
    if(vida==1&&alerVida==false) {
        alert("Ultima vida!");
        alerVida=true;
    }
    letra=prompt("      ____ :::::JUEGO DEL AHORCADO::::: ____\n\nJugador: "+nombre+"\n\nVidas Restantes: "+vida+"\nLetras ingresadas:  "+letrasIngresadas+"\n-----:  "+palabra2+"  :-----\nIngresa una letra:"); //Solicita la letra
        if (letra!=null) {
        letra=letra.toUpperCase();
    }
    repetido=verRepetido(); //no te deja repetir la letra ingresada
    console.log("Repitio letra?: "+repetido);
    if(repetido==true){
        alert("Ya ingresaste la letra: "+letra+"\n Intente con otra por favor.")
    }
} while(letra == null || letra == "" || letra.length !==1 || !patron.test(letra) || repetido==true ); //

console.log("Letra ingresada: "+letra);
console.log("Vidas: "+vida)
acerto=CompararLetra(); //ver si acerto o no
tem=agregarLetraPT(); // agregar letra acertada
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
    console.log("\nPalabras acertadas: "+palabrasAcertadas+"    ");
    palabra2=palabrasAcertadas;
    console.log("\n----------------------------------");
    if (conGanador==palabra.length){
        console.log("Ganador!!");
        win=true;
        break;
    }
}

auxFaltantes=palabrasAcertadas;
faltantes=""; //resetea faltantes
palabrasAcertadas="";
} while (vida!=0);

if (win==true){
    alert("Ganador!! ");
} else {
    console.log("FIN DEL JUEGO:::")
    alert("Lo siento "+nombre+", perdiste..\nLa palabra era: "+palabra+"\n\nSuerte en la proxima!");
}
//A M S
//M A S C O T A //palabra


//A C T         //palabraTemporal
// ________     //aciertos
// ___             //faltantes
//funciones:
function agregarLetraPT() {
    for (let i = 0; i< palabra.length; i++) { //0 al 6
        if (palabra.charAt(i)==letra){
            faltantes=faltantes+letra;
        } else {
            faltantes=faltantes+"_";
        }
    }
    for (let i = 0; i< palabra.length; i++) {
        if(auxFaltantes.charAt(i)=="_" && faltantes.charAt(i)=="_") {
            palabrasAcertadas=palabrasAcertadas+"_";
        } else if (faltantes.charAt(i)=="_") {
            palabrasAcertadas=palabrasAcertadas+auxFaltantes.charAt(i);
        } else {
            palabrasAcertadas=palabrasAcertadas+faltantes.charAt(i);
        }
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