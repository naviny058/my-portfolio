const hamOpen = document.querySelector('#hamberger-open')
const hamClose = document.querySelector('#hamberger-close')
const ul = document.querySelector('#ul')

hamOpen.addEventListener('click', function () {
    hamClose.style.display = 'block'
    hamOpen.style.display = 'none'
    ul.style.transform = 'translateX(0)'

})
hamClose.addEventListener('click', function () {
    hamClose.style.display = 'none'
    hamOpen.style.display = 'block'
    ul.style.transform = 'translateX(-120%)'
})