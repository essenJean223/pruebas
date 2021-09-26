let contador = 0;

window.addEventListener('load', () => {
    console.log("El contenido a cargado");
    let imagenes = [];
    imagenes[0] = 'img/motors.jpg';
    imagenes[1] = 'img/otc.jpg';
    imagenes[2] = 'img/tecno.jpg';
    imagenes[3] = 'img/teledyne.jpg';
    imagenes[4] = 'img/Kal.PNG';
    imagenes[5] = 'img/andros.png';
    imagenes[6] = 'img/sensors.jpg';
    imagenes[7] = 'img/envitec.png';
    imagenes[8] = 'img/Citi.png';
    imagenes[9] = 'img/tele-sensor.png';
    imagenes[10] = 'img/andros-62xx.png';
    imagenes[11] = 'img/andros-6500.png';

    function cambiarImagenes() {
        if (contador < imagenes.length) {
            document.slider.src = imagenes[contador];
            contador++;
        } else {
            contador = 0;
        }
    }

    setInterval(cambiarImagenes, 2000)
});

