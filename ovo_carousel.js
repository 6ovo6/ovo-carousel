(function($){
    $.fn.ovo_carousel = function(time){
        var $this = this;
        var itemL = $this.find(".carousel-item").length;
        var Sub = $this.find(".carousel-sub");

        //渲染
        var subHtml = "";
        if(Sub[0].tagName == "UL" || Sub[0].tagName == "OL"){
            for(let i=0;i<itemL;i++){
                subHtml += "<li class='sub-item'>"+(i+1)+"</li>";
            }
        }else if(Sub[0].tagName == "DIV"){
            for(let i=0;i<itemL;i++){
                subHtml += "<div class='sub-item'>"+(i+1)+"</div>";
            }
        }
        $this.find(".carousel-sub").html(subHtml);

        //显示
        $this.find(".carousel-item").eq(0).addClass("active");
        $this.find(".sub-item").eq(0).addClass("active");

        var num = 0;
        $this.find(".sub-item").click(function(){
            var z = $(this).text()-1;
            num = z;
            $this.find(".carousel-item").removeClass("active");
            $this.find(".sub-item").removeClass("active");

            $this.find(".carousel-item").eq(z).addClass("active");
            $this.find(".sub-item").eq(z).addClass("active");
        });

        var xh = setInterval(car,time);
        function car(){
            num++;
            var showNum =  num % itemL;
            $this.find(".carousel-item").removeClass("active");
            $this.find(".sub-item").removeClass("active");

            $this.find(".carousel-item").eq(showNum).addClass("active");
            $this.find(".sub-item").eq(showNum).addClass("active");

        }

        $this.on("mouseenter",function(){ //进入
            clearInterval(xh)
        });
        $this.on("mouseleave",function(){  //移出
            xh = setInterval(car,time)
        });


        return $this;
    }
})(jQuery);