import renderPopup from './gallery-popup.js';

const menu = document.querySelector('.img-filters');
const gallery = document.querySelector('.pictures');

/**
 * @type {HTMLTemplateElement}
 */
const thumbnailTemplate = document.querySelector('#picture');

/**
 * @param {Array<Picture>} data
 */
function initGallery(data) {
  // TODO: Сортировка
  menu.classList.remove('img-filters--inactive');
  menu.addEventListener('click', onMenuClick);

  renderThumbnails(data);
}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onMenuClick(event) {
  const selectedButton = event.target.closest('button');

  if (selectedButton) {
    menu.querySelectorAll('button').forEach((it) => {
      it.classList.toggle('img-filters__button--active', it === selectedButton);
    });
    selectedButton.dispatchEvent(new Event('toggle'));
  }
}

/**
 * @param {Array<Picture>} data
 */
function renderThumbnails(data) {
  gallery.querySelectorAll('.picture').forEach((it) => it.remove());
  gallery.append(...data.map(createThumbnail));
}

/**
 * @param {Picture} data
 * @returns {HTMLAnchorElement}
 */
function createThumbnail(data) {
  const thumbnail = /** @type {HTMLAnchorElement} */ (
    thumbnailTemplate.content.querySelector('.picture').cloneNode(true)
  );

  thumbnail.querySelector('.picture__img').setAttribute('src', data.url);
  thumbnail.querySelector('.picture__img').setAttribute('alt', data.description);
  thumbnail.querySelector('.picture__comments').textContent = String(data.comments.length);
  thumbnail.querySelector('.picture__likes').textContent = String(data.likes);

  thumbnail.addEventListener('click', (event) => {
    renderPopup(data);
    event.preventDefault();
  });

  return thumbnail;
}

export default initGallery;
