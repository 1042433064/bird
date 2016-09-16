/**
 * Created by Ð»¿µÑ× on 2016/8/11.
 */
(function(w){
    function Sky(x,y){
        this.x=x;
        this.y=y;
        this.sleep=-3;
    };
    Sky.prototype={
        constrcutor:Sky,
        draw:function(){
            Sky.cvs.drawImage(Sky.sky,this.x,this.y);
        },
        updata:function(){
            this.x+=this.sleep;
            if(this.x<=-Sky.can.width){
                this.x+=Sky.can.width*2;
            }
        }
    }
    Sky.init=function(can,cvs,img){
        Sky.sky=img.sky;
        Sky.can=can;
        Sky.cvs=cvs;
    };
    w.Sky=Sky;
}(window))









