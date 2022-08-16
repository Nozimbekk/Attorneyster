    const eightCardImg = document.querySelectorAll('.eight__card-img'),
          eightIcons = document.querySelectorAll('.eight__icon-div'),
          list = document.querySelector('.header__nav-item'),
          menu = document.getElementById('menu'),
          headerList = document.querySelector('.header__nav-item');

    menu.addEventListener('click', () => {
        headerList.classList.toggle('active')
    })

    for (let i = 0; i < eightCardImg.length; i++) {
        eightCardImg[i].addEventListener('click', () =>{
        eightIcons[i].classList.add('active')
        setTimeout(() => {
            eightIcons[i].classList.remove('active')
        }, 4000);
    })

}


AOS.init();