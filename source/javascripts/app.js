jQuery(document).ready(function(){

  //toggle class on action buttons
  $('.like, .hide, .flag').click(function(e) {
    $(this).toggleClass('active');
    $(this).siblings('a').removeClass('active');
    e.preventDefault();
  });

  //toggle filter group
   $('#filters ul li').click(function(e) {
        $('#filters ul li').removeClass('active');
        $(this).toggleClass('active');
        $(this).find('input[type="text"], textarea').first().focus();
        e.stopPropagation();
   });

   $(document.body).click(function() {
        $('#filters ul li').removeClass('active');
   });


});


