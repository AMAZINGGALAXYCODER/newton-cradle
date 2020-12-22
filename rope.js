class Rope  {
    constructor(body1,body2)
    {        
        
        
        var options={
            bodyA:body1,
            bodyB:body2,  
                         
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }

    display(){
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(4);
            line(pointA.x,pointA.y, pointA.x, pointB.y);
           
        }
        
    }
    
}