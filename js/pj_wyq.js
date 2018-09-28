/*
* @Author: Lenovo
* @Date:   2018-09-28 23:08:45
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-28 23:19:53
*/
$(function(){
	let option=$(".option .option-box");
	let son=$(".contentbox .content")
	console.log(son);
	option.eq(0).addClass('active');
	son.css("display","block");
	option.click(function(){
		let i=$(this).index();
		son.css("display","none").eq(i).css("display","block");
		option.removeClass('active').eq(i).addClass('active');
	})
})