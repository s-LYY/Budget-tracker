// function addExpense() {
//   let exp = document.getElementById("expense");
//   let exp1 = document.getElementById("expenseOne");
//   // let btn = document.getElementById("btn");
//   let add = document.getElementById("expenseList");
//   // exp1.style.float = right;
//   let listedExpense = document.createElement("li");
//   let counter = 0;
//   const maxInputs = 5;

//   if (exp.value && exp1.value !== "") {
//     listedExpense.innerText = `${exp.value}    ${exp1.value}naira`;
//     add.appendChild(listedExpense);
//     exp.value = "";
//     exp1.value = "";
//   }

//   if (counter < maxInputs) {

//   } else {

//   }
// }


function addExpense() {

  let exp = document.getElementById("expense");
  let exp1 = document.getElementById("expenseOne");
  let listedExpense = document.createElement("li");
  let add = document.getElementById("orderlist");
  if (exp.value && exp1.value !== "") {
    listedExpense.innerText = `${exp.value}   ${exp1.value}Naira`;
    add.appendChild(listedExpense);
    exp.value = "";
    exp1.value = "";
  }
}


function totalIncome() {
  let income = document.getElementById('income');
  let total = document.getElementById('total'); 

  if (income.value !== "") {
    total.textContent = `${parseInt(income.value)}`;
    income.value = "";
  }
}