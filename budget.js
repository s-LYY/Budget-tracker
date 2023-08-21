function addExpense() {
  let exp = document.getElementById("expense");
  let exp1 = document.getElementById("expenseOne");
  // let btn = document.getElementById("btn");
  let add = document.getElementById("expenseList");
  // exp1.style.float = right;
  let listedExpense = document.createElement("li");
  let counter = 0;
  const maxInputs = 5;

  if (exp.value && exp1.value !== "") {
    listedExpense.innerText = `${exp.value}    ${exp1.value}naira`;
    add.appendChild(listedExpense);
    exp.value = "";
    exp1.value = "";
  }

  if (counter < maxInputs) {
    
  } else {
    
  }
}
