$(document).ready(function() {
   
   // Fade in top navigation bar
   $(window).on('scroll', function() {
      var navTriggerPoint = $('#headerBanner').height() + $('#headerBanner').offset().top - 130;
      var currentScroll = Math.round($(window).scrollTop());
      
      if (currentScroll === 0) {
         $('#downButton').css('display', 'flex');
      }
      if (currentScroll >= 1) {
         $('#downButton').css('display', 'none');
      }
      
      if (currentScroll >= navTriggerPoint) {
         $('.navBar').fadeIn();
         $('.navBar').css('display', 'flex');
         console.log(navTriggerPoint);
      } else {
         $('.navBar').fadeOut();
      }  
   });
   
   $('#downButton').on('click', function() {
      $('#downButton').css('display', 'none');
      var scrollDepth = $('#firstBodyDiv').offset().top - 200;
    $('html,body').animate({
        scrollTop: scrollDepth
    }, 'slow');
   });
   
   
   
   
   // Dropdown one
   $('#halfWayMenuCategoryOne').mouseenter(function() {
      $('#halfWayMenuCategoryOne').css('color', 'darkorange');
      $('#halfWayMenuCategoryOneContent').css('display', 'block');   
   });
   $('#halfWayMenuCategoryOne').mouseleave(function() {
      $('#halfWayMenuCategoryOne').css('color', 'rgb(240, 240, 240)');
      $('#halfWayMenuCategoryOneContent').css('display', 'none');
   });
   
   // Dropdown two
   $('#halfWayMenuCategoryTwo').mouseenter(function() {
      $('#halfWayMenuCategoryTwo').css('color', 'darkorange');
      $('#halfWayMenuCategoryTwoContent').css('display', 'block');   
   });
   $('#halfWayMenuCategoryTwo').mouseleave(function() {
      $('#halfWayMenuCategoryTwo').css('color', 'rgb(240, 240, 240)');
      $('#halfWayMenuCategoryTwoContent').css('display', 'none');
   });
   
   // Dropdown three
   $('#halfWayMenuCategoryThree').mouseenter(function() {
      $('#halfWayMenuCategoryThree').css('color', 'darkorange');
      $('#halfWayMenuCategoryThreeContent').css('display', 'block');   
   });
   $('#halfWayMenuCategoryThree').mouseleave(function() {
      $('#halfWayMenuCategoryThree').css('color', 'rgb(240, 240, 240)');
      $('#halfWayMenuCategoryThreeContent').css('display', 'none');
   });
   
   // Dropdown four
   $('#halfWayMenuCategoryFour').mouseenter(function() {
      $('#halfWayMenuCategoryFour').css('color', 'darkorange');
      $('#halfWayMenuCategoryFourContent').css('display', 'block');   
   });
   $('#halfWayMenuCategoryFour').mouseleave(function() {
      $('#halfWayMenuCategoryFour').css('color', 'rgb(240, 240, 240)');
      $('#halfWayMenuCategoryFourContent').css('display', 'none');
   });
});

