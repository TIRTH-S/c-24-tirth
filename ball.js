class ball {
    constructor(x,y,r){
        var options={
            restitution:0.5,
            friction:10,
            density:14.6,
            
        }
        this.body=Bodies.circle(x,y,r,options);
        //this.width=50;
        //this.height=50;
        World.add(world,this.body);

    }

    display(){
         var pos=this.body.position;
        
         push();
         translate(pos.x,pos.y);
       
        rectMode(CENTER);
        fill("pink");
        ellipse(0,0,this.r,this.r);
         pop();
    }

}