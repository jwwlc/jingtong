/*
* @Author: Lenovo
* @Date:   2018-09-27 08:38:35
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-28 23:23:20
*/
$(function(){
	let option=$(".change .table");
	let son=$(".contentbox .content")
	console.log(option);
	option.eq(0).addClass('active');
	son.css("display","block");
	option.click(function(){
		let i=$(this).index();
		son.css("display","none").eq(i).css("display","block");
		option.removeClass('active').eq(i).addClass('active');
	})
})