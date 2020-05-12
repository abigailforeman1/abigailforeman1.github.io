function init () {
  const navText = document.querySelectorAll('.navtext')
  const pageSections = [...document.querySelectorAll('.page-section')]
  const navLinks = [...document.querySelectorAll('.navtext')]

  // ! Function to add an active class to the nav link when it's clicked

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

  // ! Function to check if a section is in viewport

  // * this function returns a boolean based on whether the section passed to it is in viewport

  function isInViewport (elem) {
    const distance = elem.getBoundingClientRect()

    // const numbers = []
    // for (let i = distance.top; i <= distance.bottom; i++) {
    //   numbers.push(i)
    // }
    // console.log(numbers)

    // numbers.some(number => {
    //   return console.log(number >= 0 && number <= window.innerHeight)
    // })

    // console.log('distance', elem, distance)
    // console.log(window.innerHeight)
    // console.log('distance.bottom', elem, distance.bottom)

    // if numbers is greater or equal to 0 or less than or equal to window.innerHeight

    return (
      distance.top >= 0 && distance.top <= window.innerHeight
    // distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  // * this event listener is added to window scrolling and checks if isInViewport function returns true or false

  window.addEventListener('scroll', function () {
    // navLinks.forEach(navLink => navLink.classList.remove('active'))

    pageSections.filter(pageSection => {
      // console.log('1', window.innerHeight)
      // console.log('2', document.documentElement.clientHeight)
      if (isInViewport(pageSection)) {
        // console.log(isInViewport(pageSection))
        // console.log(pageSection.id, 'NOT in viewport!')
        navLinks[pageSections.indexOf(pageSection)].classList.add('active')
        return
      } else {
        // console.log(isInViewport(pageSection))
        // console.log(pageSection.id, 'is in viewport')
        navLinks[pageSections.indexOf(pageSection)].classList.remove('active')
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', init)
