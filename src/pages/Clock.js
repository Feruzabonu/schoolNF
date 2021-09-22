export const checkTime=(i) =>{
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
export const Clock=()=>{
   var  c="00 : 00 : 00"
   
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
       c= h + " : " + m + " : " + s;
   
  
    return(c)   
}