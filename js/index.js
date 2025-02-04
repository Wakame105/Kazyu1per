//ガチャ部分のスライドとcss変更処理
let Gc_btn =  $('#Gacha_button');
let Gc_cnt = $('.Gacha_content');
let Gc_txt1 = $("#Gacha_text1");
let Gc_txt2 = $("#Gacha_text2");
let Gc_ttl = $('#Gacha_title');
let Gc_img = $('#Gacha_img');
let GC_CPR = $('#maru_C');
let GC_CPR_txt = $('#maru_C_text');
var click_flg=false;
var data_num = 0;
var random_num = 0;
var now_num=0;
var json_data;

if($.cookie('before_num')){
    now_num = $.cookie('before_num');
}

Gc_btn.on('click' ,function(){
    if(!click_flg){
    Gc_cnt.slideDown();
    Gc_cnt.css('display','flex');
    click_flg=true;
    }
    change_obj()
})
//==============Jsonからの読み取りとガチャ処理==================================================================================
$(function(){
   //ファイルの指定
    let json = "./assets/json/Gacha.json";
    //Jsonデータの取得
    $.getJSON(json,function(data){
        json_data=data;
        //データの数がlengthで取れないので無理やり取得
        for(let i in data){
            data_num++;
        }
       change_obj();
    });
});

function change_obj(){
    //データの数からランダムでとる。
    GetRandomNumber();
    
    let obj = json_data[random_num];
    //テキスト書き換え
    Gc_ttl.text(obj.title);
    Gc_txt1.text(obj.text1);
    Gc_txt2.text(obj.text2);
    Gc_img.attr('src',obj.img_url);
    if(obj.CPR_Type){
        if(obj.CPR_Type=='T'){
            GC_CPR.text("提供:");
        }
        else if(obj.CPR_Type=='C'){
            GC_CPR.text("©");
        }
        else if(obj.CPR_Type=='S'){
            GC_CPR.text("撮影:");
        }
        GC_CPR_txt.text(obj.CPR);
        GC_CPR_txt.attr('href',obj.CPR_url)
    }
    else{
        GC_CPR.text("");
        GC_CPR_txt.text("");
    }
}

function GetRandomNumber(){
    do{
        random_num = Math.floor(Math.random() *data_num);
    }
    while(now_num === random_num);
    now_num=random_num;
    $.cookie('before_num',`${ now_num }`,{expires:1});
}
