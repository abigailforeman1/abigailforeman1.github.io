function init() {

  var navText = document.querySelectorAll('.navtext')
  var about = document.querySelector('#about')
  // var skills = document.querySelector('#skills')

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


  


  // function activeHighlight(e) {
  //   console.log(e.target)
  // }

  window.addEventListener('scroll', function () {
    // console.log('scrolling')
    // console.log(Boolean(isInViewport(about)))
    if (isInViewport(about)) {
      console.log('about is in viewport!')
    } else {
      console.log('nope')
    }
  }, false)

  var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect()
    console.log(distance)
    // console.log(elem)
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }



}

window.addEventListener('DOMContentLoaded', init)