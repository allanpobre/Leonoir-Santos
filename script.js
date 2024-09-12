const selecionados = {
    'Pizza de Calabresa': { quantidade: 0, preco: 49.90 },
    'Pizza Quatro Queijos': { quantidade: 0, preco: 54.90 },
    'Pizza Marguerita': { quantidade: 0, preco: 49.90 },
    'Pizza de Frango Catupiry': { quantidade: 0, preco: 57.90 },
    'Pizza de Strogonoff': { quantidade: 0, preco: 69.99 },
    'Vinho Seco': { quantidade: 0, preco: 59.99 },
    'Cola': { quantidade: 0, preco: 14.99 },
    'Guaraná': { quantidade: 0, preco: 10.99 },
    'Suco de Laranja': { quantidade: 0, preco: 9.99 },
    'Cerveja': { quantidade: 0, preco: 4.45 },
    'COMBO LARANJA': { quantidade: 0, preco: 65.25 },
    'COMBO FAMILIA': { quantidade: 0, preco: 240.00 },
    'COMBO CHIQUE': { quantidade: 0, preco: 155.25 },
    'COMBO DEZESSEIS QUEIJOS': { quantidade: 0, preco: 209.95 },
    'COMBO BIZARRO': { quantidade: 0, preco: 69.69 }
};

function calcularTotal() {
    let total = 0;
    for (const produto in selecionados) {
        total += selecionados[produto].quantidade * selecionados[produto].preco;
    }
    return total;
}

function atualizarResultado() {
    document.getElementById("resultado").innerHTML = `A sua compra tem um total de R$${calcularTotal().toFixed(2)}`;
}

function atualizarQuantidade(nome) {
    const elementoQuantidade = document.getElementById(`quantidade-${nome.replace(/ /g, '-')}`);
    if (elementoQuantidade) {
        elementoQuantidade.innerHTML = `x${selecionados[nome].quantidade}`;
    }
}

function comprar(nome) {
    if (selecionados[nome]) {
        selecionados[nome].quantidade += 1;
        atualizarQuantidade(nome);
        atualizarResultado();
    }
}

function descomprar(nome) {
    if (selecionados[nome] && selecionados[nome].quantidade > 0) {
        selecionados[nome].quantidade -= 1;
        atualizarQuantidade(nome);
        atualizarResultado();
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function esconderMenu() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
}

// Adiciona event listeners para os itens do menu
document.getElementById('pizzas-menu').addEventListener('click', esconderMenu);
document.getElementById('bebidas-menu').addEventListener('click', esconderMenu);
document.getElementById('combos-menu').addEventListener('click', esconderMenu);



function exibirBebidas() {
    document.getElementById('pizzas').style.zIndex = '1'; // Pizzas vai para trás
    document.getElementById('pizzas').style.opacity = '0%'
    document.getElementById('bebidas').style.zIndex = '3'; // Bebidas vem para frente
    document.getElementById('bebidas').style.opacity = '100%'
    document.getElementById('combos').style.zIndex = '1'; 
    document.getElementById('combos').style.opacity = '0%'

}

function exibirPizzas() {
    document.getElementById('pizzas').style.zIndex = '3'; // Pizzas volta para frente
    document.getElementById('pizzas').style.opacity = '100%'
    document.getElementById('bebidas').style.zIndex = '1'; // Bebidas vai para trás
    document.getElementById('bebidas').style.opacity = '0%'
    document.getElementById('combos').style.zIndex = '1'; 
    document.getElementById('combos').style.opacity = '0%'
}

function exibirCombos() {
    document.getElementById('pizzas').style.zIndex = '1'; // Pizzas volta para frente
    document.getElementById('pizzas').style.opacity = '0%'
    document.getElementById('bebidas').style.zIndex = '1'; // Bebidas vai para trás
    document.getElementById('bebidas').style.opacity = '0%'
    document.getElementById('combos').style.zIndex = '3'; 
    document.getElementById('combos').style.opacity = '100%'
}