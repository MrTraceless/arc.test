(function($) {
  // Code...
//Burger Menu
  var $menuWrpapper = $('.menu-wrapper');
  var $burger = $('.menu-burger');
  var $burger_active = $('menu-burger__active');

  $menuWrpapper.on('click', function() {
  $burger.toggleClass('menu-burger__active');

    });

    $burger_active.on('click', function() {
      $burger.removeClass('menu-burger__active');
    });

})(jQuery);
