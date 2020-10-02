var speed=0;
var weight=0;
var damage=0;
var thickness=0;
var bullet=0;
var bulletRightEdge=0;
var wallLeftEdge=0;


    function setup(){
    createCanvas(screen.width,screen.height/2);
    speed=Math.round(random(223,321));
    weight=Math.round(random(30,52));
    thickness=Math.round(random(22,83));
    bullet=createSprite(50,200,thickness*1.1,50);
    wall=createSprite((width-thickness),200,thickness,height/2);
    console.log(width-thickness);
    }


function draw(){
background("yellow");
if (keyDown("space")){
  bullet.velocityX=speed;
}
console.log(bullet.velocityX);
        

if (hasCollided(bullet,wall)){
bullet.velocityX=0;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){
    wall.shapeColor=color(255,0,0);
}
if (damage<10){
    wall.shapeColor=color(0,255,0);
}

}
drawSprites();
}
function hasCollided(bullet,wall){
    var bulletRightEdge=bullet.x+bullet.width;
    var wallLeftEdge=wall.x;
if ((bulletRightEdge)>=(wallLeftEdge)){
    return true;
}

else{
return false;
}
}