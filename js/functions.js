/* eslint-disable no-unused-vars */
//Проверка длины строки
function lengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

//Проверка является ли строка палиндромом
function isPalindrom(string) {
  string = string.replaceAll('', ' ').toLowerCase();
  return string === string.split('').reverse().join('');
}


//Дополнительное задание
const extractNumber = (string) => parseFloat(String(string).replace(/\D/g,''));

