$(function(){
  $('.button-left').carousel();
//Profile:
  var profile = $('#pirate').html();
  var data = {
    name: 'Джеймс Хэтфилд',
    foto: 'img/hetfield.jpg',
    profession: 'Музыкант',
    item1: 'Рок – музыка вечности, он никогда не стареет.',
    item2: 'Мы Metallica, мы приезжаем в город, “рвем его в клочья” и уезжаем.',
    item3: 'Я выбираю жить, а не существовать!',
    phone: '+38(066)123-45-67',
    link: 'https://vk.com/',
    feedback: 'We Will Rock You(с)' 	
  };
  var content = tmpl(profile, data);
  $('body').append(content);
  	
});