//===========================スライドボタン作成==========================
let tab = $('#O_text_title_KM');
let obj =  $("#O_text_explanation_KM");
let tab2 = $('#O_text_title_GP');
let obj2 =  $("#O_text_explanation_GP");
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
        tab.append(data.TPFst.title);
        obj.append('<a href=' + data.TPFst.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'+
             data.TPFst.content1 + data.TPFst.content2 +
             data.TPFst.content3 + data.TPFst.content4 +
             data.TPFst.content5 + data.TPFst.content6 +
            data.TPFst.content7 )
        tab2.append(data.TPSnd.title);
        obj2.append('<a href=' + data.TPSnd.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'+
             data.TPSnd.content1 + data.TPSnd.content2 +
             data.TPSnd.content3 + data.TPSnd.content4 +
             data.TPSnd.content5 + data.TPSnd.content6 +
            data.TPSnd.content7 
        );
    });
});

//==================スクロール具合を知る=====================
var push_percent=false;
if( !window.scrollTop ) {
    window.scrollTop = ()=>{
      return document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
  
  function setScrollPos(){
    let $bar = document.querySelector('.scroll-pos .bar');
    let onscroll = ()=>{
      let $body = document.getElementsByTagName('body')[0];
      let per = Math.round(window.scrollTop()/($body.offsetHeight - document.documentElement.clientHeight) * 100);
      $bar.style.width = `${ per }%`;
      if(!push_percent){push_percent=true;}
      else{$.removeCookie('percent');}
      $.cookie('percent',`${ per }`,{expires:1});
      console.log(`${ per }`);
    };
    window.addEventListener('scroll',onscroll,false);
  }
  
  setScrollPos();