/**
 * Created by Ð»¿µÑ× on 2016/8/12.
 */
(function(w){
    function Pipe(x){
        this.x=x;
        this.space=150;
        this.sleep=-1;
        this.run=-0.001;
        this._random();
    };
    Pipe.prototype={
        constructor:Pipe,
        draw:function(){
            Pipe.cvs.drawImage(Pipe.downimg,this.x,this.pdy);
            Pipe.cvs.drawImage(Pipe.upimg,this.x,this.puy);
            this._strokePath()
        },
        _random:function(){
            this.pipey=Math.random()*200+100;
            this.puy=this.pipey+this.space;
            this.pdy=this.pipey-Pipe.imgh;
        },
        _strokePath:function(){
            //Pipe.cvs.strokeStyle = 'blue';
            Pipe.cvs.rect(this.x, this.pdy, Pipe.imgw, Pipe.imgh);
            Pipe.cvs.rect(this.x, this.puy, Pipe.imgw, Pipe.imgh);
            //Pipe.cvs.stroke();
        },
        update:function(){
            this.x+=this.sleep;
            this.sleep+=this.run;
            if(this.x<-Pipe.imgw){
                this._random();
                this.x+=Pipe.imgw*3*6;
                Pipe.number++;
            }
        }
    };
    Pipe.init=function(img,can,cvs){
        Pipe.number=0;
        Pipe.upimg=img.pipeUp;
        Pipe.downimg=img.pipeDown;
        Pipe.can=can;
        Pipe.cvs=cvs;
        Pipe.imgw=Pipe.upimg.width;
        Pipe.imgh=Pipe.upimg.height;
    };
    w.Pipe=Pipe;
}(window))









