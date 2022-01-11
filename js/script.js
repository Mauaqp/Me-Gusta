//Función likes
function likeBtn (elemento){
    let contenedor = elemento.closest(".username").querySelector(".likes");
    let num = Number(contenedor.innerText);
    num ++;
    contenedor.innerText = num;
}
