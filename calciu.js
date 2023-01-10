 
var  old=[];
var localData=JSON.parse(localStorage.getItem('old'));


function historyOfCalculation(){
  console.log("fdjn");
  window.location.href="#hist"
  console.log("map :")
  old.map((curr)=>{
  var node = document.createElement('li');
  node.appendChild(document.createTextNode(curr));
  document.getElementById("historyList").appendChild(node)
  console.log(curr) 
  })
}



//comminting this

// const calculator_history=(result)=>{
//    //var result=document.querySelector('screen');

   
//    let temp=result.innerHTML;
  
//    console.log(temp)
//    //console.log(temp);
//    old.push(temp);
//    console.log("hiii");
//    console.log(old);
//    console.log("hello");
//    console.log(localData);
//    console.log("hello2");
//    localStorage.setItem('old',JSON.stringify(old));
// }


//comminting this

function number(num){

  var result=document.getElementById('screen');
  result.innerHTML+=num; 

}

function op(ope){
  var result=document.getElementById('screen');
  var str=result.innerHTML;
  var l=str.length;
  var h=l-1;
  var res = str.charAt(h);
   //console.log(res)
    if(res=='+' || res=='-' || res=='*' || res=='/'|| res=='%'){
      return;
    }
    if (ope==res ) {
    return;
    }
    else{ 
    result.innerHTML+=ope;  
    }
}

function ans(){
  var result=document.getElementById('screen');
  var expression=result.innerHTML
  var ans=eval(result.innerHTML)
  expression+=" = "+ans
  result.innerHTML=ans 
  old.push(expression);
  localStorage.setItem('old',JSON.stringify(old));

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

function sin(){
  var result=document.getElementById('screen');
  result.innerHTML=Math.tan(result.innerHTML);
}
 
function cos(){
  var result=document.getElementById('screen');
  result.innerHTML=Math.cos(result.innerHTML);
}

function sqrt(){
  var result=document.getElementById('screen');
  result.innerHTML=Math.sqrt(result.innerHTML);
}

function log(){
  var result=document.getElementById('screen');
  result.innerHTML=Math.log(result.innerHTML);
}




//comminting this

// const history=document.querySelector('#calculator-grid');

// const calciHistory=(text='')=>{
//    const note=document.createElement('div');
//    note.classList.add('calsigrid');
//    const htmlData=` 
//    <div class="output">  
//          <div   class="prevop" id="his">Calculator</div>
//          <div   class="currentop" id="his1">  </div> </div> 
          
//          <!-- <div class="btn">    -->

//          <button  onclick="history()" class="back"><-</button>    
            

//    `;
// note.insertAdjacentHTML('afterbegin',htmlData);
// console.log(note);


// const goback = note.querySelector('.back');


// goback.addEventListener('click',()=>{
//   note.remove();
// })



// document.body.appendChild(note);
// }



//comminting this

// function historyOfCalci(){
//   var result=document.getElementById('his1');
//   console.log("why");
//   console.log(localData);
//   console.log("not");

//   for(var i=0; i<localData.length; i++){
//     result.innerHTML+=localData[i];
//   }
//   result.innerHTML=localData[0];
// }




// history.addEventListener('click',()=>calciHistory());


//comminting this

// function trys(){
//   console.log("fdjn");
//   // var temp=document.getElementById('hist');
//   // temp.scrollIntoView();
//   window.location.href="#hist"

//   document.getElementById('hist').innerHTML=old.map(user=>
//     <div>

    
//     <ul>
//        <li>${user}</li>
       
//    </ul>
//    </div>
//     ).join('')
// }