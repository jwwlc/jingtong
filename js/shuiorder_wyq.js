/*
* @Author: Lenovo
* @Date:   2018-09-28 21:26:41
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-29 18:48:06
*/


$(function(){
	let cover=$(".cover")
	let quan=$(".main ul li .right .one");
	// console.log(quan);

	quan.eq(0).click(function(){
		cover.css("display","block");
	})

	//优惠小圈圈
	
	let dot=$(".cover .bottom ul li .pic");
	let lis=$(".cover .bottom ul li");
	lis.click(function(){
		let i=$(this).index();
		dot.css("display","none").eq(i).css("display","block");
	})

	let close=$(".cover .close .list");
	close.click(function(){
		cover.css("display","none");
	})

	let cuo=$(".cover .top .cuo");
	cuo.click(function(){
		cover.css("display","none");
	})


	let jia=$(".order .order-right .order-right-four .last .jia");
	let jian=$(".order .order-right .order-right-four .last .jian");
	let math=$(".order .order-right .order-right-four .last span");
	let sum=$("footer .left .price span");
	let num=1;
	jia.click(function(){
		num++;
		math.html(num);
		sum.html(num*60);
	})
	jian.click(function(){
		num--;
		if(num<0){
			num=0;
		}
		math.html(num);
		sum.html(num*60);
	})

	



})