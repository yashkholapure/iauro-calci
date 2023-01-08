 // window.onload=function(){
//}

function number(num){

  var result=document.getElementById('screen');
  // if (result.innerHTML.includes(num) && (num=='+' || num=='.' || num=='-' || num=='*' || num=='/' || num=='%')) {
  //   //console.log("result")
  // return;
  // }
   //console.log(result)
   

  result.innerHTML+=num; 

}

function op(ope){
  var result=document.getElementById('screen');
  var str=result.innerHTML;
   var l=str.length;
   //console.log(l);
var h=l-1;
//console.log(h)
   var res = str.charAt(h);
    //console.log(res)
    if(res=='+' || res=='-' || res=='*' || res=='/'|| res=='%'){
      return;
    }
  if (ope==res ) {
    // if (ope=='+' || ope=='-' || ope=='*' || ope=='/'|| ope=='%' ) {
    //   return;
    // }
    return;
     
  }
 else{ 
   result.innerHTML+=ope;  }
}

function ans(){
  var result=document.getElementById('screen');
  result.innerHTML=eval(result.innerHTML)
}

function allclear(){
  var result=document.getElementById('screen');
   
  result.innerHTML = " ";
}

function del(){
  var result=document.getElementById('screen');
   var remove=result.innerHTML;
   remove=remove.slice(0,-1);  //remove last character from a string 
   result.innerHTML = remove;
}
 