$(function() {
  var circle = "M 7.7423617,6.5524041 C 0.14213171,13.241204 -0.28352929,25.218399 6.5488487,32.446038 13.237649,40.04627 24.578354,40.568996 32.442483,33.639553 39.813699,26.434583 40.216105,14.96193 33.635997,7.7459191 26.935569,0.39795815 15.101951,-0.40029585 7.7423617,6.5524041 Z"
  var square = "M 1.4639006,1.6816009 C 1.4129866,11.374999 1.1386316,31.038516 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 39.621131,30.764045 38.910573,9.4542879 39.093715,1.2274189 30.247144,1.2462399 8.8125376,1.8724369 1.4639006,1.6816009 Z";
  var tri = "M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,1.4728946 19.499615,1.5030295 Z";
  var firstTime = true;

  function init() {
    setTimeout(() => {
      firstTime = false;
    }, 4000)

    var timeline = anime.timeline({
      targets: ".shape1 path, .shape2 path, .shape3 path",
      autoplay: true,
      easing: 'linear',
      loop: true,
    });
    
    timeline
    .add({
      d: {
        value: [circle, square],
        delay: firstTime ? 3000: 2000,
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [square, square],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [square, tri],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [tri, tri],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [tri, circle],
        duration: 2000,
      },
    })
  }

  function squareFirst() {
    setTimeout(() => {
      firstTime = false;
    }, 4000)

    var timeline = anime.timeline({
      targets: ".shape1 path, .shape2 path, .shape3 path",
      autoplay: true,
      easing: 'linear',
      loop: true,
    });
    
    timeline
    .add({
      d: {
        value: [square, tri],
        delay: firstTime ? 3000: 2000,
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [tri, tri],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [tri, circle],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [circle, circle],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [circle, square],
        duration: 2000,
      },
    })
  }

  function triFirst() {
    setTimeout(() => {
      firstTime = false;
    }, 4000)

    var timeline = anime.timeline({
      targets: ".shape1 path, .shape2 path, .shape3 path",
      autoplay: true,
      easing: 'linear',
      loop: true,
    });
    
    timeline
    .add({
      d: {
        value: [tri, circle],
        delay: firstTime ? 3000: 2000,
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [circle, circle],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [circle, square],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [square, square],
        duration: 2000,
      },
    })

    .add({
      d: {
        value: [square, tri],
        duration: 2000,
      },
    })
  }

  //slick slider
        var $slide = $(".slide")
        .slick({
          infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          speed: 2000,
          autoplay: true,
          loop: true
        })
        .on({
          beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
            $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
          },
          afterChange: function() {
            $(".preve-slide", this).removeClass("preve-slide　slide-animation");
          }
        });
        $slide.find(".slick-slide").eq(0).addClass("slide-animation");




  $(".slick-dots, .slick-next, .slick-prev").on('click', function(){
    let index = $('.slick-current').data('slick-index');;
    moveSlide(index);
  });

  function moveSlide(index) {
    console.log(index);
    firstTime = true;
    if (index == 0) init();
    if (index == 1) squareFirst();
    if (index == 2) triFirst();
  }

  init();
});
  