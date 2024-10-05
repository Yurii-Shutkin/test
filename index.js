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
  message2.innerHTML = 'Во-первых, ты будешь миллионершой и ни в чем не будешь себе отказывать. Во-вторых, все будут тебе завидовать и в тихую ненавидеть, потому-что ты оторвала самого лучшего мужчину в мире (это факт по всем версиям журналов всего мира). В третьих - ты будешь жить в крутейшем пент-хаусе (вроде это так правильно пишется) где будут происходить самые яркие события, на нас будут ровняться, Гетсби где-то курит в стороночке, там будут исполнены все твои микро-мечты (включая подвесной диван-качели). Заебёшь, соглашайся'
});
