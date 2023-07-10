/**
 *
 * @param {Element} popup
 */
function showPopup(popup) {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  popup.addEventListener('click', onPopupClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 *
 * @param {Element} popup
 */
function hidePopup(popup) {
  popup.classList.add('hidden');

  document.body.classList.remove('modal-open');
  document.removeEventListener('click', onDocumentKeydown);
}

/**
 *Обработчик. evt - объект, который описывает событие.
 *target - ссылка на объект, которым было инициированно событие.
 * @param {MouseEvent & {target: Element, currentTarget: Element}} evt
 */
function onPopupClick(evt) {
  if (evt.target.closest('.cancel')) {
    hidePopup(evt.currentTarget);
  }
}

/**
 *
 * @param {KeyboardEvent} evt
 */
function onDocumentKeydown(evt) {
  if (evt.key.startsWith('Esc')) {
    hidePopup(document.querySelector('.overlay:not(.hidden)'));
  }
}

export {showPopup, hidePopup};
