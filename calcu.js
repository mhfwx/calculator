const container = document.getElementById("number");

function makeRows(row,col,input,classinput) {
  
  input.style.gridTemplateColumns=`repeat(${col},1fr)`;
  input.style.gridTemplateRows=`repeat(${row},1fr)`;
  for (c = 0; c < (row * col); c++) {
    let cell = document.createElement("button");
    cell.style.width='150px';
    cell.style.height='150px';
    cell.innerText=c+1;
    input.appendChild(cell).className = classinput;
  };
};

makeRows(3,3,container,'grid-item');




let cell=document.createElement('button');
cell.style.width='150px';
cell.style.height='150px';
cell.innerText=0;
container.appendChild(cell).className = "grid-item";

let cell2=document.createElement('button');
cell2.style.width='150px';
cell2.style.height='150px';
cell2.innerText=".";
container.appendChild(cell2).className = "grid-item";

let cell3=document.createElement('button');
cell3.style.width='150px';
cell3.style.height='150px';
cell3.innerText="=";
container.appendChild(cell3).className = "grid-item oper";

gridItem = document.querySelectorAll('.grid-item');
output = document.getElementById('output');
var inputnumber = '';
for (let i=0;i<gridItem.length;i++){
   gridItem[i].addEventListener('click',(e)=>{

    inputnumber+=e.target.innerText;
    output.innerText=inputnumber;
    

   })
 }

 document.querySelector('#clear').addEventListener('click',()=>{
    output.innerText='';   
     })

oper = document.querySelectorAll('.oper');

for (let i=0;i<oper.length;i++){
    oper[i].addEventListener('click',
    ()=>{
        
        inputnumber = operate(inputnumber.slice(0,-1));
        
        output.innerText=inputnumber;
        inputnumber='';  

        
    });
}




// document.querySelector('#clear').addEventListener('click',()=>{

// for (let i=0;i<gridItem.length;i++){
//   gridItem[i].style.backgroundColor='white';
    
// }
// })











const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a -b ;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(string){
    const mapping={
        '+':add,
        '-':subtract,
        '*':multiply,
        '/':divide
    };

    const operators = ['+','-','*','/'];

    for (oper of operators){
        let input = string.split(oper);
        if (input == string){
            continue;
        }else{
            
            let result = mapping[oper](Number(input[0]),Number(input[1]));
            return Math.round(result*100)/100;
        }
    }
}

