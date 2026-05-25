import './style.css'

window.scrollTo(0, 0)

const navLinks = document.querySelectorAll('.nav-links a')

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    target.scrollIntoView({ behavior: 'smooth' })
  })
})

document.querySelector('.nav-name').addEventListener('click', function(e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})