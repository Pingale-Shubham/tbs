"use strict";


// Prealoder
 function prealoader () {
   if ($('#preloader_1').length) {
     $('#preloader_1').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });
                
        });
  }
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}


// Theme-banner Video slider 
function BannerVideoSlider () {
  var banner = $("#main-banner-slider.video-slider");
  if (banner.length) {
    banner.revolution({
      sliderType:"standard",
      sliderLayout:"auto",
      loops:false,
      delay:10000,
      navigation: {
          arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
         bullets: {
                  enable: false,
              }

      },
      responsiveLevels:[2220,1183,975,751],
                gridwidth:[1170,970,770,350],
                gridheight:[850,850,850,700],
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }   
    }); 
  };
}


//Add OnepageNav / Sidebar
function onePageFixedNav() {
    if($('body').length){
      // Add scrollspy to 
      $('body').scrollspy({target: ".theme-main-header", offset: 70});   

      // Add smooth scrolling on all links inside the one-page-menu
      $(".one-page-menu li a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    }
}


// Mixitup gallery
function mixitupGallery () {
  var mixItem = $(".project-gallery");
  if (mixItem.length) {
        mixItem .mixItUp()
  };
}

// Progress Bar
function bootstrapProgress () {
  var smartskill = $ ('.skills');
  if(smartskill.length) {
      smartskill.skill();
  }
}


// Client SLider
function clientSlider () {
  var cSldier = $(".client-slider");
  if(cSldier.length) {
      cSldier.owlCarousel({
        animateOut: 'slideOutLeft',
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:5500,
        lazyLoad:true,
        items:1,
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var logoSlide = $("#partner_logo");
  if(logoSlide.length) {
      logoSlide.owlCarousel({
        loop:true,
        margin:-1,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            751:{
                items:3
            },
            1001:{
                items:5
            }
        }
    })
  }
}


//Contact Form Validation
function contactFormValidation () {
  var activeForm = $('.form-validation');
  if(activeForm.length){
    activeForm.validate({ // initialize the plugin
      rules: {
        Fname: {
          required: true
        },
        Lname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeForm.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeForm.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  if ($('.theme-main-header').length) {
    var sticky = $('.theme-main-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}

// Calendar
function cladendar () {
  var calender = $('#blog-calendar');
  if(calender.length) {
      calender.monthly();
  }
}

// Tooggle Home page menu click Function 
function subMenuExpend () {
  if($(".theme-main-header").length) {
    $('.theme-main-header li.dropdown-holder').append(function () {
      return '<i class="fa fa-angle-down"></i>';
    });
    $('.theme-main-header li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
  }
}

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     scrollToTop ();
     BannerVideoSlider ();
     mixitupGallery ();
     bootstrapProgress ();
     clientSlider ();
     partnersLogo ();
     contactFormValidation ();
     closeSuccessAlert ();
     cladendar ();
     subMenuExpend ()
  })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      prealoader ()
  })(jQuery);
 });

// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const dropdownHolders = document.querySelectorAll('.dropdown-holder');
    
    dropdownHolders.forEach(holder => {
        const link = holder.querySelector('.dropdown-toggle');
        const subMenu = holder.querySelector('.sub-menu');
        const policyLinks = holder.querySelectorAll('.sub-menu a');
        
        if (link && subMenu) {
            // Handle dropdown toggle
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 767) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other open dropdowns
                    dropdownHolders.forEach(otherHolder => {
                        if (otherHolder !== holder) {
                            otherHolder.classList.remove('active');
                            const otherSubMenu = otherHolder.querySelector('.sub-menu');
                            if (otherSubMenu) {
                                otherSubMenu.style.display = 'none';
                            }
                        }
                    });
                    
                    // Toggle current dropdown
                    holder.classList.toggle('active');
                    if (holder.classList.contains('active')) {
                        subMenu.style.display = 'block';
                    } else {
                        subMenu.style.display = 'none';
                    }
                }
            });

            // Handle policy links
            policyLinks.forEach(policyLink => {
                policyLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 767) {
                        // Don't prevent default - allow the link to work
                        // Close the dropdown after clicking
                        setTimeout(() => {
                            holder.classList.remove('active');
                            subMenu.style.display = 'none';
                        }, 100);
                    }
                });
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {
            if (!e.target.closest('.dropdown-holder')) {
                dropdownHolders.forEach(holder => {
                    holder.classList.remove('active');
                    const subMenu = holder.querySelector('.sub-menu');
                    if (subMenu) {
                        subMenu.style.display = 'none';
                    }
                });
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            dropdownHolders.forEach(holder => {
                holder.classList.remove('active');
                const subMenu = holder.querySelector('.sub-menu');
                if (subMenu) {
                    subMenu.style.display = '';
                }
            });
        }
    });
});

// Policy Menu Functions
function togglePolicyMenu(element) {
    const holder = element.closest('.dropdown-holder');
    const subMenu = holder.querySelector('.sub-menu');
    
    if (window.innerWidth <= 767) {
        // Mobile behavior
        // Close other dropdowns
        document.querySelectorAll('.dropdown-holder').forEach(otherHolder => {
            if (otherHolder !== holder) {
                otherHolder.classList.remove('active');
                const otherSubMenu = otherHolder.querySelector('.sub-menu');
                if (otherSubMenu) {
                    otherSubMenu.style.display = 'none';
                }
            }
        });
        
        // Toggle current dropdown
        holder.classList.toggle('active');
        if (holder.classList.contains('active')) {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    } else {
        // Desktop behavior
        holder.classList.toggle('active');
        if (holder.classList.contains('active')) {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    }
}

function openPolicy(policyId) {
    // Close the mobile menu if on mobile
    if (window.innerWidth <= 767) {
        const navbarCollapse = document.getElementById('navbar-collapse-1');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('in');
        }
    }
    
    // Close the dropdown
    const dropdownHolder = document.querySelector('.dropdown-holder');
    if (dropdownHolder) {
        dropdownHolder.classList.remove('active');
        const subMenu = dropdownHolder.querySelector('.sub-menu');
        if (subMenu) {
            subMenu.style.display = 'none';
        }
    }
    
    // Show the policy overlay
    const overlay = document.getElementById(policyId);
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close policy overlays when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('overlay')) {
        e.target.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close policy overlays when clicking close button
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const overlay = this.closest('.overlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    const dropdownHolders = document.querySelectorAll('.dropdown-holder');
    dropdownHolders.forEach(holder => {
        const subMenu = holder.querySelector('.sub-menu');
        if (window.innerWidth > 767) {
            // Desktop view
            holder.classList.remove('active');
            if (subMenu) {
                subMenu.style.display = '';
            }
        } else {
            // Mobile view
            if (!holder.classList.contains('active')) {
                if (subMenu) {
                    subMenu.style.display = 'none';
                }
            }
        }
    });
});

// Close dropdowns when clicking outside (desktop)
document.addEventListener('click', function(e) {
    if (window.innerWidth > 767) {
        const dropdownHolders = document.querySelectorAll('.dropdown-holder');
        dropdownHolders.forEach(holder => {
            if (!holder.contains(e.target)) {
                holder.classList.remove('active');
                const subMenu = holder.querySelector('.sub-menu');
                if (subMenu) {
                    subMenu.style.display = 'none';
                }
            }
        });
    }
});
