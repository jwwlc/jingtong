/*
* @Author: Lenovo
* @Date:   2018-09-29 10:51:52
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-29 11:33:25
*/
$(function(){
	$(".server .change .chang_box").eq(0).css("color","#7DBE97");
	$(".server .change .chang_box").click(function(){
		let i=$(this).index();
		$(".server .change .chang_box p").css('color', '#3bacfe').eq(i).css('color','#7DBE97');
		$(".server .change .chang_box i").css('color', '#3bacfe').eq(i).css('color','#7DBE97');
		$(".kuai").eq(i).slideToggle();
	});

	let option=$(".option .option-box");
	option.eq(0).addClass('active');
	option.click(function() {
		let i=$(this).index();
		option.removeClass('active').eq(i).addClass('active');
	});
	console.log(option);

})

