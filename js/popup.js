//Механика открытия/закрытия окна
function showPopup(popup) {
  popup.classList.remove('hidden');
  popup.addEventListener('click', onPopupClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function hidePopup(popup) {
  popup.classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('click', onDocumentKeydown);
}

//Обработчик. evt - объект, который описывает событие.
//target - ссылка на объект, которым было инициированно событие
function onPopupClick(evt) {
  if (evt.target.closest('.cancel')) {
    hidePopup(evt.currentTarget);
  }
}

function onDocumentKeydown(evt) {
  if (evt.key.startsWith('Esc')) {
    hidePopup(document.querySelector('.overlay:not(.hidden)'));
  }
}

// window.showPopup = showPopup;
// window.hidePopup = hidePopup;

export {showPopup, hidePopup};
