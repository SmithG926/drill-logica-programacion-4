function resultadoFibonacci(){
    const input = document.getElementById(`fibonacci`).value;
    const respuesta = document.getElementById(`resultado`);
    const mensajeError = document.getElementById(`mensajeError`);

    respuesta.textContent = "";
    mensajeError.textContent = "";

    const num = parseInt(input);

    if (isNaN(num)) {
        mensajeError.textContent= "❌ Solo puedes colocar números. Intenta de nuevo.";
        return;
    }
    let fibonacci = 0;
    let fibonacci2 = 1;
    let fibonacci3 = "";
    for (i=1; i<=num; i++){
        fibonacci3 = fibonacci3 + fibonacci + (i < num ? "," : ".");
        let siguiente = fibonacci + fibonacci2;
        fibonacci=fibonacci2;
        fibonacci2 = siguiente;
    }
    resultado.textContent = `Los primeros ${num} números de Fibonacci son: ${fibonacci3}`
}

function cambiarColor () {
    document.getElementById("R").style.color="white";
}
