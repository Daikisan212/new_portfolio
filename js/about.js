$(function() {
    $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
        $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
        $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
        $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
    });
});