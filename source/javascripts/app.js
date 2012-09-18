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

  // toggle sidebar 
  $('#mobile_header a').toggle(function(){
      $('#main').animate({left: "270px"}, 220);
      $('#mobile_header').animate({left: "270px"}, 220);
      return
   },
   function(){
      $('#main').animate({left: "0px"}, 220);
      $('#mobile_header').animate({left: "0"}, 220);
   });

   // sticky actions
    $('.user_profile').each(function(i) {
                var self = this;
                var position = $(this).position();
                console.log(position);
                console.log('min: ' + position.top + ' / max: ' + parseInt(position.top + $(this).height()));
                $(this).scrollspy({
                  min: position.top + 0,
                  max: position.top + $(self).height() - 100,
                  onEnter: function(element, position) {
                    if(console) console.log('entering ' +  element.id);
                     $(self).find(".actions").addClass("fixed");
                  },
                  onLeave: function(element, position) {
                    if(console) console.log('leaving ' +  element.id);
                     $(self).find(".actions").removeClass("fixed");
                  //  $('body').css('background-color','#eee');
                  }
          });
      });



     


});


