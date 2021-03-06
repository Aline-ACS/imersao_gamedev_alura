class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura -this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadePulo = 0;
    this.gravidade = 6;
    this.alturaPulo = -40;
    this.pulos = 0;
    this.invencivel = false
  }
  
  pula() {
    if(this.pulos < 2) {
      this.velocidadePulo = this.alturaPulo;
      this.pulos ++
    }
  }
  
  aplicandoGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  
  colisao(inimigo) {
    if(this.invencivel){
      return false;
    }
    
    const precisao = .65
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }

}