/*
* @Author: Administrator
* @Date:   2016-09-21 20:51:22
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-24 09:22:22
*/

$(function(){
    var banner = {
        init : function(){
            this.imgs = $('.img-wrapper img');
            this.arrowL = $('.arrow-left');
            this.arrowR = $('.arrow-right');
            //this.timer = null; 
            this.now = 0;
            this.next = 0;
            this.autoPlay();

            this.playControl();
            this.nextClick();
            this.backClick();
        },
        //自动播放
        autoPlay:function(){
            var that = this;
            //console.log(this);
            this.timer = setInterval(function(){
                that.next++;
                that.next %= that.imgs.length;
                that.switchImg();
            },1500)
        },
        switchImg:function(){
            this.imgs.eq(this.now).fadeOut(500);
            this.imgs.eq(this.next).fadeIn(500);
            this.now = this.next;
        },
        playControl:function(){
            var that = this; 
            $('.banner-wrapper').hover(function() {
                clearInterval(that.timer);
                //console.log(clearInterval(that.timer));
                //console.log(1);
            }, function() {
               that.autoPlay();
            });
        },
        nextClick:function(){
            var that = this;
            this.arrowR.click(function(){
                console.log(1);
                that.next++;
                that.next %= that.imgs.length;
                that.switchImg();
            });
        },
        backClick:function(){
            var that=this;
            this.arrowL.click(function(){
                that.next --;
                if(that.next<0){
                    that.next = 5;

                }
                that.switchImg();    
            });
        }
    }
    banner.init();

});