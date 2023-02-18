let menu=document.querySelector('#menu')
let navlist=document.querySelector('.navlist')
let header=document.querySelector('header')


window.addEventListener('scroll',()=>{
header.classList.toggle('sticky',window.scrollY>100)
    
})

window.addEventListener('scroll',() => { 
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
})
    


menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}
)

