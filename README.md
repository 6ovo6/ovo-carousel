# ovo-carousel

### 基本使用

1.导入文件

~~~html
<script src="jquery-1.11.js"></script>
<script src="ovo_carousel.js"></script>
    
<link rel="stylesheet" href="ovo_carousel.css">
~~~

2.html元素

~~~html
<div class="box">
    <!--box为自定义盒子-->

    <ul class="carousel-box">
        <!--carousel-box 为轮播图盒子-->

        <li class="carousel-item"></li>
        <!--carousel-item 为轮播图项-->

        <li class="carousel-item"></li>
        <li class="carousel-item"></li>
    </ul>
    <ol class="carousel-sub"></ol>
    <!--carousel-sub 为轮播下标框-->
    
</div>

注意事项：
1.元素标签随便，主要是 class 。
2.自己定义的盒子，需要是定位元素
~~~

3.css样式

~~~css
.box{
    position: relative;
    height: 300px;
    border: 1px solid #aaa;
}
ul li:nth-child(1){
    background-color:pink;
}
ul li:nth-child(2){
    background-color:skyblue;
}
ul li:nth-child(3){
    background-color:seagreen;
}
~~~

4.js

~~~js
$(".box").ovo_carousel(3000);

//3000 为毫秒值
~~~

