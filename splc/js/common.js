$(function(){
	$(window).scroll(function(){
		if( $(window).scrollTop() >0 ){
			$(".header").addClass('shadow');
		}else{
			$(".header").removeClass('shadow');
		}
	});	
});
	
// 全屏滚动
$(function(){
	$('#section-group').fullpage({
		'navigation': true,
	});
});

// 侧滑导航
var isMainNav = 0;
	$(".slide-nav-btn").click(function(){
		if(isMainNav == 0){
			$(".slide-nav").addClass('slide-nav-active');
			$(".section,.header").addClass('nav-active');
			isMainNav = 1;
		}else{
			setTimeout(function(){$(".slide-nav").removeClass('slide-nav-active');}, 100);
			$(".section,.header").removeClass('nav-active');
			isMainNav = 0;
		}
});
