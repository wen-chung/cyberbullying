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
var falldown = 50;
var jump = 20;

var enemy = null; // game objects
var enemies = [];
var iEnemyW = 219; // enemy width
var iEnemyH = 42; // enemy height
var iEnemySpeed = 5; // initial enemy speed
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
function Enemy(x, y, w, h, speed, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.image = image;
}

function People(x, y, w, h, image, live) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
    this.live = live;
}

// -------------------------------------------------------------

// get random number between X and Y
function getRand(x, y) {
    return Math.floor(Math.random()*y)+x;
}

// draw functions :


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
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clear canvas

    
    ctx.drawImage(backgroundImage, 0 , 1000, 768, 1024, 0, 0, 800, 600);

     

      if (enemies.length > 0) {
        for (var ekey in enemies) {
            if (enemies[ekey] != undefined) {
                ctx.drawImage(enemies[ekey].image, enemies[ekey].x, enemies[ekey].y);
                enemies[ekey].y -= enemies[ekey].speed;

                if (enemies[ekey].y > canvas.height) {
                    delete enemies[ekey];r
                }
            }
        }
      }



}


// -------------------------------------------------------------



$(function(){   //其作用和 $(document).ready()一樣 ，用意在DOM載入後執行ready()方法。
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    var width = canvas.width;
    var height = canvas.height;

    // load background image
    backgroundImage = new Image();
    backgroundImage.src = 'picture/nsky.png';
    backgroundImage.onload = function() {
    }
    backgroundImage.onerror = function() {
        console.log('Error loading the background image.');
    }
	
	
	
	  // load the button sprite image
    var buttonImage = new Image();
    buttonImage.src = 'picture/btn.png';
    buttonImage.onload = function() {
    }
    button = new Button(310, 450, 180, 120, 'begin', buttonImage);



    // initialization of empty enemy
    var oEnemyImage = new Image();
    oEnemyImage.src = 'picture/stagee.png';
    oEnemyImage.onload = function() { }


    // initialization of empty keyMan
    var oPImage = new Image();
    oPImage.src = 'picture/r_run.png';
    oPImage.onload = function() { }

    keyMan = new People(0, canvas.height-72, 58, 72, oPImage, true);

   
    

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
            iDialogPage = 2;          // 呈現第幾頁
            bDrawDialog = false;
            button.imageShift = 262;
            live = true;
        }


    });


    $(window).keydown(function(event){ // keyboard alerts
        switch (event.keyCode) {
            case 49: // '1' key
                if(iBgShiftY<2000){
                  iBgShiftY += 30;

                  keyMan = new People(keyMan.x, keyMan.y-30, 58, 72, oPImage, true);
                  down();
                  ctx.drawImage(backgroundImage, 0 , background.height - 100, 768, 1024, 0, 0, 800, 600);
                  if (enemies.length > 0) {
                    for (var ekey in enemies) {
                      if (enemies[ekey] != undefined) {
                          ctx.drawImage(enemies[ekey].image, enemies[ekey].x, enemies[ekey].y);
                            enemies[ekey].y -= enemies[ekey].speed;

                        if (enemies[ekey].y < 180) {
                          delete enemies[ekey];
                        }
                      } 
                    }
                  }
                }
                break;
        }
    });
    


    scroll_list();
    setInterval(drawScene, 30); // loop drawScene

   
   var enTimer = null;
    function addEnemy() {
        clearInterval(enTimer);

        var randX = getRand(0, canvas.width - oEnemyImage.width);
        enemies.push(new Enemy(randX, 30, iEnemyW, iEnemyH, - iEnemySpeed, oEnemyImage));

        var interval = getRand(1000, 3000);
        enTimer = setInterval(addEnemy, interval); // loop drawScene
    }
    addEnemy();







});






