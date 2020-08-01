//この外部ファイルを自分で作成する
$(function (){
　$('.main-visual').hide().fadeIn(2000);
});
　$('p').hide().fadeIn(5000);

$('p').hover(function() {

    //マウスを乗せたら色が変わる
    $(this).css('background', 'gray');

  //ここにはマウスを離したときの動作を記述
  }, function() {

    //色指定を空欄にすれば元の色に戻る
    $(this).css('background', '');

  });
