function Bird(){
	this.y=height/2;
	this.x = 45;
	this.velocity = 0;
	this.gravity = 0.8;
	this.lift = -18;
	this.radius = 25;
	this.show = function(){
		fill(204, 0, 0);
		ellipse(this.x,this.y,this.radius,this.radius) ;
	}
	this.up = function()
	{
		this.velocity += this.lift;
	}
	this.update = function()
	{
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y+12.5> height)
		{
			this.velocity = 0;
			this.y = height-12.5;
		}
		if(this.y - 12.5 < 0)
		{
			this.velocity = 0;
			this.y = 12.5;
		}
	}
}