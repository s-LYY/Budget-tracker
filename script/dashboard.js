let expenseTitle = document.getElementById("expense-title");
let amount = document.getElementById("amount");
let btn = document.getElementById("add-btn");
let expDate = document.getElementById("expense-date");
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
  let standardDate = format(new Date(expDate.value));
  let li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  li.innerHTML = `<span class='bi bi-receipt'> ${expenseTitle.value.toUpperCase()}</span> <span class='bi bi-currency0-dollar'>${
    amount.value
  }</span> <span class="badge bg-primary rounded-pill bi bi-calendar3"> ${standardDate}</span>`;
  recentList.appendChild(li);
  expenseTitle.value = "";
  amount.value = "";
  expDate.value = "";
}
function format(date) {
  const option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, option);
}
function recent() {
  if (
    expenseTitle.value.trim() != "" &&
    amount.value != "" &&
    expDate.value != ""
  ) {
    recentupdate();
  }
  // console.log(expenseTitle.value)
}
