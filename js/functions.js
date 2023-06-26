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

//Перевод времени в минуты
const timeReceived = (time) => {
  const partsTime = time.split(':').map(Number);
  const [hours, minutes] = partsTime;
  return hours * 60 + minutes;
};

//Рабочее время
const workingDay = (beginning, end, startMeeting, durationMeeting) => {
  const beginningTime = timeReceived(beginning);
  const endTime = timeReceived(end);
  const startMeetingTime = timeReceived(startMeeting);

  if (
    startMeetingTime < beginningTime ||
    startMeetingTime > endTime ||
    startMeetingTime + durationMeeting > endTime
  ) {
    return false;
  }
  return true;
}


console.log(workingDay('08:00', '17:30', '14:00', 90));
console.log(workingDay('8:0', '10:0', '8:0', 120));
console.log(workingDay('08:00', '14:30', '14:00', 90));
console.log(workingDay('14:00', '17:30', '08:0', 90));
console.log(workingDay('8:00', '17:30', '08:00', 900));


