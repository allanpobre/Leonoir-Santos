function comprar(){

    const pizza = document.getElementsByClassName("btn btn-warning")

    var sabor = pizza.getAttribute('id')

}

function exibirBebidas() {
    document.getElementById('pizzas').style.zIndex = '1'; // Pizzas vai para trás
    document.getElementById('bebidas').style.zIndex = '3'; // Bebidas vem para frente
    document.getElementById('combos').style.zIndex = '1'; 
}

function exibirPizzas() {
    document.getElementById('pizzas').style.zIndex = '3'; // Pizzas volta para frente
    document.getElementById('bebidas').style.zIndex = '1'; // Bebidas vai para trás
    document.getElementById('combos').style.zIndex = '1'; 
}

function exibirCombos() {
    document.getElementById('pizzas').style.zIndex = '1'; // Pizzas volta para frente
    document.getElementById('bebidas').style.zIndex = '1'; // Bebidas vai para trás
    document.getElementById('combos').style.zIndex = '3'; 
}