let a=29
    b=16
    c=56
    if(a<b && a<c){
    if(a<b && b<c){
    console.log("a,b,c")}
    else {
        console.log("a,c,b")
    }
}
     else if (b<a && b<c){
       
        if(a<c && a>b){
            console.log("b,a,c")
        }
        else{
            console.log("b,c,a")
        }
       }
     else{
           if(c<a && c<b){
             console.log("c,a,b")
           }
           else{
            console.log("c,b,a")
           }
    }