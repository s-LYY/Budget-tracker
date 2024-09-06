let expenseTitle = document.getElementById("expense");
let amount = document.getElementById("amount");
let btn = document.getElementById("add-btn");
let expDate = document.getElementById("date");
let recentList = document.getElementById("recent-list");

// btn.addEventListener("click", function () {
//   if (
//     expenseTitle.value === "" ||
//     amount.value === "" ||
//     expDate.value === ""
//   ) {
//     alert("Fields must not be empty");
//   } else if (amount.value <= 0) {
//     alert("Amount must be greater than zero");
//   } else if (!isNaN(expenseTitle.value)) {
//     alert("expenseTitle must consist of only alphabets");
//   }
//   recent()
// });

// // RECENT EXPENSE
function recentupdate() {
  let li = document.createElement("li");
  li.className = "list-item";
  li.textContent += `${expenseTitle.value} ${amount.value} ${expDate.value}`;
  recentList.appendChild(li);
  expenseTitle.value = "";
  amount.value = "";
  expDate.value = "";
}

function recent() {
  if (
    expenseTitle.value.trim() != "" &&
    amount.value != "" &&
    expDate.value != ""
  ) {
    recentupdate();
  }
}
