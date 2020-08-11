function foo(n){
    //临界条件
    if(n==0){
        return 0;
    } else{
        return n+foo(n-1);
    }
}

(function(){
    var a=foo(10);
    document.write("计算1到10之间的整数相加的和："+a);
})();