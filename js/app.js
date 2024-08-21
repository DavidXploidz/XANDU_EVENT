// Counter 
const diasText = document.querySelector('.card--day');
const horasText = document.querySelector('.card--hour');
const minutosText = document.querySelector('.card--min');
const segundosText = document.querySelector('.card--seg');

const fechaObjetivo = new Date('2024-08-21 17:00:00');

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaObjetivo.getTime() - ahora.getTime();

    const dias = Math.max(0, Math.floor(diferencia / (1000 * 60 * 60 * 24))); 
    const horas = Math.max(0, Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutos = Math.max(0, Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)));
    const segundos = Math.max(0, Math.floor((diferencia % (1000 * 60)) / 1000));

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    if (diferencia <= 0) {
        clearInterval(intervaloActualizacion);
    }
}

const intervaloActualizacion = setInterval(actualizarContador, 1000);

// NavBar scroll animation
window.onscroll = function(){
    const navBar = document.querySelector('.nav-bar');
    const scroll = window.scrollY;
    if(scroll > 75){
        navBar.classList.add('nav-bar--active');
    }else{
        navBar.classList.remove('nav-bar--active');
    }
}