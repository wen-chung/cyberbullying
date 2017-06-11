// inner variables
var canvas, ctx;
var button;
var backgroundImage;
var spaceShip;
var iBgShiftY = 1024;
var bDrawDialog = true;
var iDialogPage = 1;
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
// -------------------------------------------------------------

// objects :
function Button(x, y, w, h, state, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;       // begin, pressed, end
    this.imageShift = 0;
    this.image = image;
}
function Stage(x, y, w, h, state, image){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.imageShift = 0;
    this.image = image;
}
function People(x, y, w, h, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
    this.bDrag = false;
}

// -------------------------------------------------------------

// draw functions :

function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawDialog() { // draw dialog function
    if (bDrawDialog) {
        var bg_gradient = ctx.createLinearGradient(0, 200, 0, 400);
        bg_gradient.addColorStop(0.0, 'rgba(160, 160, 160, 0.8)');
        bg_gradient.addColorStop(1.0, 'rgba(250, 250, 250, 0.8)');

        ctx.beginPath(); // custom shape begin
        ctx.fillStyle = bg_gradient;
        ctx.moveTo(100, 100);
        ctx.lineTo(700, 100);//右上
        ctx.lineTo(700, 500);//右下
        ctx.lineTo(100, 500);//左下
        ctx.lineTo(100, 100);//左上
        ctx.closePath(); // custom shape end
        ctx.fill(); // fill custom shape

        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
        ctx.stroke(); // draw border

        // draw the title text
        ctx.font = '42px DS-Digital';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = '#000';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.fillStyle = '#fff';
        if (iDialogPage == 1) {
            ctx.fillText('Game', ctx.canvas.width/2, 150);
            ctx.font = '24px DS-Digital';
            ctx.fillText(' test2', ctx.canvas.width/2, 250);
            ctx.fillText(' test1', ctx.canvas.width/2, 280);
        } else if (iDialogPage == 2) {
            ctx.fillText('second', ctx.canvas.width/2, 150);
            ctx.font = '24px DS-Digital';
            ctx.fillText('Any second', ctx.canvas.width/2, 250);
        }
    }
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // draw background
    iBgShiftY -= 10;
    if (iBgShiftY <= 0) {
        iBgShiftY = 1024;
    }
    ctx.drawImage(backgroundImage, 0 , 0 + iBgShiftY, 768, 1024, 0, 0, 800, 600);

    // draw space ship
    //ctx.drawImage(spaceShip.image, 0, 0, spaceShip.w, spaceShip.h, spaceShip.x-128, spaceShip.y-128, spaceShip.w, spaceShip.h);

    // draw dialog
    drawDialog();

    // draw button
    ctx.drawImage(button.image, 0, button.imageShift, button.w, button.h, button.x, button.y, button.w, button.h);

    // draw button's text
    //ctx.font = '22px DS-Digital';
    //ctx.fillStyle = '#ffffff';
    //ctx.fillText('next/hide/show', 400, 465);
    //ctx.fillText('dialog', 400, 500);
}

// -------------------------------------------------------------



$(function(){   //其作用和 $(document).ready()一樣 ，用意在DOM載入後執行ready()方法。
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    var width = canvas.width;
    var height = canvas.height;

    // load background image
    backgroundImage = new Image();
    backgroundImage.src = 'picture/stars.jpg';
    backgroundImage.onload = function() {
    }
    backgroundImage.onerror = function() {
        console.log('Error loading the background image.');
    }
	
	
	
	// load the button sprite image
    var buttonImage = new Image();
    buttonImage.src = 'picture/button.png';
    buttonImage.onload = function() {
    }
    button = new Button(310, 450, 180, 120, 'begin', buttonImage);

    $('#scene').mousedown(function(e) { // binding mousedown event (for dragging)

        var mouseX = e.layerX || 0;
        var mouseY = e.layerY || 0;

        if (!bDrawDialog && 
            mouseX > spaceShip.x-128 && mouseX < spaceShip.x-128+spaceShip.w &&
            mouseY > spaceShip.y-128 && mouseY < spaceShip.y-128+spaceShip.h) {

            spaceShip.bDrag = true;
            spaceShip.x = mouseX;
            spaceShip.y = mouseY;
        }

        // button behavior
        if (mouseX > button.x && mouseX < button.x+button.w && mouseY > button.y && mouseY < button.y+button.h) {
            button.state = 'pressed';
        }
    });

    $('#scene').mousemove(function(e) { // binding mousemove event
        var mouseX = e.layerX || 0;
        var mouseY = e.layerY || 0;

        if (!bDrawDialog && spaceShip.bDrag) {
            spaceShip.x = mouseX;
            spaceShip.y = mouseY;
        }

        // button behavior


        if (button.state != 'pressed') {
            button.imageShift = 0;
            if (mouseX > button.x && mouseX < button.x+button.w && mouseY > button.y && mouseY < button.y+button.h) {
                button.state = 'hover';
                button.imageShift = 131;
            }
        }else{

        }


    });

    $('#scene').mouseup(function(e) { // binding mouseup event
        spaceShip.bDrag = false;
        // button behavior
        if (button.state == 'pressed') {
              //iDialogPage = 1;           呈現第幾頁
              bDrawDialog = !bDrawDialog;
              button.state = 'disappe';
              button.imageShift = 0;
        }
    });



    scroll_list();
    setInterval(drawScene, 30); // loop drawScene
});






