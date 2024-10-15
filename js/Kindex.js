let tab = $('#O_text_title');
let obj =  $("#O_text_explanation");
tab.on('click',function(){
    // if(obj.hasClass('active'))
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
    // } これでええやん
    obj.slideToggle();
})
    
