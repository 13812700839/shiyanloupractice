//获取浏览器尺寸（不包括工具栏/滚动条）
function getSize(){
    //获取浏览器的宽度
    var width=window.innerWidth;
    //获取浏览器的宽度
    document.documentElement.clientWidth;
    //获取浏览器页面的内容的实际宽度
    document.body.clientWidth;
    document.write(width+"<br>");
    document.write(document.documentElement.clientWidth+"<br>");
    document.write(document.body.clientWidth+"<br>");

    //获取浏览器的高度
    var height=window.innerHeight;
    //获取浏览器的高度
    document.documentElement.clientHeight;
    //获取浏览器页面的内容实际高度
    document.body.clientHeight;
    document.write(height+"<br>");
    document.write(document.documentElement.clientHeight+"<br>");
    document.write(document.body.clientHeight+"<br>");
}

//创建一个定时器，2000毫秒后执行，返回定时器的标示
var timerId = setTimeout(function(){
    document.write("Hello shiyanlou");
}, 2000);

//取消定时器的执行
clearTimeout(timerId);

//创建一个定时器，每隔2秒调用一次
var timerId=setInterval(function(){
    var date=new Date();
    document.write(date.toLocaleTimeString()+"<br>");
}, 2000);

//取消定时器的执行
clearInterval(timerId);

(function(){
    console.log(getSize());
})();