let burger = document.querySelector('.burg_menu')
let div1 = document.querySelector('.top')
let div2 = document.querySelector('.mid')
let div3 = document.querySelector('.bot')
let nav__menu = document.querySelector('.nav__menu')
let header = document.querySelector('.l-header')
let clone = nav__menu.cloneNode(true)
clone.classList.add('burg_link')
clone.classList.remove('nav__menu')

header.appendChild(clone)



burger.addEventListener('click', () => {
    div1.classList.toggle('top_active')
    div3.classList.toggle('bot_active')
    div2.classList.toggle('mid_active')
    clone.classList.toggle('burg_lin')
    clone.classList.toggle('burg_lin_active')
   
})

