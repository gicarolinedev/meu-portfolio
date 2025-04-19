document.addEventListener("DOMContentLoaded", function () {
  // Botões de navegação
  const botoes = {
    sobre: document.getElementById("btn-sobre"),
    projetos: document.getElementById("btn-projetos"),
    skills: document.getElementById("btn-skills"),
    contato: document.getElementById("btn-contato")
  };

  // Seções do site
  const secoes = {
    sobre: document.getElementById("sobre"),
    projetos: document.getElementById("projetos"),
    skills: document.getElementById("skills"),
    contato: document.getElementById("contato")
  };

  // Elementos da tela inicial
  const main = document.querySelector("main");
  const centralImage = document.querySelector(".central-image");
  const overlay = document.querySelector(".overlay"); // caso tenha um fundo escuro, pode estar nulo

  // Função para mostrar uma seção específica
  function mostrarSecao(secao) {
    // Oculta todas as seções
    Object.values(secoes).forEach(sec => {
      if (sec) sec.classList.add("hidden");
    });

    // Oculta a página inicial
    if (main) main.classList.add("hidden");
    if (centralImage) centralImage.classList.add("hidden");
    if (overlay) overlay.classList.add("hidden");

    // Mostra a seção selecionada
    if (secoes[secao]) secoes[secao].classList.remove("hidden");
  }

  // Voltar para a tela inicial
  function voltar() {
    // Esconde todas as seções
    Object.values(secoes).forEach(sec => {
      if (sec) sec.classList.add("hidden");
    });

    // Mostra a tela inicial
    if (main) main.classList.remove("hidden");
    if (centralImage) centralImage.classList.remove("hidden");
    if (overlay) overlay.classList.remove("hidden");
  }

  // Ativa todos os botões com id="btn-voltar"
  function setupVoltar() {
    const botoesVoltar = document.querySelectorAll(".btn-voltar");
    botoesVoltar.forEach(btn => {
      btn.addEventListener("click", voltar);
    });
  }

  // Adiciona eventos aos botões de navegação
  for (const chave in botoes) {
    if (botoes[chave]) {
      botoes[chave].addEventListener("click", function (event) {
        event.preventDefault();
        mostrarSecao(chave);
      });
    }
  }

  // Inicia botões de voltar
  setupVoltar();
});
