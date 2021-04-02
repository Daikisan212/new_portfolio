$(function() {
    $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
        $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
        $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
        $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
    });
});
$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkEZ8jXkIT073ZBQeIh5D44vt8KybS5YwbTYLFVwGBmWaciA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".Form-contents").fadeOut("slow");
            $(".section-text").hide().text("参考にさせていただきます。").fadeIn("2000");
            $(".section-title").hide().text("お問い合わせありがとうございました！").fadeIn("2000");
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });