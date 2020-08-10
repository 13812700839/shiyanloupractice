function clearArray(array){
    var arr=[];
    var flag=true;
    for(var value in array){
        for(var v in arr){
            if(array[value]==arr[v]){
                flag=false;
                break;
            }
        }
        if(flag){
            arr.push(array[value]);
        }
    }
    return arr.join();
}

(function(){
    var array=["x","c","a","b","c","b","c"];
    document.write(array.join()+"<br>");
    document.write(clearArray(array));
})();