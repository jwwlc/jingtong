/*
* @Author: Lenovo
* @Date:   2018-09-28 23:22:01
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-28 23:32:13
*/
$(function(){
	let option=$(".change .table");
	let son=$(".serverbox .server")
	console.log(son);
	option.eq(0).addClass('active1');
	son.css("display","block");
	option.click(function(){
		let i=$(this).index();
		son.css("display","none").eq(i).css("display","block");
		option.removeClass('active1').eq(i).addClass('active1');
	})
})