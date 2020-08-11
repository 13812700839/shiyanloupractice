//通过标签来获取元素
function getTagname(tagName){
    return document.getElementsByTagName(tagName);
}

//设置样式
function setStyle(arr){
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor="red";
    }
}

(function(){
    var divs=getTagname("div");
    setStyle(divs);
    var ps=getTagname("p");
    setStyle(ps);
})();