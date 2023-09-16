function toggleId() {
  var element = document.body;


  //including class
  element.classList.toggle('ChangeTheme')

  // option 2
 /* if (element.classList.contains('ChangeTheme')) {
   element.classList.remove('ChangeTheme');
  } else {
    element.classList.add('ChangeTheme');
  }*/

  //changing img

  const img = document.querySelector('#profile img')

  if(element.classList.contains('ChangeTheme')){
    img.setAttribute('src', 'assets/avatar-light.png');
  }
  else {
    img.setAttribute('src', 'assets/avatar.png');
  }
}
