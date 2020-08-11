(function(){
    var divs=document.getElementsByTagName("div");
    for(var i=0;i<divs.length;i++){
        divs[i].style.backgroundColor="red";
    }
    var ps=document.getElementsByTagName("p");
    for(var i=0;i<ps.length;i++){
        ps[i].style.backgroundColor="red";
    }
})();