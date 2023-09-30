//js
wow = new WOW(
{
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
})
wow.init();

//jq

$(document).ready(function(){


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

  
})


$(document).ready(function(){



})

//time


var segments = {
  0:   ['a','b','c',   'e','f','g'],
  1:   [  'c','f'   ],
  2:   ['a',   'c','d','e',   'g'],
  3:   ['a',   'c','d',   'f','g'],
  4:   [  'b','c','d',   'f'   ],
  5:   ['a','b',   'd',   'f','g'],
  6:   ['a','b',   'd','e','f','g'],
  7:   ['a',   'c',  'f'   ],
  8:   ['a','b','c','d','e','f','g'],
  9:   ['a','b','c','d',   'f','g'],
  'all': ['a','b','c','d','e','f','g'],
  '-':   [    'd'     ]
};
 
var lightSegments =function(number, clazz) {
  segments['all'].forEach(function(seg) {
    $(clazz +'.' + seg).css("background-color",'red');
 
var opacity = 0.15;
if ($.inArray(seg, segments[number]) > -1) {
  opacity = 1;
}
$(clazz +'.' + seg).fadeTo(300, opacity);
  });
};
 
var i1 = 0;
var i2 = 0;
var counter =function () {
  lightSegments(i1,'div.d1 div');
  lightSegments(i2,'div.d2 div');
 
  i1++;
  if (i1 == 10) {
    i1 = 0;
    i2++;
  }
  if (i2 == 10) {
    i2 = 0;
  }

};

 

$(document).ready(function () {

  lightSegments('-','div.d1 div');

  lightSegments('-','div.d2 div');

 

  var myTimer = window.setInterval(function () {

    counter();

  }, 1000);// 1000ms

});

//mixtup

$(document).ready(function(){

var mixer = mixitup('#hello', {
    animation: {
        duration: 300
    }
});

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

});


$(document).ready(function(){

$('.wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


});