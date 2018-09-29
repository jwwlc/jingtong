$(function(){
	let btnL = $("main .text .texts .choose_num .cut");
    let btnR = $("main .text .texts .choose_num .add");
    let shuZ = $("main .text .texts .choose_num > span");
    let num = 1;
    let span = $("footer .footer_left > p span");
    console.log(span);
    shuZ.html(num);
    span.eq(1).html(num*45+117);

    btnR.click(function () {
        num ++ ;
        // let i=$(this).index();
        // btnL.removeClass("active");
        // $(this).addClass("active");
        shuZ.html(num);
        span.eq(1).html(num*45+117);

    })
    console.log(btnR);
    btnL.click(function () {
        num -- ;
        if (num <= 0){
            num = 0;
        }
        // let i=$(this).index();
        // btnR.removeClass("active");
        // $(this).addClass("active");
        shuZ.html(num);
        span.eq(1).html(num*45+117);
    })

})
    