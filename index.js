const yes = document.querySelector('.yes')
const no = document.querySelector('.no')
const yesCheck = document.querySelector('.yesCheck')
const noCheck = document.getElementById('no')
const message1 = document.querySelector('.message1')
const message2 = document.querySelector('.message2')
const btn = document.querySelector('.btn')



console.log(yes, no, yesCheck, noCheck)

noCheck.addEventListener("click", function() {
  // При клике на чекбоксе, стилизуйте метку
  if (noCheck.checked) {
      no.style.color = "#2cc92c"; 
      no.innerHTML = 'НУ КОНЕЧНО ЖЕ ДА !!!! ЭТО САМОЕ ДОЛГОЖДАННОЕ СОБЫТИЕ В МОЕЙ ЖИЗНИ !!!!'
      noCheck.disabled = true;
      message1.innerHTML = 'Поздравляю! Ты прошла тест на совместимость! Ты с Юрой на 10000000% супер совместимая пара! Ты сделала правильный выбор! Чтож, теперь узнай что тебя ждет! Кликай по кнопке!'
      btn.style.display = 'block'
  } else {
      no.style.color = "#c52424"; 
      no.innerHTML = 'Нет :('
      message1.innerHTML = ''
      btn.style.display = 'none'
  }
});

yesCheck.addEventListener("click", function() {
  // При клике на чекбоксе, стилизуйте метку
  if (yesCheck.checked) {
      message1.innerHTML = 'Очевидный выбор! Ты прошла тест на совместимость! Ты с Юрой на 10000000% супер совместимая пара! Ты сделала правильный выбор! Чтож, теперь узнай что тебя ждет! Кликай по кнопке!'
      btn.style.display = 'block'
      yesCheck.disabled = true;
  } else {
    message1.innerHTML = ''
    btn.style.display = 'none'
  }
});


btn.addEventListener("click", function() {
  // При клике на чекбоксе, стилизуйте метку
  message2.innerHTML = 'Тебя ждет супер крутой досуг с самым крутецким Юрцом на планете! Он будет дарить тебе улыбки и смех! А также будет сильно-сильно тебя обажать! С ним ты обретешь счастье и вы будете самой бомбической парой во вселенной ! Будете много путешествовать, заведете сколько захотите французских бульдогов, напишите кошачий реп-альбом, ни в чем не будете себе отказывать! (Но это не сразу) Ныряй в крутотенную жизнь с крутотенным мужчиной!!!'
});
