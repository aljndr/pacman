 
function bar(context,x1,y1,x2,y2)
        {
            context.fillRect(x1,y1,x2-x1,y2-y1);
        }

function pieslice(context,x,y,rad,sta,enda)
       {
        context.beginPath();
        context.moveTo(x,y);
        context.arc(x,y,rad,(sta*Math.PI)/180,(enda*Math.PI)/180);
        context.lineTo(x,y);
        context.closePath;
        context.fill();
       }

function PacMan(context,x,y)
{
    this.x = x;
    this.y = y;
    this.ctxt = context;
    this.rad = 10;
    this.pacY=21;
    this.pacX=12;
    this.a=210; this.b=150;
    this.superPac=false; 
    this.score = 0;
    
    this.dots=new Array(
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,2,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,2,0],     
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,0,0,0,3,0,0,3,0,0,0,0,1,0,0,0,0,0,0],
    [3,3,3,3,3,0,1,0,0,0,0,3,0,0,3,0,0,0,0,1,0,3,3,3,3,3],
    [3,3,3,3,3,0,1,0,0,3,3,3,3,3,3,3,3,0,0,1,0,3,3,3,3,3],
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0], 
    [3,3,3,3,3,3,1,3,3,3,0,3,3,3,3,0,3,3,3,1,3,3,3,3,3,3],
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0], 
    [3,3,3,3,3,0,1,0,0,3,3,3,3,3,3,3,3,0,0,1,0,3,3,3,3,3],
    [3,3,3,3,3,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,3,3,3,3,3], 
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,2,1,1,1,0,1,1,1,1,1,1,3,3,1,1,1,1,1,1,0,1,1,1,2,0],
    [0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

    
    this.putDots = function(){
        var c; var f; var x=41; var y=25;var dots = this.dots;
        for(f=0;f<29;f++)
        for(c=0;c<26;c++)
        {
        if (dots[f][c]==1){x=x+20;} if (dots[f][c]==2){x=x+20;}
        if (dots[f][c]==0){
        this.ctxt.fillStyle="#0000FF";
        bar(this.ctxt,x-10,y-10,x+10,y+10);
        x=x+20;
        }if (dots[f][c]==3){x=x+20;} if (dots[f][c]==4){x=x+20;} if (c==25){y=y+20;x=41;}
        }

        x=41;y=25;
        for(f=0;f<29;f++)
        for(c=0;c<26;c++)
        {
        if (dots[f][c]==1)
        {
        this.ctxt.fillStyle="#000000";
        bar(this.ctxt,x-15,y-15,x+15,y+15);
        this.ctxt.fillStyle="#FFD700";
        pieslice(this.ctxt,x,y,3,0,360);
        x=x+20;}
        if (dots[f][c]==2){x=x+20;}if (dots[f][c]==0){x=x+20;}
        if (dots[f][c]==3){
        this.ctxt.fillStyle="#000000";
        bar(this.ctxt,x-15,y-15,x+15,y+15);
        x=x+20;
        }
        if (dots[f][c]==4){x=x+20;}
        if (c==25){y=y+20;x=41;}
        }

        x=41;y=25;
        for(f=0;f<29;f++)
        for(c=0;c<26;c++)
        {

        if (dots[f][c]==1){x=x+20;}
        if (dots[f][c]==2)
        {
        this.ctxt.fillStyle="#000000";
        bar(this.ctxt,x-15,y-15,x+15,y+15);
        this.ctxt.fillStyle="#FFD700";
        pieslice(this.ctxt,x,y,6,0,360);
        x=x+20;}
        if (dots[f][c]==0){x=x+20;}
        if (dots[f][c]==3){x=x+20;}
        if (dots[f][c]==4){x=x+20;}
        if (c==25){y=y+20;x=41;}
        }

        x=41;y=25;
        for(f=0;f<29;f++)
        for(c=0;c<26;c++)
        {

        if (dots[f][c]==1){x=x+20;}
        if (dots[f][c]==2){x=x+20;}
        if (dots[f][c]==0){x=x+20;}
        if (dots[f][c]==3){x=x+20;}
        if (dots[f][c]==4){
        this.ctxt.fillStyle="#000000";
        bar(this.ctxt,x-15,y-15,x+15,y+15);
        this.ctxt.fillStyle="yellow";
        this.draw(this.ctxt,x,y,this.rad,this.a,this.b);
        x=x+20;
        }
        if (c==25){y=y+20;x=41;}
        }

    }
    this.draw = function(ctxt,x,y,rad,a,b){ pieslice(ctxt,x,y,rad,a,b); }

    this.clear = function(){ this.ctxt.fillStyle="#000000"; pieslice(this.ctxt,this.x,this.y,this.rad+2,0,360); }

    this.up=function(){ 
        this.clear();
        if(this.dots[this.pacY-1][this.pacX]!=0)
            {
                this.a=300; this.b=240; 
                this.dots[this.pacY][this.pacX]=3; 
                this.pacY--;
                if(this.dots[this.pacY][this.pacX]==1) this.score+=10;  
                if(this.dots[this.pacY][this.pacX]==2) {this.superPac=true; this.score+=50;  }
                this.dots[this.pacY][this.pacX]=4; this.putDots();
            }
        }

    this.down=function(){ 
        this.clear();
        if(this.dots[this.pacY+1][this.pacX]!=0)
            {
                this.a=120; this.b=60; 
                this.dots[this.pacY][this.pacX]=3; 
                this.pacY++; 
                if(this.dots[this.pacY][this.pacX]==1) this.score+=10;  
                if(this.dots[this.pacY][this.pacX]==2) {this.superPac=true; this.score+=50;  }
                this.dots[this.pacY][this.pacX]=4; this.putDots();
            }

        }

    this.left=function(){
        this.clear();
        if(this.dots[this.pacY][this.pacX-1]!=0)
            {
                this.a=210; this.b=150;
                this.dots[this.pacY][this.pacX]=3;
                this.pacX--;
                if(this.pacY==13&&this.pacX==0)this.pacX=25;
                if(this.dots[this.pacY][this.pacX]==1) this.score+=10;  
                if(this.dots[this.pacY][this.pacX]==2) {this.superPac=true; this.score+=50;  }
                this.dots[this.pacY][this.pacX]=4; this.putDots();
            }
        }
   
    this.right=function(){ 
        this.clear(); 
        if(this.dots[this.pacY][this.pacX+1]!=0)
            {
                this.a=30; this.b=330;
                this.dots[this.pacY][this.pacX]=3;
                this.pacX++; if(this.pacY==13&&this.pacX==25)this.pacX=0; 
                if(this.dots[this.pacY][this.pacX]==1) this.score+=10;  
                if(this.dots[this.pacY][this.pacX]==2) {this.superPac=true; this.score+=50;  }
                this.dots[this.pacY][this.pacX]=4; this.putDots();
            }
        }

    this.notDots=function()
    {
        for(var f=0;f<29;f++)
        for(var c=0;c<26;c++)
        {
            if(this.dots[f][c]==1||this.dots[f][c]==2){return false;}
        }

        return true;
    }
    this.putDots();
    this.draw(this.ctxt,this.x,this.y,this.rad,this.a,this.b);
}

function Ghost(ctxt,x,y,pacman,color)
{
 this.ctxt=ctxt;
 this.rad = 10;
 this.initx=x;
 this.inity=y;
 this.initColor = color;
 this.blue = false ;
 this.in_jail = true;
 this.x=x;
 this.y=y;
 this.gX=12;
 this.gY=11;
 this.interval=250;
 this.pacman=pacman;
 this.goes;
 this.color=color;
     this.dots=new Array(
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,2,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,2,0],     
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,0,0,0,3,0,0,3,0,0,0,0,1,0,0,0,0,0,0],
    [3,3,3,3,3,0,1,0,0,0,0,3,0,0,3,0,0,0,0,1,0,3,3,3,3,3],
    [3,3,3,3,3,0,1,0,0,3,3,3,3,3,3,3,3,0,0,1,0,3,3,3,3,3],
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0], 
    [3,3,3,3,3,3,1,3,3,3,0,3,3,3,3,0,3,3,3,1,3,3,3,3,3,3],
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0], 
    [3,3,3,3,3,0,1,0,0,3,3,3,3,3,3,3,3,0,0,1,0,3,3,3,3,3],
    [3,3,3,3,3,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,3,3,3,3,3], 
    [0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,2,1,1,1,0,1,1,1,1,1,1,3,3,1,1,1,1,1,1,0,1,1,1,2,0],
    [0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    );
   this.draw=function()
   {
        this.ctxt.fillStyle=this.color;
        pieslice(this.ctxt,this.x,this.y,this.rad,180,0);
        bar(this.ctxt,this.x-this.rad,this.y,this.x+this.rad,this.y+8);
        pieslice(this.ctxt,this.x-3,this.y+8,7,120,360);
        pieslice(this.ctxt,this.x,this.y+14,20,240,300);
        pieslice(this.ctxt,this.x+3,this.y+8,7,180,70);
        this.ctxt.fillStyle="white";
        pieslice(this.ctxt,this.x-3,this.y,5,360,0);
        pieslice(this.ctxt,this.x+3,this.y,5,360,0);
        this.ctxt.fillStyle="black";
        pieslice(this.ctxt,this.x-2,this.y,2,360,0);
        pieslice(this.ctxt,this.x+3,this.y,2,360,0);
   }

   this.clear=function()
   {
        this.ctxt.fillStyle="black";
        bar(this.ctxt,this.x-this.rad,this.y-this.rad,this.x+this.rad,this.y+this.rad+4);
   }
   this.putGhost = function()
   {
        var c; var f; var x=41; var y=25;var dots = this.dots;
        for(f=0;f<29;f++)
        for(c=0;c<26;c++)
        {
            if (dots[f][c]<5){x=x+20;}  
            else{this.x=x; this.y=y; this.draw(); x=x+20;}
            if (c==25){y=y+20;x=41;}
        }
   }

   this.up = function()
   {
        if(this.dots[this.gY-1][this.gX]!=0)
            { 
                this.clear(); 
                this.pacman.putDots();
                this.dots[this.gY][this.gX]=this.pacman.dots[this.gY][this.gX];
                this.gY--; 
                this.dots[this.gY][this.gX]=5; 
                this.putGhost();}
   }
   this.down=function()
   { 
        if(this.dots[this.gY+1][this.gX]!=0){
            this.clear();
            this.pacman.putDots();
            this.dots[this.gY][this.gX]=this.pacman.dots[this.gY][this.gX];
            this.gY++; this.dots[this.gY][this.gX]=5;
            this.putGhost();
        }
   }
   this.left=function()
   { 
        if(this.dots[this.gY][this.gX-1]!=0)
            {
                this.clear();
                this.pacman.putDots();
                this.dots[this.gY][this.gX]=this.pacman.dots[this.gY][this.gX];
                this.gX--;
                if(this.gY==13&&this.gX==0) this.gX=25;
                this.dots[this.gY][this.gX]=5; this.putGhost();
            }
   }

   this.right=function()
   { 
       if(this.dots[this.gY][this.gX+1]!=0)
        {
            this.clear();
            this.pacman.putDots();
            this.dots[this.gY][this.gX]=this.pacman.dots[this.gY][this.gX];
            this.gX++; 
            if(this.gY==13&&this.gX==25) this.gX=0;
            this.dots[this.gY][this.gX]=5; 
            this.putGhost();
        }
    }

   this.jail=function(){
        this.in_jail=true;
        this.color=this.initColor;
        this.dots[this.gY][this.gX]=this.pacman.dots[this.gY][this.gX]
        this.gX=12;
        this.gY=11;
        this.x = this.initx;
        this.y = this.inity;
        this.clear(); 
        this.courage();       
   }

   this.scared=function()
   {
        if(!this.in_jail)
        {    
            this.blue=true;
            this.color="#0936BA";
            this.draw();
        }
   }

   this.courage=function()
   {
        this.blue=false;
        this.color=this.initColor;
        this.draw();
   }

   this.cerca=function()
   {
        if(Math.sqrt(Math.pow(this.pacman.x-this.x,2)+Math.pow(this.pacman.y-this.y,2))<50) 
            return true;
   }

    
   this.free=function()
   {
        this.in_jail=false;

        if(this.blue) this.scape();
        else
        {
            if(this.cerca())this.seek();

            else
            {

                switch(Math.floor((Math.random()*10)+1)%5)
                {
                    case 0:
                        this.up();
                    break;
                    case 1:
                        this.down();
                    break;
                    case 2:
                        this.left();
                    break;
                    case 3:
                        this.right();
                    case 4:
                        this.seek();
                    break;          
                }
            }
        }
   }


   this.seek=function()
   {
        var y = this.pacman.pacY-this.gY;
        var x = this.pacman.pacX-this.gX;

        if(y==0)
        {
            if(x<0)
            { 
                this.left();
                if (this.dots[this.gY][this.gX-1]==0)
                {
                    if(y<0) this.up();
                    else this.down();
                }
            }
            else 
            {
                this.right();
                if (this.dots[this.gY][this.gX+1]==0)
                {
                    if(y<0) this.up();
                    else this.down();
                }
            }


        }
        else if(x==0)
        {
            if(y<0) 
            {
                this.up();
                if (this.dots[this.gY-1][this.gX]==0)
                {
                    if(x<0) this.left();
                    else this.right();
                }

            }
            else
            {
                this.down();
                if (this.dots[this.gY+1][this.gX]==0)
                {
                    if(x<0) this.left();
                    else this.right();
                }
            }
        }
        else if(y<Math.abs(x))
        {
            if(y<0) 
            {
                this.up();
                if (this.dots[this.gY-1][this.gX]==0)
                {
                    if(x<0) this.left();
                    else this.right();
                }

            }
            else
            {
                this.down();
                if (this.dots[this.gY+1][this.gX]==0)
                {
                    if(x<0) this.left();
                    else this.right();
                }
            }


        }
        else
        {
            if(x<0)
            { 
                this.left();
                if (this.dots[this.gY][this.gX-1]==0)
                {
                    if(y<0) this.up();
                    else this.down();
                }
            }
            else 
            {
                this.right();
                if (this.dots[this.gY][this.gX+1]==0)
                {
                    if(y<0) this.up();
                    else this.down();
                }
            }

        }
   }


   this.scape=function()
   {
        var y = this.pacman.pacY-this.gY;
        var x = this.pacman.pacX-this.gX;

        if(y==0)
        {
            if(x<0)
            { 
                this.right();
                if (this.dots[this.gY][this.gX-1]==0)
                {
                    if(y<0) this.down();
                    else this.up();
                }
            }
            else 
            {
                this.left();
                if (this.dots[this.gY][this.gX+1]==0)
                {
                    if(y<0) this.down();
                    else this.up();
                }
            }


        }
        else if(x==0)
        {
            if(y<0) 
            {
                this.down();
                if (this.dots[this.gY-1][this.gX]==0)
                {
                    if(x<0) this.right();
                    else this.left();
                }

            }
            else
            {
                this.up();
                if (this.dots[this.gY+1][this.gX]==0)
                {
                    if(x<0) this.right();
                    else this.leftt();
                }
            }
        }
        else if(y<Math.abs(x))
        {
            if(y<0) 
            {
                this.down();
                if (this.dots[this.gY-1][this.gX]==0)
                {
                    if(x<0) this.right();
                    else this.left();
                }

            }
            else
            {
                this.up();
                if (this.dots[this.gY+1][this.gX]==0)
                {
                    if(x<0) this.right();
                    else this.left();
                }
            }


        }
        else
        {
            if(x<0)
            { 
                this.right();
                if (this.dots[this.gY][this.gX-1]==0)
                {
                    if(y<0) this.down();
                    else this.up();
                }
            }
            else 
            {
                this.left();
                if (this.dots[this.gY][this.gX+1]==0)
                {
                    if(y<0) this.down();
                    else this.up();
                }
            }

        }
   }




   
   this.draw();
}


