$(function(){
	let box1=$(".content .meal1 .box");
	let box2=$(".content .meal2 .box");
		box1.click(function(){
		let i=$(this).index();
		box1.removeClass("active").eq(i).addClass("active");
		box2.removeClass("active");
	})
		box2.click(function(){
		let i=$(this).index();
		box2.removeClass("active").eq(i).addClass("active");
		box1.removeClass("active");
	})
	

})