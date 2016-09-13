(function($){
  $.fn.carousel	= function(){
  var $left = $('.button-left');
  var $right = $('.button-right');
  var $elementsList = $('.carousel-element');
  var $currentLeftValue = 0;
  var $elementsCount = $('.carousel-list').find('li').length;
  var $maxOffset = 0;
  var $minOffset = -(($elementsCount - 3) * 410); 
  
	$left.on('click', function(){
	  if($minOffset != $currentLeftValue){	
	  $currentLeftValue -= 410;
	  $elementsList.animate({
		  left: $currentLeftValue + 'px'
	  },500);}
	});
	$right.on('click', function(){
	  if($maxOffset != $currentLeftValue){	
	  $currentLeftValue += 410;
	  $elementsList.animate({
		  left: $currentLeftValue + 'px'
	  },500);}
	});	
};
 })(jQuery);