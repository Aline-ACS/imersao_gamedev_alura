class BotaoGerenciador {
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    
    this.botao = createButton(this.texto);
    this.proximoEstado = 'jogo';
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botaoTelaInicial');
   
  }
  
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}