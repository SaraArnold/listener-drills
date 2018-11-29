function catCarousel() {
    $('.thumbnail').on ('click' function(event) {
      const $Src = $(this).find('img').attr('src');
      const $Alt = $(this).find('img').attr('alt');  
   $('.hero img').attr('src', $Src).attr('alt', $Alt);
  });
   }
    $(catCarousel);