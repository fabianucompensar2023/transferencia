//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let especialidad1 = document.getElementById("especialidad1");
crearBarra(especialidad1);
let especialidad2 = document.getElementById("especialidad2");
crearBarra(especialidad2);
let especialidad3 = document.getElementById("especialidad3");
crearBarra(especialidad3);
let especialidad4 = document.getElementById("especialidad4");
crearBarra(especialidad4);
let especialidad5 = document.getElementById("especialidad5");
crearBarra(especialidad5);
let especialidad6 = document.getElementById("especialidad6");
crearBarra(especialidad6);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalEspecialidad1 = setInterval(function(){
            pintarBarra(especialidad1, 16, 0, intervalEspecialidad1);
        },100);
        const intervalEspecialidad2 = setInterval(function(){
            pintarBarra(especialidad2, 11, 1, intervalEspecialidad2);
        },100);
        const intervalEspecialidad3 = setInterval(function(){
            pintarBarra(especialidad3, 11, 2, intervalEspecialidad3);
        },100);
        const intervalEspecialidad4 = setInterval(function(){
            pintarBarra(especialidad4, 15, 3, intervalEspecialidad4);
        },100);
        const intervalEspecialidad5 = setInterval(function(){
            pintarBarra(especialidad5, 16, 4, intervalEspecialidad5);
        },100);
        const intervalEspecialidad6 = setInterval(function(){
            pintarBarra(especialidad6, 11, 5, intervalEspecialidad6);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#ff8000";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}