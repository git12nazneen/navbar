$(function(){

	$(window).scroll(function(){
		var scrolling = $(window).scrollTop();
	
	if(scrolling > 20){
		$(".menu-bg").addClass("bg")
	}else{
		$(".menu-bg").removeClass("bg")
	}

	})

})