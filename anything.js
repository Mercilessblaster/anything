function anything(A,C){
    if (A.x - C.x < C.width/2 + A.width/2 && C.x - A.x < C.width/2 + A.width/2 && A.y - C.y < C.height/2 + A.height/2 &&  C.y - A.y < C.height/2 + A.height/2)
     {
       return true
     }
     else
     {
       return false
     }
  }