/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();

  // $(document).ready(function(){
  //      $("#submit-form").submit((e) => {
  //       e.preventDefault()
  //       if (validateForm()){
  //       $.ajax({
  //         url: "https://script.google.com/macros/s/AKfycbxW3QVhkaBCLRbmy-MQc0OjC_dOBHH6XCvgGnM_GZ-2FGrJMWh9LtYrd3Wrj29zOSKaxw/exec",
  //         data: $("#submit-form").serialize(),
  //         method: "post",
  //         success: function (response) {
  //           alert("Form submitted successfully")
  //           window.location.reload()
  //           //window.location.href="https://google.com"
  //         },
  //         error: function (err) {
  //           alert("Something Error")
  //         }
  //       });
  //     }
  //     })
  //   })
//   var  nameError = document.getElementById('name-error')
// var companyError = document.getElementById('company-error')
// var emailError = document.getElementById('email-error')
// var phoneError = document.getElementById('phone-error')
// var messageError = document.getElementById('message-error')
// var submitError = document.getElementById('submit-error')

// function validateName(){
//     var name =document.getElementById('contact-name').value;
//     if(name.lenght == 0){
//         nameError.innerHTML = 'Name is required';
//         return false;
//     }
//     if(!name.match(/^[A-Za-z]+(\s{1}[A-Za-z]+)+$/)){
//         nameError.innerHTML = 'Enter full Name';
//         return false;
//     }
//     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;

// }
// function validateEmail(){
//     var email = document.getElementById('contact-email').value;
//     var emailError = document.getElementById('email-error')

//     if(email.lenght == 0){
//         emailError.innerHTML = 'Email is required';
//         return false;
//     }
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!email.match(emailPattern)){
//         emailError.innerHTML = 'Invalid Email';
//         return false;
//     }
//     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }
// function validateMessage() {
//     var message = document.getElementById('contact-message').value;
//     if(message.length === 0) {
//         messageError.innerHTML = 'Message is required';
//         return false;
//     }
//     messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }
// function validatePhone() {
//     var phone = document.getElementById('contact-phone').value;
//     var phoneError = document.getElementById('phone-error'); // Ensure this ID is correct

//     if(phone.length == 0) {
//         phoneError.innerHTML = 'Phone number is required';
//         return false;
//     }
//     if (!/^[0-9]*$/.test(phone)) {
//         phoneError.innerHTML = 'Enter numbers only';
//         return false;
//     }
//     if(phone.length !== 10) {
//         phoneError.innerHTML = 'Enter 10 digit';
//         return false;
//     }
//     if(!phone.match(/^[0-9]{10}$/)) {
//         phoneError.innerHTML = 'Invalid phone number';
//         return false;
//     }
//     phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
//     return true;
// }

// function validateForm(){

//     if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
//         submitError.innerHTML ='please fill contents';
//         return false;
        

//     }
//     submitError.innerHTML ='';
//     return true;

// }

// //submission


//       $(document).ready(function(){
//        $("#submit-form").submit((e) => {
//         e.preventDefault()
//         if (validateForm()){
//         $.ajax({
//           url: "https://script.google.com/macros/s/AKfycbxW3QVhkaBCLRbmy-MQc0OjC_dOBHH6XCvgGnM_GZ-2FGrJMWh9LtYrd3Wrj29zOSKaxw/exec",
//           data: $("#submit-form").serialize(),
//           method: "post",
//           success: function (response) {
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//           },
//           error: function (err) {
//             alert("Something Error")
//           }
//         });
//       }
//       })
//     })
$("#submit-form").submit((e) => {
  e.preventDefault();

  // Show loading message
  $(".loading").show();

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbw37yq33OMsMCTRV3j_1gchewjox1kndwQIzgGEM1D7ruVpFvfMVBGk7ZWMPxwtLAkw/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function(response) {
      // Hide loading message
      $(".loading").hide();

      // Show the sent message
      $(".sent-message").show();
      
      // Optionally, you can hide the form if you want after successful submission
      // $("#submit-form").hide();
    },
    error: function(err) {
      // Hide loading message
      $(".loading").hide();

      // Show error message
      $(".error-message").text("Something went wrong. Please try again.").show();
    }
  });
});
