(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//pulsing footer text
$(document).ready(function(e){
      var i = 10;
      var fontsize;
      function pulseLoop() {
			fontsize = (Math.sin(i) * 3) + 20;
			$(".changer-container").css("font-size",fontsize + "px");
			i = i + .4;
        setTimeout(pulseLoop, 100);
      }
      pulseLoop();
        
      $(document).focus();
    });

// popup

