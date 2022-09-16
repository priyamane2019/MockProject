
let in1 = document.getElementById("in");
let in2 = document.getElementById("in2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("Result");

let btn1 = document.getElementById("Income");
let btn2 = document.getElementById("Expense");
let btn3  = document.getElementById("Display");

let inp1 = document.createElement('input');
in1.appendChild(inp1);
inp1.placeholder="Enter Amount";
let inp2 = document.createElement('input');
in2.appendChild(inp2);
inp2.placeholder="Enter Sourse Name";
let btn = document.createElement('button');
    in2.appendChild(btn);
    btn.innerHTML="ADD";

    btn.addEventListener('click', ()=>
    {
        alert(`Congrates! we are added ${inp1.value}`)
    })

function Methode1()
{
    inp1.style.visibility="visible";
    inp2.style.visibility="visible";
    btn.style.visibility="visible";
   
    }


    let inp3 = document.createElement('input');
    in1.appendChild(inp3);
    inp3.placeholder="Enter Amount";

    let inp4 = document.createElement('input');
    in2.appendChild(inp4);
    inp4.placeholder="Enter Source Name";
    let btn11 = document.createElement('button');
    in2.appendChild(btn11);

    btn11.innerHTML="ADD";
    btn11.addEventListener('click', ()=>
    {
        alert(`Congrates! Your Expense is ${inp3.value}`)
    })


    function Methode2()
{
    
    inp3.style.visibility="visible";
    inp4.style.visibility="visible";
    btn11.style.visibility="visible";



}


function Methode3()
{
   div1.innerHTML = inp1.value;
   div2.innerHTML = inp3.value;
   
 let total_balance = `${inp1.value}` - `${inp3.value}`;
    
  div3.innerHTML= total_balance;

}


