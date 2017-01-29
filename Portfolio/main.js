//js for portfolio website
//Julie Stringham 2017

$(document).ready(function(){
	$(".article").hover(function(){
		$(this).children(".article-slider").stop().animate({height: 'toggle'}, 400);
		$(this).children(".credits").stop().animate({width: 'toggle'}, 250);
		$(this).find(".tag").stop().animate({height: 'toggle'}, 150);
	});
});