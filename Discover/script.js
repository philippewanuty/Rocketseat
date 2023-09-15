function toggleId() {
  var element = document.getElementById('Change');

  if (element.classList.contains('ChangeTheme')) {
    element.classList.remove('ChangeTheme');
  } else {
    element.classList.add('ChangeTheme');
  }
}
