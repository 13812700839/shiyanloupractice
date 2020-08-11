(function(){
    var test={
        //获取元素
        getEle:{
            tag:function(tagName){
                return document.getElementsByTagName(tagName);
            },
            id:function(idName){
                return document.getElementById(idName);
            },
            class:function(className){
                return document.getElementsByClassName(className);
            },
        },
        //设置样式
        setCss:{
            setStyle:function(arr){
                for(var i=0;i<arr.length;i++){
                    arr[i].style.backgroundColor="red";
                }
            },
            //修改样式
            updateCss:function(){},
            //删除样式
            deleteCss:function(){},
            //...
        },
    };
    var divs=test.getEle.tag("div");
    test.setCss.setStyle(divs);
    var ps=test.getEle.tag("p");
    test.setCss.setStyle(ps);
})();