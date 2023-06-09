document.addEventListener('DOMContentLoaded', function () {
  // EVENTO DA ABA
  const tab = document.querySelectorAll('[data-tab]');

  tab.forEach(function (btn) {
    btn.addEventListener('click', ativarTabEBtn);
  });

  // SLIDER DA SEÇÃO PERSONAGENS
  const swiper = new Swiper('.swiper', {
    effect: 'cube',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// FUNÇÃO PARA ATIVAR O CONTEUDO DA ABA E DO BOTAO CLICADO
function ativarTabEBtn({ target }) {
  const tab = document.querySelectorAll('[data-tab]');
  const contentId = target.dataset.tab;
  const contents = document.querySelectorAll(`[data-tab-id]`);
  const content = document.querySelector(`[data-tab-id="${contentId}"]`);

  // REMOVER AS CLASSES DOS CONTEUDOS DAS ABAS E DO BOTÕES
  removerClasses(tab, 'geo__tab__btn--active');
  removerClasses(contents, 'geo__list--active');

  // ADICIONAR AS CLASSES DO CONTEUDO DA ABA E DO BOTAO CLICADO
  content.classList.add('geo__list--active');
  target.classList.add('geo__tab__btn--active');
}

// FUNÇÃO PARA REMOVER CLASSE DE UM OU MAIS ELEMENTOS
function removerClasses(elements, className) {
  elements.forEach((element) => {
    element.classList.remove(className);
  });
}
