function toggleMode(){
    // declaração da variavel html;
    const html = document.documentElement;
    
    // verificação se há a class light no meu html, e executa o remove ou add;
    html.classList.toggle('light');
  }
  