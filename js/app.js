// Counter 
const diasText = document.querySelector('.card--day');
const horasText = document.querySelector('.card--hour');
const minutosText = document.querySelector('.card--min');
const segundosText = document.querySelector('.card--seg');

const fechaObjetivo = new Date('2024-08-23 17:00:00');

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

// Animacion para las letras en header
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-4',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-4',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    })
    .add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
    });