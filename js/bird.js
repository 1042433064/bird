/**
 * Created by Ð»¿µÑ× on 2016/8/11.
 */
(function(w){
  function Bird(x,y){
      this.x=x;
      this.y=y;
      this.w=Bird.imgw;
      this.h=Bird.imgh;
      this.frame=0;
      this.sleep=1;
      this.sleeppuls=0.1;
  };
    Bird.init=function(v,can,cvs){
        Bird.img= v.bird;
        Bird.can=can;
        Bird.cvs=cvs;
        Bird.imgw=Bird.img.width/3;
        Bird.imgh=Bird.img.height;
    };
    Bird.prototype={
        constrcutor:Bird,
        draw:function(){
            Bird.cvs.save();
            var birdCoreX = this.x + Bird.imgw / 2;
            var birdCoreY = this.y + Bird.imgh / 2;
            Bird.cvs.translate(birdCoreX,birdCoreY);
            var du=this.sleep*10;
            du=du>35?35:du;
            Bird.cvs.rotate(Math.PI/180*du);
            Bird.cvs.drawImage(Bird.img,Bird.imgw*this.frame,0,Bird.imgw,Bird.imgh,-Bird.imgw/2,-Bird.imgh/2,Bird.imgw,Bird.imgh);
            Bird.cvs.restore();
        },
        updata:function(){
            this.frame=++this.frame>2?0:this.frame;
            this.y+=this.sleep;
            this.sleep+=this.sleeppuls;
        },
        bind:function(){
            var self=this;
            Bird.can.addEventListener("click",function(){
                self.sleep=-3;
            })
        }
    };
    w.Bird=Bird;
}(window))









