const checkbox = document.getElementById('menu');
const navegador = document.getElementById('navegador');

checkbox.addEventListener('change', function(event) {
  if (event.target.checked) {
    navegador.style.transform = "translate(0%)";

  } else {
    navegador.style.transform = "translate(100%)";
  }
})

var json =  [
{
    id_rest:1,
    nombre: 'Mi Ternerita Norte',
    tipo: 'Churrasqueria, Tex-mex',
    precio: 4,
    img: 'img/paginaPrincipal/Steak.png',
    tipoRestaurante: 1
},
{
    id_rest:2,
    nombre: 'Bon Burger',
    tipo: 'Hamburguesas',
    precio: 4,
    img: 'img/paginaPrincipal/Rest1.jpg',
    tipoRestaurante: 2 //Comida Rapida = 2
},
{
    id_rest:3,
    nombre: 'Gula Coffee & Bistro',
    tipo: 'Cafe, Bistro',
    precio: 3,
    img: 'img/paginaPrincipal/Gula.png',
    tipoRestaurante: 3 //Cafe y Postres = 3
},
{
    id_rest:4,
    nombre: 'Cuenta Trez',
    tipo: 'Bar, Pizzeria',
    precio: 3,
    img: 'img/paginaPrincipal/Rest2.jpg',
    tipoRestaurante: 1 //Restaurante Fancy = 1
},
{
    id_rest:5,
    nombre: 'Super Arepa',
    tipo: 'Comida Rápida, Arepa',
    precio: 2,
    img: 'img/paginaPrincipal/superArepa.png',
    tipoRestaurante: 2
}
]


let app1 = new Vue({
    el: '#app-1',
    data: {
        mejoresRestaurantes:   json
        },
    methods: {
        newWindow: function(id){
             window.open('../restaurante.php?id='+id+'');
        }
    }

})
let app2 = new Vue({
    el: "#app-2",
    data: {
        mejoresRestaurantes: json
    },
    methods: {
        newWindow: function(id){
           window.open('../restaurante.php?id='+id+'');
        }
    }
})
let app3 = new Vue({
    el: "#app-3",
    data: {
        mejoresRestaurantes: json
    },
    methods: {
        newWindow: function(id){
             window.open('../restaurante.php?id='+id+'');
        }
    }
})

$(document).ready(function(){
    $('.menuLink').click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });
        $("#menu").prop("checked", false);
        e.preventDefault();
    })
 });
