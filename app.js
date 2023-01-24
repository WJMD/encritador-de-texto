//Variables
 var btnEncriptar = document.querySelector(".btnEncriptar");
 var btnDesencriptar = document.querySelector(".btnDesencriptar");
 var btnCopiar = document.querySelector(".btnCopiar");
var bloqueSalida = document.querySelector(".bloque-salida");
var bloqueImg = document.querySelector(".bloque-img")

 function encriptar(){

     let texto = document.getElementById("Encripta").value;

     if (texto != ""){
        if (isValid(texto) ){
        
    
            texto = texto.replace(/e/igm, "enter");
            texto = texto.replace(/i/igm, "imes");
            texto = texto.replace(/a/igm, "ai");
            texto = texto.replace(/o/igm, "ober");
            texto = texto.replace(/u/igm, "ufat");
            
            console.log(texto);
            //Limpiar el input
            limpiar();
            //mostrar el texto
            document.getElementById("texArea").value = texto;
            mostrarBloque();
        }else{
            swal('Error!!','La palabras deben ser en Minusculas y sin caracteres especiales','error');
            limpiar();
        }

    }else{
        swal('Error!!','El campo de caracteres no puedes estar vacio','error');
     }

     
 }
 

 function desencriptar(){

     let texto = document.getElementById("Encripta").value;

     if (texto != ""){
        if (isValid(texto) ){

            //let texto = document.querySelector("Encripta").value;
            // texto = texto.toLoweCase();
            texto = texto.replace(/enter/igm, "e");
            texto = texto.replace(/imes/igm, "i");
            texto = texto.replace(/ai/igm, "a");
            texto = texto.replace(/ober/igm, "o");
            texto = texto.replace(/ufat/igm, "u");
            //document.querySelector("input").value = '';
            console.log(texto);
            //Limpiar el input
            limpiar();
            //mostrar el texto
            document.getElementById("texArea").value = texto;
            mostrarBloque();
        
        }else{
            swal('Error!!','La palabras deben ser en Minusculas y sin caracteres especiales','error');
            limpiar();

        }
     }else{
        swal('Error!!','El campo de caracteres no puedes estar vacio','error');
     }
     
     

 }


 function limpiar(){
     document.getElementById("texArea").value = "";
     document.getElementById("Encripta").value = "";
 }
 function copiarTexto(){
     var content = document.getElementById('texArea').value;
     navigator.clipboard.writeText(content)
     limpiar();
     ocultarBloque();
     Toastify({

        text: "COPIADO!!",
        
        duration: 2000
        
        }).showToast();

 }

 function ocultarBloque(){
    bloqueSalida.classList.add("ocultar");
    bloqueImg.classList.remove("ocultar");
 }

  function mostrarBloque(){
    bloqueSalida.classList.remove("ocultar");
    bloqueImg.classList.add("ocultar");
  }

 /*function comprobarminusculas(texto){
    let regular = !/[^a-z\sñ]/;
    return regular.test(texto);

 }*/

    //evaluar que el texto sea en minisculas
 function isValid(text) {

     return text ? !/[^a-z\sñ]/.test(text) : true;
   }

 btnEncriptar.onclick = encriptar;
 btnDesencriptar.onclick = desencriptar;
 btnCopiar.onclick = copiarTexto;