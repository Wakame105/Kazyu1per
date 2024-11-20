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

//==========================Jsonから読み取り=========================
$(function(){
    let json = "./assets/json/KOutput.json";
    $.getJSON(json,function(data){
        for(let i in data){
            tab2.append(data[i].title);
            obj2.append('<a href=' + data[i].url + ' target="_blank"> URLはこちらから </a><br>'+
                data[i].content1 + data[i].content2 +
                data[i].content3 + data[i].content4 +
                data[i].content5 + data[i].content6   
            );
        }
    });
});