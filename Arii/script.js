/* =====================================================
   DESPLAZAMIENTO A LA HISTORIA
===================================================== */

function irAHistoria() {

    const seccionFlor =
        document.getElementById("flor");

    if (seccionFlor) {

        seccionFlor.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   GALERÍA DE FOTOS
===================================================== */

function mostrarFoto(elemento) {

    if (!elemento) {
        return;
    }


    elemento.classList.toggle("mostrada");


    crearCorazon();


}


/* =====================================================
   CREAR CORAZÓN FLOTANTE
===================================================== */

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.className =
        "corazon-flotante";


    const corazones = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💞"
    ];


    const indice =
        Math.floor(
            Math.random() *
            corazones.length
        );


    corazon.textContent =
        corazones[indice];


    const posicion =
        Math.random() * 100;


    corazon.style.left =
        posicion + "vw";


    const tamaño =
        Math.random() * 20 + 18;


    corazon.style.fontSize =
        tamaño + "px";


    const duracion =
        Math.random() * 2 + 3;


    corazon.style.animationDuration =
        duracion + "s";


    document.body.appendChild(
        corazon
    );


    setTimeout(
        function () {

            if (corazon) {
                corazon.remove();
            }

        },
        5000
    );

}


/* =====================================================
   MUCHOS CORAZONES
===================================================== */

function crearMuchosCorazones(cantidad) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(
            function () {

                crearCorazon();

            },
            i * 80
        );

    }

}


/* =====================================================
   BOTÓN SÍ
===================================================== */

function respuestaSi() {

    crearMuchosCorazones(60);


    crearConfeti(80);


    const celebracion =
        document.getElementById(
            "celebracion"
        );


    if (celebracion) {

        celebracion.classList.add(
            "mostrar"
        );

    }

}


/* =====================================================
   BOTÓN NO
===================================================== */

function respuestaNo() {

    const boton =
        document.getElementById(
            "botonNo"
        );


    if (!boton) {
        return;
    }


    const ancho =
        window.innerWidth;


    const alto =
        window.innerHeight;


    const posicionX =
        Math.random() *
        Math.max(
            0,
            ancho - 150
        );


    const posicionY =
        Math.random() *
        Math.max(
            0,
            alto - 100
        );


    boton.style.position =
        "fixed";


    boton.style.left =
        posicionX + "px";


    boton.style.top =
        posicionY + "px";


    boton.style.zIndex =
        "10000";


    const mensajes = [

        "¿Segura? 😏",

        "Piénsalo otra vez ❤️",

        "Ese botón no funciona así 😂",

        "Intenta con el otro 😌",

        "No creo que quieras ese 😏",

        "¿De verdad? 🥺",

        "Ese no era el botón correcto ❤️"

    ];


    const mensaje =
        mensajes[
            Math.floor(
                Math.random() *
                mensajes.length
            )
        ];


    mostrarMensajeTemporal(
        mensaje
    );

}


/* =====================================================
   MENSAJE TEMPORAL
===================================================== */

function mostrarMensajeTemporal(
    mensaje
) {

    const anterior =
        document.getElementById(
            "mensaje-temporal"
        );


    if (anterior) {
        anterior.remove();
    }


    const mensajeElemento =
        document.createElement(
            "div"
        );


    mensajeElemento.id =
        "mensaje-temporal";


    mensajeElemento.textContent =
        mensaje;


    mensajeElemento.style.position =
        "fixed";


    mensajeElemento.style.top =
        "25px";


    mensajeElemento.style.left =
        "50%";


    mensajeElemento.style.transform =
        "translateX(-50%)";


    mensajeElemento.style.padding =
        "13px 22px";


    mensajeElemento.style.background =
        "rgba(50, 0, 25, .95)";


    mensajeElemento.style.border =
        "1px solid rgba(255, 150, 190, .4)";


    mensajeElemento.style.borderRadius =
        "30px";


    mensajeElemento.style.color =
        "#ffe4ed";


    mensajeElemento.style.fontSize =
        "15px";


    mensajeElemento.style.zIndex =
        "100002";


    mensajeElemento.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.4)";


    document.body.appendChild(
        mensajeElemento
    );


    setTimeout(
        function () {

            mensajeElemento.remove();

        },
        1800
    );

}


/* =====================================================
   CERRAR CELEBRACIÓN
===================================================== */

function cerrarCelebracion() {

    const celebracion =
        document.getElementById(
            "celebracion"
        );


    if (celebracion) {

        celebracion.classList.remove(
            "mostrar"
        );

    }

}


/* =====================================================
   CONFETI
===================================================== */

function crearConfeti(
    cantidad
) {

    const colores = [

        "#ff4f91",
        "#ff8eb5",
        "#ffc0d8",
        "#ffffff",
        "#ffd166"

    ];


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(
            function () {

                const pieza =
                    document.createElement(
                        "div"
                    );


                pieza.className =
                    "confeti";


                const color =
                    colores[
                        Math.floor(
                            Math.random() *
                            colores.length
                        )
                    ];


                pieza.style.background =
                    color;


                pieza.style.left =
                    Math.random() *
                    100 +
                    "vw";


                pieza.style.width =
                    Math.random() *
                    8 +
                    5 +
                    "px";


                pieza.style.height =
                    Math.random() *
                    12 +
                    8 +
                    "px";


                pieza.style.animationDuration =
                    Math.random() *
                    2 +
                    3 +
                    "s";


                pieza.style.transform =
                    "rotate(" +
                    Math.random() *
                    360 +
                    "deg)";


                document.body.appendChild(
                    pieza
                );


                setTimeout(
                    function () {

                        pieza.remove();

                    },
                    6000
                );

            },
            i * 20
        );

    }

}


/* =====================================================
   MÚSICA
===================================================== */

let musicaReproduciendo =
    false;


function reproducirMusica() {

    const musica =
        document.getElementById(
            "musica"
        );


    const boton =
        document.getElementById(
            "botonMusica"
        );


    if (!musica) {
        return;
    }


    if (!musicaReproduciendo) {

        const promesa =
            musica.play();


        if (promesa !== undefined) {

            promesa
                .then(
                    function () {

                        musicaReproduciendo =
                            true;


                        if (boton) {

                            boton.innerHTML =
                                "❚❚ Pausar";

                        }

                    }
                )
                .catch(
                    function () {

                        mostrarMensajeTemporal(
                            "Toca nuevamente para reproducir la canción ❤️"
                        );

                    }
                );

        }

    } else {

        musica.pause();


        musicaReproduciendo =
            false;


        if (boton) {

            boton.innerHTML =
                "▶ Reproducir";

        }

    }

}


/* =====================================================
   CUANDO TERMINA LA CANCIÓN
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const musica =
            document.getElementById(
                "musica"
            );


        if (musica) {

            musica.addEventListener(
                "ended",
                function () {

                    musicaReproduciendo =
                        false;


                    const boton =
                        document.getElementById(
                            "botonMusica"
                        );


                    if (boton) {

                        boton.innerHTML =
                            "▶ Reproducir";

                    }

                }
            );

        }

    }
);


/* =====================================================
   CONTADOR
===================================================== */

/*
   Cambia esta fecha por la fecha exacta
   de su siguiente mes si es necesario.

   Formato:

   AAAA-MM-DDTHH:MM:SS
*/

const fechaObjetivo =
    new Date(
        "2026-10-25T00:00:00"
    ).getTime();


function actualizarContador() {

    const ahora =
        new Date().getTime();


    const diferencia =
        fechaObjetivo - ahora;


    const elementoDias =
        document.getElementById(
            "dias"
        );


    const elementoHoras =
        document.getElementById(
            "horas"
        );


    const elementoMinutos =
        document.getElementById(
            "minutos"
        );


    const elementoSegundos =
        document.getElementById(
            "segundos"
        );


    if (
        !elementoDias ||
        !elementoHoras ||
        !elementoMinutos ||
        !elementoSegundos
    ) {

        return;

    }


    if (diferencia <= 0) {

        elementoDias.textContent =
            "00";


        elementoHoras.textContent =
            "00";


        elementoMinutos.textContent =
            "00";


        elementoSegundos.textContent =
            "00";


        return;

    }


    const dias =
        Math.floor(
            diferencia /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const horas =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );


    const minutos =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    const segundos =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    elementoDias.textContent =
        String(dias).padStart(
            2,
            "0"
        );


    elementoHoras.textContent =
        String(horas).padStart(
            2,
            "0"
        );


    elementoMinutos.textContent =
        String(minutos).padStart(
            2,
            "0"
        );


    elementoSegundos.textContent =
        String(segundos).padStart(
            2,
            "0"
        );

}


/* =====================================================
   INICIAR CONTADOR
===================================================== */

actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* =====================================================
   EFECTO DE CORAZONES AL CARGAR
===================================================== */

window.addEventListener(
    "load",
    function () {

        setTimeout(
            function () {

                crearCorazon();

            },
            1000
        );


        setTimeout(
            function () {

                crearCorazon();

            },
            1800
        );


        setTimeout(
            function () {

                crearCorazon();

            },
            2600
        );

    }
);


/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const observador =
    new IntersectionObserver(
        function (
            elementos
        ) {

            elementos.forEach(
                function (
                    elemento
                ) {

                    if (
                        elemento.isIntersecting
                    ) {

                        elemento.target.style.opacity =
                            "1";

                        elemento.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elementos =
            document.querySelectorAll(
                ".carta, .historia-item, .foto, .contador-caja, .pregunta"
            );


        elementos.forEach(
            function (
                elemento
            ) {

                elemento.style.opacity =
                    "0";

                elemento.style.transform =
                    "translateY(25px)";

                elemento.style.transition =
                    "opacity .8s ease, transform .8s ease";


                observador.observe(
                    elemento
                );

            }
        );

    }
);