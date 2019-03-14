function calcularSueldo() {
    var sueldo = document.getElementById('sueldo').value;


    if (sueldo > 0 && sueldo <= 1000) {
        sueldo = sueldo * .25
    }

    if (sueldo > 1001 && sueldo <= 1200) {
        sueldo = sueldo * 0.20
    }

    if (sueldo > 1201 && sueldo <= 1300) {
        sueldo = sueldo * 0.15
    }
    if (sueldo > 1301 && sueldo <= 1500) {
        sueldo = sueldo * 0.10
    }
    if (sueldo > 1500) {
        sueldo = sueldo * 0.5
    }

    document.getElementById("resultado").innerHTML = "la cantidad que se aumenta a tu sueldo es de: " + sueldo
}
