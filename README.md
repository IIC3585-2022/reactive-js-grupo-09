# Tarea 2 - Grupo 9

## Integrantes

| **Nombre**            | **github** | **mail**          |
|-----------------------|------------|-------------------|
| Gerardo Crot          | gicrot     | gicrot@uc.cl      |
| María Josefa Espinoza | mjespinoza | mjespinoza2@uc.cl |
| Julio Andrade         |  julioa    | jnandrade@uc.cl   |

## Instalación

Se necesita una conexión a internet ya que se obtienen las librerías del html.

Para jugarlo hay que abrir el archivo `index.html` en el navegador.

## Funcionamiento del juego

El juego contiene 2 jugadores (cuadros sin color de fondo) y 3 fantasmas (cuadrados con color de fondo). El jugador 1 se mueve con las flechas del teclado, mientras que el jugador 2 lo hace con las teclas `awsd`.

La idea del juego es llegar a los 10 puntos, los cuales se consiguen atrapando las monedas que van saliendo a lo largo del mapa. Los jugadores siempre avanzarán a menos que estén chocando con una pared, por lo que el usuario debe darle las direcciones. 

Si un jugador choca con un fantasma este se devolverá a su zona inicial y perderá 2 puntos (aunque no te preocupes, no puedes tener menos de 0).

--- 
## Objetivo

El objetivo es desarrollar una solución funcional reactiva en JavaScript usando la librería RxJs. La aplicación a desarrollar es alguna variación de un Pacman.  Pueden inventar algo bastante distinto pero con la idea básica.  Van a haber por lo menos dos personajes buenos (uno por jugador) y un número indeterminado de malos que los buenos deben evitar.  Pueden inventar cosas y recompensas para recoger en el camino.

* Deben poder jugar varios jugadores a la vez (mínimo 2).
* La interacción del usuario es mediante teclas, clicks o gestos.
* Debe ser simple JavaScript (Vanilla), no se puede usar React ni otros frameworks pero si pueden usar librerías como JQuery u otras para manejo de gráficos.
* La solución debe ser reactiva (observables).

Si no han jugado nunca [prueben con este](https://www.google.com/logos/2010/pacman10-i.html) que publicó Google por el 30 aniversario de este exitoso juego

