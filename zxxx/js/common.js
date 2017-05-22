// 头部阴影
$(window).scroll(function(){
	if( $(window).scrollTop() >0 ){
		$(".header").addClass('shadow');
	}else{
		$(".header").removeClass('shadow');
	}
});	

// 侧滑导航
var isMainNav = 0;
$(".slide-nav-btn").click(function(){
	if(isMainNav == 0){
		$(".slide-nav").addClass('slide-nav-active');
		$(".section,.wrap,.header").addClass('nav-active');
		isMainNav = 1;
	}else{
		$(".section,.wrap,.header").removeClass('nav-active');
		setTimeout(function(){$(".slide-nav").removeClass('slide-nav-active');}, 100);
		isMainNav = 0;
	}
});

// 全屏滚动
$(function(){
	$('#section-group').fullpage({
		sectionsColor: ['#eaeef0', '#eaeef0', '#eaeef0', '#eaeef0'],
		'navigation': true,
	});
});
