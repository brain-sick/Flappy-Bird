function Pipe(){
	this.gap = random(70,300);
	this.top = 10;
	this.top += random(height-this.gap);
	this.bottom = height - (this.gap + this.top);
	this.w = 60;
	this.speed = 6;
	this.x = width;

	this.hits = function(bird)
	{
		if(bird.y<this.top || bird.y>height-this.bottom)
		{
			if(bird.x>this.x && bird.x<this.x+this.w){
				return true;
			}
		}
		/*if((this.x-bird.x)*(this.x-bird.x)+(this.y-bird.y)*(this.y-bird.y)==(bird.radius/2)*(bird.radius/2))
			return false;
		return false;*/
	}
	this.cross = function(bird)
	{
		if(bird.x>this.x && bird.x<this.x+this.w){
			if(bird.y>this.top && bird.y<height-this.bottom){
				return true;
			}
		}
		return false;
	}
	this.show = function(){
		fill(0, 230, 0);

		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,this.w,this.bottom);
	}

	this.update = function(){
		this.x -= this.speed;
	}

	this.offscreen = function(){
		if(this.x<-this.w)
			return true;
		else
			return false;
	}
}