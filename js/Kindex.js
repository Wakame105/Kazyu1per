//===========================スライドボタン作成==========================
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
  obj.slideToggle();
  T_tab.toggleClass('open');
})
tab2.on('click',function(){
  obj2.slideToggle();
  T_tab2.toggleClass('open');
})

//==========================Jsonから読み取り=========================
$(function(){
    let json = "./assets/json/KOutput.json";
    $.getJSON(json,function(data){
        //========1つ目============
        tab.append(data.TPFst.title);  
        obj.append('<a href=' + data.TPFst.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'
        );
        for(let i in data.TPFst.contents){
          obj.append(data.TPFst.contents[i]);
        }
        //========2つ目============
        tab2.append(data.TPSnd.title);
        obj2.append('<a href=' + data.TPSnd.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>' 
        );
        for(let j in data.TPSnd.contents){
          obj2.append(data.TPSnd.contents[j]);
        }
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
    let $body = document.getElementsByTagName('body')[0];
      let per = Math.round(window.scrollTop()/($body.offsetHeight - document.documentElement.clientHeight) * 100);
    if($.cookie('percent')){
      $bar.style.width = `${ per }%`;
      let pix_top =  ($body.offsetHeight*per)/100;
    }
    let onscroll = ()=>{
      let $body = document.getElementsByTagName('body')[0];
      let per = Math.round(window.scrollTop()/($body.offsetHeight - document.documentElement.clientHeight) * 100);
      $bar.style.width = `${ per }%`;
      if(!push_percent){push_percent=true;}
      else{$.removeCookie('percent');}
      $.cookie('percent',`${ per }`,{expires:1});
    };
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
