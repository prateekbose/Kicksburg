const loader = document.querySelector('.loader')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const preloader = document.querySelector('.preload-img')
const shoesButtons = document.querySelectorAll('.hero-shoes li')
const shoesBack = document.querySelector('.hero-two')
const burger = document.querySelector('.burger')
const sideMenu = document.querySelector('.side-bar')
const siderMenuItems = document.querySelectorAll('.side-bar ul li')
const sideMenuBack = document.querySelectorAll('.side-bar .image')

body.style.display = 'none'
loader.style.display = 'block'

window.addEventListener('load', () => {
    loader.style.opacity = 0
    setTimeout(() => {
        body.style.display = 'block'
    },500)
    setTimeout(() => {
        nav.style.opacity = 1
    }, 3500)
})

const shoes = ["./assets/img/stephan-schmid-ntnAuagWMI8-unsplash.jpg", "./assets/img/vans.jpg", "./assets/img/nike.jpg", "./assets/img/jordan.jpg", "./assets/img/yeezy.jpg", "./assets/img/chucky.jpg"]

shoesBack.style.backgroundImage = `url(\"${shoes[0]}\")`

shoesButtons.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        shoesBack.style.backgroundImage = `url(\"${shoes[index+1]}\")`
    })
    item.addEventListener('mouseleave', () => {
        shoesBack.style.backgroundImage = `url(\"${shoes[0]}\")`
    })
})

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    sideMenu.classList.toggle('side-bar-active')
})

siderMenuItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        sideMenuBack[index].style.opacity = 1
        siderMenuItems.forEach(i => {
            if(i!=item){
                i.style.opacity = 0.5
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        sideMenuBack[index].style.opacity = 0
        siderMenuItems.forEach(i => {
            i.style.opacity = 1
        })
    })
})