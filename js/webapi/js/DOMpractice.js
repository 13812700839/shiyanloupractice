(function(){
    //改变HTML输出流
    document.write("新设置的内容<p>标签也可以生成</p>");
    //改变HTML内容
    document.getElementById("p1").innerHTML="Hello 实验楼";
    //改变HTML属性
    document.getElementById("img").src="https://static.shiyanlou.com/img/shiyanlou_logo.svg";
    //改变HTML元素的样式
    document.getElementById("syl").style.color="green";
    //获取DOM节点
    //下标为[0]表示选取第1个input标签
    document.getElementsByTagName("input")[0].value="hello";
    //下标为[1]表示选取第2个input标签
    document.getElementsByTagName("input")[1].value="shiyanlou";
})();

//鼠标双击事件的调用方法
function changetext(id){
    id.innerHTML="我爱学习，身体棒棒！";
}

//把鼠标移进的调用方法
function mOver(obj){
    obj.innerHTML="你把鼠标移到了上面";
}

//把鼠标移出的调用方法
function mOut(obj){
    obj.innerHTML="你把鼠标移开了";
}