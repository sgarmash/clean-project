$(document).ready(function () {
  
  $('.header-burger').on('click', function(){
    $('.navigation').slideToggle();
  });

  $('.open-modal').on('click', function() {
    $('.modal.contact').fadeIn();
  });

  $('.open-search').on('click', function() {
    $('body').addClass('overflow');
    $('.modal.search').fadeIn();
  });
  
  $('.modal-close').on('click', function() {
    $('body').removeClass('overflow');
    $('.modal').fadeOut();
  });


  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    margin: 0,
    nav: false,
    items: 1
  });

  $.validator.setDefaults({
    debug: true,
    success: "valid"
  });

  $(".form.contact").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      phone: {
        required: true,
        minlength: 9
      },
      mail: {
        required: true,
        minlength: 9,
      }
    },
    messages: {
      name: {
        required: "This field must be filled",
      },
      phohe: {
        required: "This field must be filled",
      },
      mail: {
        required: "This field must be filled",
      }
    }
  });

  $(".form.search").validate({
    rules: {
      search: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      search: {
        required: "This field must be filled",
      }
    }
  });
});