//Проверка длины строки
function lengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

//Проверка является ли строка палиндромом
function palindrom(string) {
  srting = string.replaceAll('', ' ').toLowerCase();
  return string === string.split('').reverse().join('');
}


//Дополнительное задание
const extractNumber = (string) => parseFloat(String(string).replace(/\D/g,''));

