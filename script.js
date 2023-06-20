function mudaEstilos(){
    const linkEstilos = document.querySelector('#linkEstilos');

    if(linkEstilos.hasAttribute('disabled')){
        linkEstilos.removeAttribute('disabled');
        botao.innerHTML = 'Remover Estilo';
    }
    else{
        linkEstilos.setAttribute('disabled', '');
        botao.innerHTML = 'Adicionar Estilo';
    }
}

const botao = document.querySelector('#botao');
botao.addEventListener('click', mudaEstilos);

