
class paper {
    constructor(x, y,radius) {
       var options = {
        'isStatic':false,
        'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      
    
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      this.height = height;
      this.paper = loadImage('download.jpg');
      World.add(world, this.body);
    }
    display() {
      var paperpos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(paperpos.x,paperpos.y);
      //rotate(angle);
      imageMode(CENTER);
      image(this.paper,0,0,this.radius,this.radius);
     pop();
    }
  };
  