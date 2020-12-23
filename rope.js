class Rope{
    constructor(body1,body2,offsetX,offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY
        
        var options={
        bodyA:body1,
        bodyB:body2,
        
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    
    }
    
    display(){
        var ropeA=this.rope.bodyA.position
        var ropeBx=this.rope.bodyB.position.x+this.offsetX
        var ropeBy=this.rope.bodyB.position.y+this.offsetY
        strokeWeight(4);
        line(ropeA.x,ropeA.y,ropeBx,ropeBy)
    
    }
    
    }