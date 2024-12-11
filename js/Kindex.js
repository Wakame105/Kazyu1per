//===========================スライドボタン作成==========================
let tab = $('#O_text_title_KM');
let obj =  $("#O_text_explanation_KM");
let tab2 = $('#O_text_title_GP');
let obj2 =  $("#O_text_explanation_GP");
let Mtab = $('#M_text_title_KM');
let Mobj =  $("#M_text_explanation_KM");
let Mtab2 = $('#M_text_title_GP');
let Mobj2 =  $("#M_text_explanation_GP");
let lb_PH = $(".lb-tag_a");
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
Mtab.on('click',function(){
  Mobj.slideToggle();
})
Mtab2.on('click',function(){
  Mobj2.slideToggle();
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
         //========3つ目============
         Mtab.append(data.TPFst.title);  
         obj.append('<a href=' + data.TPFst.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>'
         );
         for(let k in data.TPFst.contents){
           obj.append(data.TPFst.contents[k]);
         }
         //========4つ目============
         Mtab2.append(data.TPSnd.title);
         obj2.append('<a href=' + data.TPSnd.url + ' target="_blank"> このプランの詳細のURLはこちらから </a><br>' 
         );
         for(let l in data.TPSnd.contents){
           obj2.append(data.TPSnd.contents[l]);
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
     // $('body,html').animate({scrollTop:pix_top},400,'swing');
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

  //======================アクセス回数をcookieに保持そして掲載する===========================
  let ght = $('#visitors');
  let vst;
  let uyt = $.cookie("visitors");
  if(uyt){
    vst = (+$.cookie("visitors"))+(+"1");
  }
  else{
    vst = 1;   
  }
  $.cookie('visitors',vst,{expires:1});
  ght.append(vst+'回');