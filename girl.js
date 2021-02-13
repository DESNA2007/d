
class Girl{
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 20;      
     this.radius=70;
      this.image = loadImage('a.png');
      World.add(world,this.body);
    }
    display(){
      push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
      
      
      
    }

  };