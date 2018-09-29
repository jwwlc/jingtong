$(function(){
	let client2=$(".content .client2 .client2_text .yuy");
	let span=$(".content .client2 .client2_text .yuy span");
	// console.log(client2,span);
	client2.click(function(){
		let move=function(){
		return span.css("height",function(){return Math.random()*0.4+"rem";});
		}
		setInterval(move,600);
	})
	
})
