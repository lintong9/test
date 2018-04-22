document.addEventListener("DOMContentLoaded",function(){
    changeColor();
    downTime();
    banner();
});
/*滚动顶部通栏变颜色.*/
function changeColor(){
     var jd_banner=document.querySelector(".jd_banner");
     //获取轮播图区域的高度.
     var h=jd_banner.offsetHeight;
     //当页面滚轮滚动的时候执行代码.
     window.onscroll=function(){
            //获取页面卷曲进去的高度
            var top=document.body.scrollTop;
            var opacity=0;
            if(top>h){
                 opacity=0.85;
            }else{
                 opacity=top/h*0.85;
            }
            console.log(opacity);
         document.querySelector(".jd_header_box").style.backgroundColor="rgba(201,21,35,"+opacity+")";
     }
}

function downTime(){
     //倒计时时间.
     var timer=60*60*5;
     //获取到所有的span
     var spans=document.querySelectorAll(".timeInfo span");
     var ids=window.setInterval(function(){
            timer--;
            if(timer==0){
                 window.clearInterval(ids);
                 return;
            }
            //计算时分秒，修改值.
            var h=Math.floor(timer/3600);
            var m=Math.floor(timer%3600/60);
            var s=timer%60;
            spans[0].innerHTML=Math.floor(h/10);
            spans[1].innerHTML=h%10;
            spans[3].innerHTML=Math.floor(m/10);
            spans[4].innerHTML=m%10;
            spans[6].innerHTML=Math.floor(s/10);
            spans[7].innerHTML=s%10;
     },1000);
}

function banner(){

      var jd_banner=document.querySelector(".jd_banner");
      //获取到width
      var width=jd_banner.offsetWidth;
      //获取到图片盒子
      var imageBox=jd_banner.querySelector("ul:nth-child(1)");
      //获取到点盒子
      var pointBox=jd_banner.querySelectorAll("ul:nth-child(2) li");
      var index=1;
      var ids=setInterval(function(){
             index++;
             imageBox.style.transform="translateX("+(-index*width)+"px)";
             imageBox.style.webkitTransform="translateX("+(-index*width)+"px)";
             imageBox.style.transition="all .3s linear";
             imageBox.style.webkitTransition="all .3s linear";
      },2000);

        



      imageBox.addEventListener("transitionEnd",function(){
                if(index<0){
                    index=8;
                }
                else if(index==9){
                     index=1;
                }
                setPoint(index);
      });

      imageBox.addEventListener("webkitTransitionEnd",function(){
              if(index<0){
                  index=8;
              }
              else if(index>8){
                  index=1;
              }
              setPoint(index);
      });
      /*设置点盒子*/
      var setPoint=function(index){
            for(var i=0;i<pointBox.length;i++){
                  pointBox[i].classList.remove("active");
            }
            pointBox[index-1].classList.add("active");
      }


}

