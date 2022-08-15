    const eightCardImg = document.querySelectorAll('.eight__card-img'),
    eightIcons = document.querySelectorAll('.eight__icon-div'),
    list = document.querySelector('.header__nav-item'),
    menu = document.getElementById('menu'),
    headerLink = document.querySelector('.header__nav-link'),
    scrolling = document.querySelector('.header__main-thre');

    menu.addEventListener('click', () => {
        list.classList.toggle('active')
    })
    
    
    for (let i = 0; i < eightCardImg.length; i++) {
        eightCardImg[i].addEventListener('click', () =>{
        eightIcons[i].classList.add('active')
    })
    eightCardImg[i].addEventListener('dblclick', () =>{
        eightIcons[i].classList.remove('active')
        
    })
}
headerLink.addEventListener('click', function () {
    headerLink.scrollIntoView(1000)
})















AOS.init();