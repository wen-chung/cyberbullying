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
      $('#speech_bubble2').css('opacity','0');

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
      var imgOffset = $('#ch1').offset();
      imgOffset.top=imgOffset.top-200;
      imgOffset.left=imgOffset.left-300; 
      $('#speech_bubble2').offset(imgOffset);      
      $('#speech_bubble2').css('opacity','1');
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
       var imgOffset = $('#ch2').offset();
      imgOffset.top=imgOffset.top-200;
      imgOffset.left=imgOffset.left-300;   
      $('#speech_bubble3').offset(imgOffset);      
      $('#speech_bubble3').css('opacity','1');
      $('#speech_bubble2').css('opacity','0');
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
      $('#speech_bubble3').css('opacity','0');
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


$(function(){   //其作用和 $(document).ready()一樣 ，用意在DOM載入後執行ready()方法。
    
    scroll_list();
    
	setImgSize();
    
});

function setImgSize(){
  /*$(window).resize(function() {

    var imgOffset = $('#chapter1').offset();
    var imgWidth= $('#chapter1').width();
    imgWidth=0.1*imgWidth;
    $('#bubble1').width(imgWidth);
    $('#bubble1').height(imgWidth);
  
});*/

    var imgWidth= $('#chapter1').width();
    imgWidth=0.03*imgWidth;
    $('#bubble1').width(imgWidth);
    $('#bubble1').height(imgWidth);
    $('#bubble2').width(imgWidth);
    $('#bubble2').height(imgWidth);
    $('#bubble3').width(imgWidth);
    $('#bubble3').height(imgWidth);
    $('#bubble4').width(imgWidth);
    $('#bubble4').height(imgWidth);
    $('#bubble5').width(imgWidth);
    $('#bubble5').height(imgWidth);

    var displayBubble=$('#chapter1').offset();
    var displayBubbleWidth= $('#chapter1').width();
    var displayBubbleHeight= $('#chapter1').height();
    displayBubbleWidth=0.48*displayBubbleWidth;
    displayBubbleHeight=0.43*displayBubbleHeight;
    $('#display_bubble1').width(displayBubbleWidth);
    $('#display_bubble1').height(displayBubbleHeight);
    $('#display_bubble2').width(displayBubbleWidth);
    $('#display_bubble2').height(displayBubbleHeight);
    $('#display_bubble3').width(displayBubbleWidth);
    $('#display_bubble3').height(displayBubbleHeight);
    $('#display_bubble4').width(displayBubbleWidth);
    $('#display_bubble4').height(displayBubbleHeight);
    $('#display_bubble5').width(displayBubbleWidth);
    $('#display_bubble5').height(displayBubbleHeight);

   /* displayBubble.top=1.8*displayBubble.top;
    displayBubble.left=1.1*displayBubble.left;
    $('#display_bubble1').left(displayBubble.left);
    displayBubble.top=1.1*displayBubble.top;*/





}






