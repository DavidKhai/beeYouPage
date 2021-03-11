$(document).ready(function(){
    var banner = new Swiper('.slide-banner-item', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ]
    });

    // Slide carousel evaluate

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      // Slide carousel instagram

      var swiper1 = new Swiper('.instagram-product-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true
      });

      // Slide carousel product tote-hot

      var swiper3 = new Swiper('.list-product-hot', {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        itemsCustom : [
          [0, 2],
          [450, 2],
          [600, 2],
          [700, 3],
          [1000, 3],
          [1200, 4],
          [1400, 4],
          [1600, 4]
      ]
      });

      //show menu mobile

      $(".logo-menu-mobile").click(function (e) { 
        $(this).parent().children(".menu-small ul").toggleClass("show");
        e.preventDefault();
        
      });
      
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 0) {
      $(".logo-menu-mobile").parent().children(".menu-small ul").removeClass("show");
  }
}); //missing );
