(function(){
    var lists=document.getElementById("list").getElementsByTagName("li");
    for(var i=0;i<lists.length;i++){
        //获取当前li下的第一个元素
        var a=lists[i].firstElementChild;
        a.onclick=function(){
            //把这个a所在的li的所有的兄弟元素的类样式全部移除
            for(var j=0;j<lists.length;j++){
                //移除属性
                lists[j].removeAttribute("class");
            }
            //当前点击的a的父级元素li（点击的这个a所在的父级元素li），设置背景颜色
            this.parentNode.className="current";
        };
    }
})();