class Constrain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffnes: 0.04,
            length: 10,
        }
        this.pointB = pointB
        this.constrain = Constraint.create(options);
        World.add(world,this.sling);                 
    }
        display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeweight(4);
           line(pointA.x, pointA.y,pointB.x, pointB.y);
        }                                     
    
}