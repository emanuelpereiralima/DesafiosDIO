// Definindo a classe PersonagemAventura
class PersonagemAventura {
  constructor(nomePersonagem, idadePersonagem, classePersonagem) {
    this.nomePersonagem = nomePersonagem;
    this.idadePersonagem = idadePersonagem;
    this.classePersonagem = classePersonagem;
  }

  // Método realizarAtaque para definir o tipo de ataque baseado na classe
  realizarAtaque() {
    let tipoAtaque = this.obterAtaque();

    // Exibe a mensagem de ataque com o nome e classe do personagem
    console.log(`${this.nomePersonagem}, o ${this.classePersonagem}, desferiu um ataque: ${tipoAtaque}`);
  }

  // Função privada para retornar o tipo de ataque
  obterAtaque() {
    // Usando operador ternário com estrutura de decisão para escolher o ataque
    return this.classePersonagem.toLowerCase() === 'feiticeiro' ? 'lançou um feitiço poderoso'
         : this.classePersonagem.toLowerCase() === 'espadachim' ? 'brandiu sua lâmina afiada'
         : this.classePersonagem.toLowerCase() === 'lutador' ? 'demonstrou suas habilidades marciais'
         : this.classePersonagem.toLowerCase() === 'assassino' ? 'arremessou uma kunai certeira'
         : 'realizou um ataque desconhecido';
  }
}

// Criando exemplos de personagens com diferentes classes
const feiticeiro = new PersonagemAventura('Merlin', 150, 'Feiticeiro');
const espadachim = new PersonagemAventura('Link', 25, 'Espadachim');
const lutador = new PersonagemAventura('Bruce Lee', 32, 'Lutador');
const assassino = new PersonagemAventura('Ezio', 28, 'Assassino');

// Executando os ataques
feiticeiro.realizarAtaque();   // Merlin, o Feiticeiro, desferiu um ataque: lançou um feitiço poderoso
espadachim.realizarAtaque();   // Link, o Espadachim, desferiu um ataque: brandiu sua lâmina afiada
lutador.realizarAtaque();      // Bruce Lee, o Lutador, desferiu um ataque: demonstrou suas habilidades marciais
assassino.realizarAtaque();    // Ezio, o Assassino, desferiu um ataque: arremessou uma kunai certeira
