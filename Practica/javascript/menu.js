var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

// btnMenu.addEventListener('mouseover', function(){
//   nav.classList.toggle('mostrar');
// });

// btnMenu.addEventListener('mouseout', function(){
//   nav.classList.toggle('mostrar');
// });

btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});

// mouseover,click