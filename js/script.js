//javascrip for mixitup gellary
 var config = document.querySelector('.mymixcont');
 var mixer = mixitup(config);


//Jeguery plugin.
//This is a counter plugin,
$(document).ready(function(){

    $('.counter').counterUp({
        delay: 20,
        time: 8000
    });

    // AOS animation
    AOS.init({
        offset:400,
        duration:1000
    });
    //paralax window
    $('.parallax').parallax({
        speed:2
      });

    //slick slider
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      //owl carousel
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    //isotp gellary
      // init Isotope
  var $grid = $('.isotops_item').isotope({
    // options
  });
  // filter items on button click
  $('.isotops_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


      








});
