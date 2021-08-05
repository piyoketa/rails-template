
$(function(){
    //ポップアップ表示
    $('#snsShare_open').on('click',function(){
        $('#snsShare').fadeIn(500);
    });
    $('.c-snsShare_close').on('click',function(){
        $('#snsShare').fadeOut(500);

        //リンクコピー取り消し
        setTimeout(function(){
            $(".c-snsShare_button").removeClass("c-snsShare_button-copy");
            $('.c-snsShare_button_link').show();
            $('.c-snsShare_button_text-copy').hide();
       },500);
    });

    //リンクコピー
    $('#URL_copy').on('click',function(){
        $('body').append('<textarea id="currentURL" style="position:fixed;left:-100%;">'+location.href+'</textarea>');
        $('#currentURL').select();
        document.execCommand('copy');
        $('#currentURL').remove();

        $(".c-snsShare_button").addClass("c-snsShare_button-copy");
        $('.c-snsShare_button_link').hide();
        $('.c-snsShare_button_text-copy').show();
    });
});
