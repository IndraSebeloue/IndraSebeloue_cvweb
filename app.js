$(document).ready(function(){

  $('figcaption').hide();

/*ANIMATION SCROLL SUR LE DOCUMENT*/
  $(document).scroll(function(){
    $('.movingbtn').each(function(){
      if(isScrolledIntoView($(this))){
        setTimeout(function () {
          $(this).animate({margin: '70px 39.5%'}, 1000);

          $(this).next().find('.expro, .formation').each(function(){
            $(this).attr('style','opacity: 1; transition-duration: 3000ms;');
          });
         }.bind(this), 300);
        
        $('#menu a').removeAttr('style');
        $('a[href="#'+ $(this).attr('id') +'"]').attr('style', 'color: rgba(56, 173, 169, 0.6);');
      }
    })
  });

//SMOOTH SCROLL MENU 
  $("nav #menu a, #linktotop").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        window.location.hash = hash;
      });
    }
    
  });

  function isScrolledIntoView(elem){
    let $elem = $(elem);
    let $window = $(window);

    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();

    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

//MOUSE AND LEAVE IMAGE 'MES LIENS'
  $('figure').mouseenter(function(){
    $(this).find('figcaption').show();
    $(this).find('.hrfigcaption').attr('style', 'width: 100%;');
    $(this).find('figcaption p').attr('style','opacity: 1;');
  }).mouseleave(function(){
    $(this).find('figcaption').hide();
    $(this).find('.hrfigcaption').attr('style', 'width: 60%;');
    $(this).find('figcaption p').attr('style','opacity: 0;');
  })

});



