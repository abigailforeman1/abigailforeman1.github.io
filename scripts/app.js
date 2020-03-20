function init() {

  var navText = document.querySelectorAll('.navtext')

  // Loop through and add the active class to the current/clicked link
  for (var i = 0; i < navText.length; i++) {
    navText[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active')

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '')
      }

      // Add the active class to the current/clicked button
      this.className += ' active'
    })
  }

}

window.addEventListener('DOMContentLoaded', init)