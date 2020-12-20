window.onload = iniciar;

function iniciar() {
    btncalcular.addEventListener('click', clickBtnCalcular);
}


function clickBtnCalcular() {
    var txtPeso = document.getElementById("txtPeso").value;
    var txtAltura = document.getElementById("txtAltura").value;

    var imc = txtPeso / (txtAltura * txtAltura);
    alert('Su IMC es: ' + Math.round(imc));
}


//var contador = 0;
/*while (contador < 50) {
    console.log('valor: ' + contador);
    contador++;
}*/


/*do {
    console.log('valor: ' + contador);
    contador++;
} while (contador < 50);*/

/*var sumatoria = 0;
var contador = 0;

while (contador <= 100) {
    sumatoria += contador;
    contador++;
}

alert(sumatoria);*/


/* for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('valor: ' + i);
    }
}*/