function init() {

  const navText = document.querySelectorAll('.navtext')
  const about = document.querySelector('#about')
  // console.log(about)
  // const skills = document.querySelector('#skills')

  // Loop through and add the active class to the current/clicked link
  for (let i = 0; i < navText.length; i++) {
    navText[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('active')

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '')
      }

      // Add the active class to the current/clicked button
      this.className += ' active'
    })
  }





  function isInViewport(elem) {
    const distance = elem.getBoundingClientRect()
    // console.log(distance)
    console.log(elem)
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }


  window.addEventListener('scroll', function () {
    // console.log('scrolling')
    // console.log(Boolean(isInViewport(about)))
    if (isInViewport(about)) {
      console.log('about is in viewport!')
    } else {
      console.log('nope')
    }
  }, false)


}

window.addEventListener('DOMContentLoaded', init)