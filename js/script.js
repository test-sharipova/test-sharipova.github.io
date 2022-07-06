//menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

   

     //modal 

         
      
     $('.consult').on('click', function(){
        $('.overlay, .modal').fadeIn();
       });
       $('.modal__close, .overlay').on('click', function(){
         $('.overlay, .modal').fadeOut();
       });

        //filter mobile
    let filter = document.querySelector('.filter_mob'),
    filterClose = document.querySelector('.catalog__filter__close');  

filter.addEventListener('click', () => {
    document.querySelector('.filter').classList.add('show');
});
filterClose.addEventListener('click', () => {
    document.querySelector('.filter').classList.remove('show');
});
});
//background
if (screen.width > 768) {
    let bg = document.querySelector('.mouse-parallax-bg');
    bg.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
}


