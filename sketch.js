var ball,database;


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = ("black");

    var ballposition = database.ref('ball/position');
    ballposition.on("value", readPosition);
    
}

function draw(){
    background("white");

    if(keyDown(UP_ARROW)){
    writePosition(0,-1);
    }
    if(keyDown(DOWN_ARROW)){
    writePosition(0,1);
    }
    if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
    }
    if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
    }
    drawSprites();

}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x, 
        'y' : position.y + y
    })


}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}


