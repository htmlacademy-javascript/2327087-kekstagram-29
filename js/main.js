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

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUnicRandomId = (min, max) => {
  const postValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (postValues.length >= (max - min + 1)) {
      return null;
    }
    while (postValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    postValues.push(currentValue);
    return currentValue;
  };
};

const getPhotoId = getUnicRandomId(1, 25);

const getPhotoUrl = getUnicRandomId(1, 25);

const getLikes = getUnicRandomId(15, 200);

const getCommentId = getUnicRandomId(1, 777777);

const getComment = () => ({
  id: getCommentId,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: message[getRandomInteger(0, message.length - 1)],
  name: names[getRandomInteger(0, names.length - 1)]
});

const getCommentUsers = () => {
  let commentArr = [];
  commentArr = Array.from({length: getRandomInteger(0, 30)}, getComment);
  return commentArr;
};

const getPhotoObj = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: description[getRandomInteger(0, description.length - 1)],
  likes: getLikes(),
  comments: getCommentUsers()
});

const getArrPhotos = (length = 25) => {
  let objPhotos = [];
  objPhotos = Array.from({length}, getPhotoObj);
  return objPhotos;
};

getArrPhotos();
