<<<<<<< HEAD
﻿//START MENU
var  menu=false
var startX = 300 , startY = 285,stX=new Image();
stX.src="startb.png"
var arrowX = 230, arrowY = 285,arX=new Image();
arX.src="arrow.png"
var spacewarX = 105, spacewarY = 0,swX=new Image();
swX.src="SPACEWAR1.png"
var sonX = 700, sonY = 500,soX=new Image();
soX.src="sound off.png"
var soffX = 700, soffY = 500,sfX=new Image();
sfX.src="soundoff.png"
var endsX = 150 ,endsY = 200,esX=new Image();
esX.src="end.png"
var restrat

//LOSE MENU
var endm = false
//AUDIO
sound=true
pusnatp = true
var audio1 = new Audio('startm.mp3');
var audio2 = new Audio('battels.mp3');   
var audio3 = new Audio('losem.mp3');  
var audio4 = new Audio('bullet.mp3');  

//OBJECTS
var bulet=false
var vragX=[];
var vragY=[];
var vrag2X=[];
var vrag2Y=[];
var skorost=0.5;
var skorost2=0.7;
var patronX=[],patronY=[];
var deltaX=[],deltaY=[];
var jivoti=50,tochki=0,vragove=20,vragove2=10;
var i,j;
var o,k;
var jivotialian2=30;
var myX = 385 , myY = 285,spaceX=new Image();
spaceX.src="ship.png";
var backX = 0, backY = 0,back1X=new Image();
back1X.src="back.png";
var vrag2X=[],vrag2Y=[],vr2X=new Image();
vr2X.src="alien2.png";
var vragX=[],vragY=[],vrX=new Image();
vrX.src="alien.png";
var score = new Image()
score.src="score.png";

for(i=0;i<vragove;i++){
    vragX[i]=Math.random()*770
      while(vragX[i] > myX+200 && vragX[i] < myX-200){
    vragX[i]=Math.random()*770
  }
    vragY[i]=Math.random()*570
      while(vragY[i] > myY+200 && vragY[i] < myY-200){
    vragY[i]=Math.random()*570
 }
    patronX[i]=1000
    patronY[i]=1000
 }

for(o=0;o<vragove2;o++){
    vrag2X[o]=Math.random()*770
      while(vrag2X[o] > myX+200 && vrag2X[o] < myX-200){
    vrag2X[o]=Math.random()*770
  }
    vrag2Y[o]=Math.random()*570
      while(vrag2Y[o] > myY+200 && vrag2Y[o] < myY-200){
    vrag2Y[o]=Math.random()*570
 }
}

function update() {
    //END
    if(jivoti==0){
    vragX=NaN;
    vragY=NaN;
    vrag2X=NaN;
    vrag2Y=NaN;
    patronX[i]=NaN
    patronY[i]=NaN
       }
    //AUDIO
   if(menu==false){
       if(sound==true){
      audio1.play();
       
      }
   }
    if(sound==false){
       audio1.pause();
       audio2.pause();
       }
    if(jivoti==0){
   endm=true 
   }
    if(sound==true){
if(endm==true){

   audio3.play();
   audio2.pause();
  }
 }

//GAMEPLAY 
if(menu==true){
    if(myX<=0){
       myX=0
       }
    if(myX>=750){
       myX=750
       }
    if(myY<=0){
       myY=0
       }
    if(myY>=570){
       myY=570
       }
    audio1.pause();
    audio2.play();      
for(i=0;i<vragove;i++){
   vragX[i]=vragX[i]-skorost
if(vragY[i]>myY){
   vragY[i]=vragY[i]-skorost
    }
if(vragY[i]<myY){
   vragY[i]=vragY[i]+skorost
    }
if(vragX[i]<myX){
   vragX[i]=vragX[i]+skorost
    }
if(vragX[i]<myX){
    vragX[i]=vragX[i]+skorost
    }
}
for(o=0;o<vragove2;o++){
   vrag2X[o]=vrag2X[o]-skorost2
if(vrag2Y[o]>myY){
   vrag2Y[o]=vrag2Y[o]-skorost2
    }
if(vrag2Y[o]<myY){
   vrag2Y[o]=vrag2Y[o]+skorost2
    }
if(vrag2X[o]<myX){
   vrag2X[o]=vrag2X[o]+skorost2
    }
if(vrag2X[o]<myX){
    vrag2X[o]=vrag2X[o]+skorost2
    }
}
if(isKeyPressed[87]){
    myY=myY-2
    }
if(isKeyPressed[83]){
    myY=myY+2
    }
if(isKeyPressed[65]){
    myX=myX-2
    }
if(isKeyPressed[68]){
    myX=myX+2
    }
for(i=0;i<vragove;i++){
        patronX[i]=patronX[i]-deltaX[i]/10
        patronY[i]=patronY[i]-deltaY[i]/10
    }

    
    
for(i=0;i<vragove;i++){
  if(areColliding(patronX[i],patronY[i],10,10,vragX[i],vragY[i],30,30)){
        vragX[i]=Math.random()*800
        vragY[i]=Math.random()*570
        skorost=skorost+0.001
        tochki=tochki+5
    }
if(areColliding(myX,myY,30,30,vragX[i],vragY[i],30,30)){
            vragX[i]=Math.random()*800
            vragY[i]=Math.random()*570
            jivoti=jivoti-10
            tochki=tochki+10
        }
    }
for(o=0;o<vragove;o++){
  if(areColliding(patronX[o],patronY[o],10,10,vrag2X[o],vrag2Y[o],50,50)){
        vrag2X[o]=Math.random()*800
        vrag2Y[o]=Math.random()*570
        skorost=skorost+0.005

    }
if(areColliding(myX,myY,30,30,vrag2X[o],vrag2Y[o],50,50)){
            vrag2X[o]=Math.random()*800
            vrag2Y[o]=Math.random()*570
            jivoti=jivoti-15
        }
    }
  }
if(sound==false){
       audio2.pause();
    
    }
    if(sound==false){
       audio3.pause();
    
    }
    if(jivoti==0){
            audio2.pause();  

       }

}
function draw() {
    //START MENU
    if(menu==false){
        context.drawImage(back1X,backX,backY,800,600)
        context.drawImage(stX,startX,startY,200,100)
        context.drawImage(arX,arrowX,arrowY,50,100)
        context.drawImage(swX,spacewarX,spacewarY,600,200)
        if(sound==true){
        if(pusnatp==true){
        context.drawImage(soX,sonX,sonY,70,70)
        }
        }
    }
    
    //OBJECTS RENDERING
if(menu==true){
    if(jivoti>0){
        context.drawImage(back1X,backX,backY,800,600);
        context.fillStyle = "green";
        context.font = "80px Comic Sans MS";
        context.drawImage(score,200,0,300,100);
        context.fillText(tochki,499,85)
    for(i=0;i<vragove;i++){
            context.fillStyle="green"
            context.drawImage(vrX,vragX[i],vragY[i],30,30);
            context.fillStyle="red"
            context.fillRect(patronX[i],patronY[i],10,10)
        }
    for(o=0;o<vragove2;o++){
            context.fillStyle="green"
            context.drawImage(vr2X,vrag2X[o],vrag2Y[o],50,50);
        }
        context.fillStyle="gray"
        context.drawImage(spaceX,myX, myY, 50, 30);
        context.fillStyle="red"
     if (this.jivoti >= 0){
        context.fillRect(myX- jivoti/50,myY-15,jivoti, 5);
     }

    }
    if(jivoti<=0){
        context.drawImage(back1X,backX,backY,800,600);
        context.fillStyle = "green";
        context.font = "70px Comic Sans MS";
        context.drawImage(esX,endsX,endsY,400,100)
        context.fillText(tochki,600,270)
        
    }
  }
    if(sound==false){
        if(pusnatp==false){
        context.drawImage(sfX,soffX,soffY,70,70)
        if(menu==true){
            soffX=NaN
            soffY=NaN
        }
     }
  }
}


function keyup(key) {

	console.log("Pressed", key);
 //START MENU
    if(key==40){
        arrowY = 480
        arrowX = 630
    }

 if(key==13){
    if(arrowY == 480 ){
        sound=false;
         pusnatp=false;
    }
  }
 
    
    if(key==38){
        arrowY = 285 
        arrowX = 230
    }
    if(arrowY == 285 ){
     if(key==13){
        menu=true;
    }
  }

}
//START MENU MUSIC ON/OFF
function mouseup() {
	console.log("Mouse clicked at", mouseX, mouseY);
    //GAMEPLAY
    for(i=0;i<vragove;i++){
            deltaY[i]=(myY+10)-mouseY
            deltaX[i]=(myX+10)-mouseX
            console.log("patron", i, mouseX, mouseY, deltaX[i], deltaY[i]);
            patronX[i]=myX+10
            patronY[i]=myY+10
    }

}
=======
﻿// Creating variables
var myX = 0, myY = 0;

function update() {
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
>>>>>>> b6db3463d0a84751d5cce4f3f2a056e8e0d9c11d
