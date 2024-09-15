let expenseTitle = document.getElementById("expense-title");
let amount = document.getElementById("amount");
let expDate = document.getElementById("expense-date");
let btn = document.getElementById("add-btn");
let recentList = document.getElementById("recent-list");
let totalExpense = document.getElementById("totalExpense");
let totalAmount = 0;

//DATE FORMAT CHANGE
function format(date) {
  const option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, option);
}

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
  li.innerHTML = `<span class='bi bi-receipt'> ${expenseTitle.value.toUpperCase()}</span> $${
    amount.value
  } <span class="badge bg-primary rounded-pill bi bi-calendar3"> ${standardDate}</span>`;
  recentList.appendChild(li);

  expenseTitle.value = "";
  amount.value = "";
  expDate.value = "";
}

//UPDATE EXPENSE FUNCTION
function updateExpense() {
  totalExpense.textContent = `$${totalAmount}`;
}

btn.addEventListener("click", function recent() {
  if (
    expenseTitle.value.trim() != "" &&
    amount.value != "" &&
    expDate.value != ""
  ) {
    const newAmount = Number(amount.value);
    totalAmount += newAmount;
    console.log(`Total Amount: ${totalAmount}`);
    recentupdate();
    updateExpense();
  } else {
    console.log("please fill in all fields");
  }
});
