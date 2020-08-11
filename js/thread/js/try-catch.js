function message(){
    var txt="";
    try {
        //故意写错alert
        alertt("我爱学习，身体好好");
    } catch (err) {
        txt="There was an error on this page.\n\n";
        txt+="Error description: "+err.message+"\n\n";
        txt+="Click OK to continue.\n\n";
        alert(txt);
    }
}