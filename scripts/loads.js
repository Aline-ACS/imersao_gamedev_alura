function preload() {
  imagemCenario = loadImage('imagens/floresta.png');
  
  imagemTelaInicial = loadImage('imagens/telaInicial.png');
  
  fonteTelaInicial = loadFont('imagens/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json');
  
  imagemGameOver = loadImage('imagens/game-over.png');
  
  imagemVida = loadImage('imagens/coracao.png');
  
  imagemPersonagem = loadImage('imagens/correndo.png');
  
  imagemInimigo = loadImage('imagens/gotinha.png');
  
  imagemInimigoGrande = loadImage('imagens/troll.png');
  
  imagemInimigoVoador = loadImage('imagens/gotinha-voadora.png');
  
  somJogo = loadSound('sons/trilha_jogo.mp3');
  
  somPulo = loadSound('sons/somPulo.mp3');
}