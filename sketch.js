let cam;
let rearSetting;

let canvas;
let state=0
let miliSeconds1 = 0;
let miliSeconds2 = 0;
let seconds1 = 0;
let seconds2 = 0;
let minutes1 = 0;
let minutes2 = 0;
let hours1 = 0;
let hours2 = 0;

function setup() {
  
  rearSetting = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"  //rear
      }
    }
  }                                                  //후면카메라 
  
  createCanvas(844, 390);
  cam = createCapture(rearSetting);
  //cam = createCapture(VIDEO);
  cam.size(644,483);
  cam.position(0,0);
  cam.hide();
  

}


function draw() {
  
  background(200);
  
  image(cam,0,0,644,483);

                ///////////////background_RIGHT_BK///////////////////
//BACKGROUND
  fill(0);
  rect(644,0,200,390);
  
  
//GREY TEXTBOX
  fill(55,68,73);
  noStroke();
  rect(652,42,110,20,5);
  rect(652,70,110,20,5);
  rect(652,98,110,20,5);
  
  let current = 'Current time';
  let recordtime = 'Recording time';
  let passengers = 'Passengers';
  
  textSize(14);
  fill(255);
  text(current,656,46,120,25);
  text(recordtime,656,74,120,25);
  text(passengers,656,102,120,25);
  
                     //////////////현재시각 표기///////////////
  let yr = year();
  let mon = month();
  let dd = day();
  let hr = hour();
  let mm = minute();
  let sc = second();
  
  fill(255);
  noStroke();
  text (nf(hr,2,0) + ':' + nf(mm,2,0) + ':' + nf(sc,2,0), 770,46,120,25); //인터페이스 시계
  textSize(16);
  text (yr +'.' + nf(mon,2,0) + '.'+ nf(dd,2,0) + ' ' + nf(hr,2,0) + ':' + nf(mm,2,0) + ':' + nf(sc,2,0), 20,354,180,20); //왼쪽하단시계

  
              //////////////레코딩타임 박스///////////////
//배경
  fill(55,68,73,50);
  rect(272,10,100,30,5);  
  
//COUNT UP TIMER
  
  noStroke();
  

  textSize(14);
  fill(255);
  text(hours1,282,30);
  text(hours2,292,30);
  text(":",306,29)
  text(minutes1,314,30);
  text(minutes2,324,30);
  text(":",336,29)
  text(seconds1,344,30);
  text(seconds2,354,30);      //상단중앙
  

  textSize(14);
  text(hours1,770,74,100,25);
  text(hours2,778,74,100,25);
  text(":",786,73,100,25)
  text(minutes1,789,74,100,25);
  text(minutes2,797,74,100,25);
  text(":",804,74,100,25)
  text(seconds1,807,74,100,25);
  text(seconds2,815,74,100,25);     //우측
  
                ///////////////// state == 0.  MAINPAGE ////////////////////////////////
  
  if (state==0){
    
//START BUTTON
    ellipseMode(CENTER);
  
    fill(255);
    noStroke();
    ellipse(744,308,72);  //outer white
 
    fill(10);
    noStroke();
    ellipse(744,308,66);  //inner black
 
    fill(232,53,113);
    noStroke();
    ellipse(744,308,60);  //inner pink
    
    noStroke();
    
    
  }
                   ///////////////// state == 1 RECORDING //////////////////////////////
  if (state==1){
    
//레코딩 타임박스 색상 변경 (핑크)
    fill(232,53,113);       
    rect(272,10,100,30,5); 
    
    noStroke();
    
    textSize(14);
    fill(255);
    text(hours1,282,30);
    text(hours2,292,30);
    text(":",306,29)
    text(minutes1,314,30);
    text(minutes2,324,30);
    text(":",336,29)
    text(seconds1,344,30);
    text(seconds2,354,30); 
    
    
//PAUSED BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(711,312,72);  // _ outer grey
 
    fill(10);
    noStroke();
    ellipse(711,312,66);  //inner black
    
    stroke(232,53,113);
    strokeWeight(6);
    ellipse(711,312,60);
    noStroke();            //?!!!!dashed line?!!!
    
    fill(232,53,113);
    rect(705,304,4,16); 
    rect(713,304,4,16);//inner pink
    
//STOP BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(790,312,48);  // _ outer grey
    
    fill(10);
    noStroke();
    ellipse(790,312,44);  //inner black
    
    stroke(232,53,113);
    strokeWeight(3);
    ellipse(790,312,40);
    noStroke();
    
    fill(232,53,113);
    noStroke();
    rect(782,304,16);
    
//레코딩 타임 시작 
    
    miliSeconds2 = frameCount%10;
    if(frameCount % 6 == 0 && miliSeconds1 >= 0){
      miliSeconds1++;
      if(miliSeconds1 == 10){
        miliSeconds1=0;
        seconds2+=1;
        if(seconds2==10){
          seconds2=0;
          seconds1+=1;
          if(seconds1==6){
            seconds1=0;
            seconds2=0;
            minutes2+=1;
            if(minutes2==10){
             seconds2=0;
             seconds1=0;
             minutes2=0;
             minutes1+=1;
            if(minutes1==6){
              seconds2=0;
              seconds1=0;
              minutes2=0;
              minutes1=0;
              hours2+=1;
              if(hours2==10){
                seconds2=0;
                seconds1=0;
                minutes2=0;
                minutes1=0;
                hours2=0;
                hours1+=1;
              }   
            } 
          } 
        }
      } 
    }

    }
  }
  
                     ///////////////// state == 2 PAUSED //////////////////////////////
  else if(state==2){
    
    //PAUSED BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(711,312,72);  // _ outer grey
 
    fill(10);
    noStroke();
    ellipse(711,312,66);  //inner black
    
    stroke(165);
    strokeWeight(6);
    ellipse(711,312,60);
    noStroke();            //?!!!!dashed line?!!!
    
    fill(165);
    rect(705,304,4,16); 
    rect(713,304,4,16);//grey 2rect
    
    //STOP BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(790,312,48);  // _ outer grey
    
    fill(10);
    noStroke();
    ellipse(790,312,44);  //inner black
    
    stroke(232,53,113);
    strokeWeight(3);
    ellipse(790,312,40);
    noStroke();           //pink
      
    fill(232,53,113);
    noStroke();
    rect(782,304,16);
    
  }

  }
                   ///////////      state = 3 Ending     //////////////////////


                   //////////////////버튼 작동(스탑 제외)//////////////////////
function mouseClicked(){
  
  if (state==0){
    if(dist(mouseX, mouseY, 744,308) <= 30){    //START BUTTON 
      state=1;
    } 
  }
  else if(state==1){
    if(dist(mouseX, mouseY, 711,312) <= 30){    //PAUSED BUTTON
      state=2;
    }
  }
  else if(state==2){
    if (dist(mouseX, mouseY, 711,312) <= 30){   //PAUSED BUTTON 다시시작 
    state=1; 
    }
  }
    
  
                    ///////// STOPBUTTON + 저장 추가해야햄///////////
  
    if (dist(mouseX, mouseY, 790,312) <= 20){
    // 초기화 (main page로 돌아가기 )
    state=0;
    miliSeconds1 = 0;
    miliSeconds2 = 0;
    seconds1 = 0;
    seconds2 = 0;
    minutes1 = 0;
    minutes2 = 0;
    hours1 = 0;
    hours2 = 0;
  }
}