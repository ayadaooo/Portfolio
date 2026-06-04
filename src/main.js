import './style.css'

window.scrollTo(0, 0)

const faders = document.querySelectorAll('.fade-in')
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.33 })

faders.forEach(function(fader) {
    observer.observe(fader)
})

const nameElement = document.querySelector('#name')
const name = 'Adrian Yadao'
let index = 0

function type() {
    if (index < name.length) {
        nameElement.textContent += name[index]
        index++
        setTimeout(type, 100)
    }   else {
        nameElement.classList.add('done')
        type2()
    }
}

type()

const titleElement = document.querySelector('#title')
const title = 'Software Developer'
let index2 = 0

function type2() {
    titleElement.classList.add('typing')
    if (index2 < title.length) {
        titleElement.textContent += title[index2]
        index2++
        setTimeout(type2, 80)
    }   else {
        titleElement.classList.add('done')
    }
}
