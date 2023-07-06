import {showPopup} from './popup.js';

//контейнер
const popup = document.querySelector('.big-picture');
const commentTemplate = popup.querySelector('.social__comment');

function renderPopup({url, description, likes, comments}) {
  console.log({url, description, likes, comments});

  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.social__comments').replaceChildren(...comments.map(createComment));
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').alt = description;

  showPopup(popup);
}

function createComment(comments) {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = comments.avatar;
  comment.querySelector('.social__picture').alt = comments.name;
  comment.querySelector('.social__text').textContent = comments.message;

  return comment;
}

export default renderPopup;
