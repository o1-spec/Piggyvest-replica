const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const navToggle = function(){
    btn.classList.toggle('open')
    menu.classList.toggle('open')
    menu.classList.toggle('hidden')
}
btn.addEventListener('click',navToggle)

const navLinks = document.querySelectorAll('#nav-link')
navLinks.forEach(function(nav){
    nav.addEventListener('click',function(e){
        menu.classList.add('hidden')
        btn.classList.remove('open')
    })
})

const allSections = document.querySelectorAll('.section')

const revealSection = function(entries,observer){
    const [entry] = entries

    if(!entry.isIntersecting)return

    entry.target.classList.remove('section--hidden')
    Observer.observe(entry.target)
}


const Observer = new IntersectionObserver(revealSection,{
    root: null,
    threshold:0.15,
})

allSections.forEach(function(section){
    Observer.observe(section)
    section.classList.add('section--hidden');
})



