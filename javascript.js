// inner variables
var canvas, ctx;
var button, keyMan;
var backgroundImage;
var spaceShip;
var iBgShiftY = 1050;
var bDrawDialog = true;
var iDialogPage = 1;

var ManShiftX = 0;
var Itturn = true;
var falldown = 0;
var jump = 20;

var enemy = null; // game objects
var enemies = [];
var iEnemyW = 219; // enemy width
var iEnemyH = 42; // enemy height
var iEnemySpeed = 2; // initial enemy speed
// -------------------------------------------------------------



function scroll_list(){
	$(window).scroll(function(){
    var scrollVal = $(this).scrollTop();
   /* $("#test").text(scrollVal);*/
    var h1 = $('#chapter0').height()*0.9;
    var h2 = $('#chapter0').height() + $('#chapter1').height()*0.9;
    var h3 = $('#chapter0').height() + $('#chapter1').height() + $('#chapter2').height()*0.9;
    var h4 = $('#chapter0').height() + $('#chapter1').height() + $('#chapter2').height() + $('#chapter3').height()*0.9;
    var h5 = $('#chapter0').height() + $('#chapter1').height() + $('#chapter2').height() + $('#chapter3').height() + $('#chapter4').height()*0.9;
    var h6 = $('#chapter0').height() + $('#chapter1').height() + $('#chapter2').height() + $('#chapter3').height() + $('#chapter4').height() + $('#chapter5').height()*0.9;

    $("#test").text(scrollVal);

    if(scrollVal < h1){
      $('#ch1').css('opacity', '1');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');

    }
    else if( h2>scrollVal && scrollVal > h1){
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '1');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');
      $('#video').attr('src','https://www.youtube.com/embed/a8H8NRQitFY?ecver=1&autoplay=1');
    }
    else if (h3>scrollVal && scrollVal > h2){
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '1');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');
    }
    else if (h4>scrollVal && scrollVal > h3){
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '1');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');
    }
    else if ( h5>scrollVal && scrollVal > h4){
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '1');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');
    }
    else if ( h6>scrollVal && scrollVal > h5){
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '1');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '0.3');
      $('#ch7').css('background-color', 'white');
    } 
    else{
      $('#ch1').css('opacity', '0.3');
      $('#ch1').css('background-color', 'white');
      $('#ch2').css('opacity', '0.3');
      $('#ch2').css('background-color', 'white');
      $('#ch3').css('opacity', '0.3');
      $('#ch3').css('background-color', 'white');
      $('#ch4').css('opacity', '0.3');
      $('#ch4').css('background-color', 'white');
      $('#ch5').css('opacity', '0.3');
      $('#ch5').css('background-color', 'white');
      $('#ch6').css('opacity', '0.3');
      $('#ch6').css('background-color', 'white');
      $('#ch7').css('opacity', '1');
      $('#ch7').css('background-color', 'white');
    } 
  });
}


$(document).ready(function(){
    
    scroll_list();
    //ready
    
    
});






