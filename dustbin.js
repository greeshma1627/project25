class dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
     this.image = loadImage('dustbingreen.png')
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var groundpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(groundpos.x,groundpos.y);
      rotate(angle);
      rectMode(CENTER);
      image(this.image,0,0,this.width,this.height);
     
    }
  };
  