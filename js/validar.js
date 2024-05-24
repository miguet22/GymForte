document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('input-nombre');
    const email = document.getElementById('input-correo');
    const objetivo = document.getElementById('objetivos');
    const plan = document.getElementById('plan-seleccionado');
    const turnos = document.querySelectorAll('input[name="turno"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let warnings = [];
        const regexNombre = /^[A-Za-z\s]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];

        // Validación del nombre
        if (!regexNombre.test(nombre.value)) {
            warnings.push('El nombre no es válido. No debe contener números.');
        }

        // Validación del correo electrónico
        if (!regexEmail.test(email.value)) {
            warnings.push('El email no es válido.');
        } else {
            const domain = email.value.split('@')[1];
            if (!validDomains.includes(domain)) {
                warnings.push('El email debe ser de uno de los siguientes dominios: @gmail.com, @hotmail.com, @yahoo.com, @outlook.com.');
            }
        }

        // Validación de nombre, correo, objetivos vacíos
        if (nombre.value.trim() === '') {
            warnings.push('Por favor, ingrese su nombre.');
        }
        if (email.value.trim() === '') {
            warnings.push('Por favor, ingrese su correo electrónico.');
        }
        if (objetivo.value.trim() === '') {
            warnings.push('Por favor, ingrese sus objetivos de entrenamiento.');
        }

        // Validación del plan
        if (plan.value === "Seleccione una opción") {
            warnings.push('Debe seleccionar un plan.');
        }

        // Validación del turno seleccionado
        let turnoSeleccionado = false;
        turnos.forEach(turno => {
            if (turno.checked) {
                turnoSeleccionado = true;
            }
        });
        if (!turnoSeleccionado) {
            warnings.push('Debe seleccionar un turno.');
        }

        // Mostrar advertencias una por una
        if (warnings.length > 0) {
            warnings.forEach(warning => {
                alert('Advertencia:\n' + warning);
            });
        } else {
            alert('Éxito:\nFormulario enviado correctamente.');
        }
    });
});
