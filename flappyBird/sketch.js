var bird;
var pipes=[];
var score;
var scoreP;
function setup() {
  createCanvas(600,400);
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;
  scoreP = createP();
  scoreP.html('Score : 0');
}

function draw() {
  background(204, 245, 255);
  bird.show();
  bird.update();

  if(frameCount % 70 == 0){
  		pipes.push(new Pipe());
  }
  
  for(var i=pipes.length-1;i>=0;i--){
  	 pipes[i].show();
  	 pipes[i].update();

  	 if(pipes[i].hits(bird)){
  	 	alert('Hit...Restarting')
  	 	location.reload();
  	 }
  	 else{
  	 		score++;
  	 		scoreP.html("Score : "+score);
  	 }

  	 if(pipes[i].offscreen()){
  	 	pipes.splice(i,1);
  	 }
  }
}

function keyPressed(){
	if(key == ' '){
		bird.up();
	}
}