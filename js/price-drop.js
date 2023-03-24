//событие глобального элемента window (нашего окна браузера)
//код сработает только при полной его загрузке
window.onload = function () {
  //записываем DOM элемент в переменную*
  btn = document.querySelector('.dropplist__menu');

  //записываем DOM элемент в переменную*
  text = document.querySelector('.tariff-plan__descr');

  //событие клик по нашему DOM элементу*
  btn.onclick = function () {
    //элементу добавляем/удаляем класс (toggle)
    //есть ещё add/remove, но toggle делает проверку
    //если класса нет - добавляет, если есть - удаляет
    text.classList.toggle('open');
  };
};

// DOM = Document Object Model
// комментарии можно удалить при добавлении в проект
