import {getRandomInteger, getUnicRandomId} from './utils.js';

const description = [
  'Когда-нибудь я все это пойму)',
  'Всё будет хорошо, но это не точно',
  'Нас всех ждет прекрасное будущее',
  'Скоро поеду на море'
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Георгий',
  'Максим',
  'Кира',
  'Мирон',
  'Павел'
];

const getPhotoId = getUnicRandomId(1, 25);

const getPhotoUrl = getUnicRandomId(1, 25);

const getLikes = getUnicRandomId(15, 200);

const getCommentId = getUnicRandomId(1, 777777);

/**
 *
 * @returns {PictureComment}
 */
const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: message[getRandomInteger(0, message.length - 1)],
  name: names[getRandomInteger(0, names.length - 1)]
});

/**
 *
 * @returns {Array<PictureComment>}
 */
const getCommentUsers = () => {
  let commentArr = [];
  commentArr = Array.from({length: getRandomInteger(0, 30)}, getComment);
  return commentArr;
};

/**
 *
 * @returns {Picture}
 */
const getPhotoObj = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: description[getRandomInteger(0, description.length - 1)],
  likes: getLikes(),
  comments: getCommentUsers()
});

/**
 *
 * @returns {Array<Picture>}
 */
const getArrPhotos = (length = 25) => {
  let objPhotos = [];
  objPhotos = Array.from({length}, getPhotoObj);
  return objPhotos;
};

export default getArrPhotos;
