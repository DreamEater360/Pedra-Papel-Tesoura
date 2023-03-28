const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const resultado = document.getElementById('resultado');

pedra.addEventListener('click', jogar);
papel.addEventListener('click', jogar);
tesoura.addEventListener('click', jogar);

function jogar(e) {
  const jogadaDoUsuario = e.target.id;
  const jogadaDoComputador = escolherJogadaDoComputador();
  const vencedor = determinarVencedor(jogadaDoUsuario, jogadaDoComputador);
  mostrarResultado(vencedor, jogadaDoUsuario, jogadaDoComputador);
}

function escolherJogadaDoComputador() {
  const jogadasPossiveis = ['pedra', 'papel', 'tesoura'];
  const indiceAleatorio = Math.floor(Math.random() * jogadasPossiveis.length);
  return jogadasPossiveis[indiceAleatorio];
}

function determinarVencedor(jogadaDoUsuario, jogadaDoComputador) {
  if (jogadaDoUsuario === jogadaDoComputador) {
    return 'Empate';
  } else if (jogadaDoUsuario === 'pedra' && jogadaDoComputador === 'tesoura' ||
             jogadaDoUsuario === 'papel' && jogadaDoComputador === 'pedra' ||
             jogadaDoUsuario === 'tesoura' && jogadaDoComputador === 'papel') {
    return 'Usuário';
  } else {
    return 'Computador';
  }
}

function mostrarResultado(vencedor, jogadaDoUsuario, jogadaDoComputador) {
  resultado.textContent = `Você jogou ${jogadaDoUsuario}, o computador jogou ${jogadaDoComputador}. ${vencedor} ganhou!`;
}
