
$(document).ready(function () {
  // fade out .navbar
  $(function () {
    $(window).scroll(function () {
      // set distance user needs to scroll before we fadeOut navbar
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeOut();
	  } else {
        $('.navbar').fadeIn();
      }
    });
  });
});