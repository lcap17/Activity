// Comentario temporal para prueba de commit

function iniciarSesion() {
    let usuario = prompt("Ingrese su usuario:");
    let contraseña = prompt("Ingrese su contraseña:");
    
    // Puedes cambiar los valores por un sistema más seguro, como autenticación real.
    if (usuario === "admin" && contraseña === "1234") {
        alert("Inicio de sesión exitoso.");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

function capturarHorasEstacionamiento() {
    let horaEntrada = parseInt(prompt("Ingrese la hora de entrada (0-23):"));
    let horaSalida = parseInt(prompt("Ingrese la hora de salida (0-23):"));

    if (horaEntrada >= 0 && horaEntrada < 24 && horaSalida >= 0 && horaSalida < 24 && horaSalida >= horaEntrada) {
        return horaSalida - horaEntrada;
    } else {
        alert("Horas ingresadas inválidas. Inténtelo nuevamente.");
        return null;
    }
}

function calcularCostoEstacionamiento(horas) {
    let costoPorHora;
    
    if (horas < 2) {
        costoPorHora = 3000;
    } else if (horas <= 5) {
        costoPorHora = 2500;
    } else {
        costoPorHora = 2000;
    }
    
    return horas * costoPorHora;
}

function mostrarTotalEstacionamiento() {
    if (iniciarSesion()) {
        let continuar = true;
        
        while (continuar) {
            let horas = capturarHorasEstacionamiento();
            
            if (horas !== null) {
                let total = calcularCostoEstacionamiento(horas);
                alert(`El costo total de estacionamiento es: $${total}`);
            }
            
            continuar = confirm("¿Desea calcular el costo para otro vehículo?");
        }
        
        alert("Gracias por usar el sistema de estacionamiento.");
    }
}

// Llamada inicial para ejecutar el programa
mostrarTotalEstacionamiento();
