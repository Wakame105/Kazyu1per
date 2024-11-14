'use stript';
let tab = $('#O_text_title');
let obj =  $("#O_text_explanation");
let tab2 = $('#O_text_title2');
let obj2 =  $("#O_text_explanation2");
tab.on('click',function(){
    // if(obj.hasClass('active'))下のやつでええやん
    // {
    //     obj.slideDown();
    //     obj.removeClass('active');
    //     $(this).removeClass('active');
    // }
    // else
    // {
    //     obj.slideUp();
    //     obj.addClass('active');
    //     $(this).addClass('active');
    // } 
    obj.slideToggle();
})
tab2.on('click',function(){
    obj2.slideToggle();
})
