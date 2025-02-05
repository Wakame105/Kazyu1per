'use stript';
let tab = $('#O_text_title_KM');
let obj =  $("#O_text_explanation_KM");
let tab2 = $('#O_text_title_GP');
let obj2 =  $("#O_text_explanation_GP");
let lb_PH = $(".lb-tag_a");
let T_tab = $('#O_title_tab');
let T_tab2 = $('#O_title_tab2');
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
    // obj.slideToggle();
    obj.slideToggle();
  T_tab.toggleClass('open');
})
tab2.on('click',function(){
    // obj2.slideToggle();
    obj2.slideToggle();
  T_tab2.toggleClass('open');
})

//==========================Jsonから読み取り=========================
$(function(){
    let json = "./assets/json/KOutput.json";
    $.getJSON(json,function(data){
        tab.append(data.Fst.title);
        obj.append('<a href=' + data.Fst.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'+
             data.Fst.content1 + data.Fst.content2 +
             data.Fst.content3 + data.Fst.content4 +
             data.Fst.content5 + data.Fst.content6 +
            data.Fst.content7 )
        tab2.append(data.Snd.title);
        obj2.append('<a href=' + data.Snd.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'+
             data.Snd.content1 + data.Snd.content2 +
             data.Snd.content3 + data.Snd.content4 +
             data.Snd.content5 + data.Snd.content6 +
            data.Snd.content7 
        );
    });
});
if($.cookie('percent')){
    $bar.style.width = `${ per }%`;
    let pix_top =  ($body.offsetHeight*per)/100;
   // $('body,html').animate({scrollTop:pix_top},400,'swing');
  }
  let onscroll = ()=>{
    let $body = document.getElementsByTagName('body')[0];
  };
if( !window.scrollTop ) {
  window.addEventListener('scroll',onscroll,false);
}
setScrollPos();
//================上にスムーズスクロール page to top============================
let button_a =  $('#navi_button');
$(function(){   
  button_a.on('click',function(){
  $('html, body').animate({scrollTop:0},300);
  })
})
