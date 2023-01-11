
var old = [];     //array for storing operation history
var localData = JSON.parse(localStorage.getItem('old'));   //getting data from local storage

//calculating history of calculation

function historyOfCalculation() {

  window.location.href = "#hist"
  console.log("map :")
  old.map((curr) => {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(curr));
    document.getElementById("historyList").appendChild(node)
    console.log(curr)
  })
}


//making expresion

function number(num) {

  var result = document.getElementById('screen');
  result.innerHTML += num;

}

//checking for multipal operation symbol after adding one

function op(ope) {
  var result = document.getElementById('screen');
  var str = result.innerHTML;
  var l = str.length;
  var h = l - 1;
  var res = str.charAt(h);

  if (res == '+' || res == '-' || res == '*' || res == '/' || res == '%') {
    return;
  }
  if (ope == res) {
    return;
  }
  else {
    result.innerHTML += ope;
  }
}


//calculating answer after creating the expresion and storing in the local storage

function ans() {
  var result = document.getElementById('screen');
  var expression = result.innerHTML
  var ans = eval(result.innerHTML)
  expression += " = " + ans
  result.innerHTML = ans
  old.push(expression);
  localStorage.setItem('old', JSON.stringify(old));

}

function allclear() {
  var result = document.getElementById('screen');
  result.innerHTML = " ";
}

function del() {
  var result = document.getElementById('screen');
  var remove = result.innerHTML;
  remove = remove.slice(0, -1);           //remove last character from a string 
  result.innerHTML = remove;
}

function sin() {
  var result = document.getElementById('screen');
  result.innerHTML = Math.tan(result.innerHTML);
}

function cos() {
  var result = document.getElementById('screen');
  result.innerHTML = Math.cos(result.innerHTML);
}

function sqrt() {
  var result = document.getElementById('screen');
  result.innerHTML = Math.sqrt(result.innerHTML);
}

function log() {
  var result = document.getElementById('screen');
  result.innerHTML = Math.log(result.innerHTML);
}

