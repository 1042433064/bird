/**
 * Created by Ð»¿µÑ× on 2016/8/11.
 */
(function(w){
    function Land(x,y){
        this.x=x;
        this.y=y;
        this.sleep=-3;
    };
    Land.prototype={
        constructor:Land,
        draw:function(){
            Land.cvs.drawImage(Land.img,this.x,this.y);
            Land.cvs.drawImage(Land.img,this.x+Land.img.width,this.y);
            Land.cvs.drawImage(Land.img,this.x+Land.img.width*2,this.y);
        },
        updata:function(){
            this.x+=this.sleep;
            if(this.x<=-Land.img.width*3){
                this.x+=Land.img.width*3*2;
            }
        }
    }
    Land.init=function(img,can,cvs){
        Land.img=img.land;
        Land.can=can;
        Land.cvs=cvs;
    };
    w.Land=Land;
}(window))



