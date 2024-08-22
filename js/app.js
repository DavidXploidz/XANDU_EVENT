// Counter 
const diasText = document.querySelector('.card--day');
const horasText = document.querySelector('.card--hour');
const minutosText = document.querySelector('.card--min');
const segundosText = document.querySelector('.card--seg');

const fechaObjetivo = new Date('2024-08-22 17:00:00');

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
const navBar = document.querySelector('.nav-bar');
window.onscroll = function(){
    const scroll = window.scrollY;
    if(scroll > 75){
        navBar.classList.add('nav-bar--active');
    }else{
        navBar.classList.remove('nav-bar--active');
    }
}

// Events menu mobile
const btnHam = document.querySelector('.nav-bar__ham');
const hamGroups = document.querySelectorAll('.nav-bar__group');
 
btnHam.addEventListener('click', () => {
  hamGroups.forEach(item => {
    item.classList.toggle('active');
  });
  navBar.classList.toggle('nav-bar--toggle');

  // Actualizar icono
  btnHam.src = navBar.classList.contains('nav-bar--toggle')
    ? './assets/svg/close_icon.svg'
    : './assets/svg/ham_icon.svg';
});