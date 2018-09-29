/*
* @Author: Lenovo
* @Date:   2018-09-28 22:14:51
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-29 18:35:52
*/
$(function(){

	let option=$(".option .option-box");
	let son=$(".server");
	
	option.eq(0).addClass("action");
	son.eq(0).css("display","block");
	option.click(function(){
		let i=$(this).index();
		son.css("display","none").eq(i).css("display","block");
		option.removeClass("action").eq(i).addClass("action");

	})


	let pingjia=$(".server .table");
	let content=$(".server .content");
	pingjia.eq(0).addClass('active1');
	content.eq(0).css("display","block");
	pingjia.click(function(){
		let i=$(this).index();
		content.css("display","none").eq(i).css("display","block");
		pingjia.removeClass('active1').eq(i).addClass('active1');
	})
	console.log(content);

	// 水龙头订单加减
})