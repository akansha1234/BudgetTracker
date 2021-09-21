function app() {
  const expenseButton = document.querySelector(".expense-btn");
  const incomeButton = document.querySelector(".income-btn");
  const income = document.querySelector(".income");
  const expense = document.querySelector(".expenses");
  let expenseScore = 1000;
  let incomeScore = 23000;
  incomeButton.addEventListener("click", () => {
    income.classList.remove("fadeOut");
    income.classList.add("fadeIn");
    expense.classList.add("fadeOut");
  });
  expenseButton.addEventListener("click", () => {
    income.classList.remove("fadeIn");
    income.classList.add("fadeOut");
    expense.classList.remove("fadeOut");
    expense.classList.add("fadeIn");
  });
  //add expenditure
  const addExpenses = () => {
    const save = document.querySelector(".save");
    save.addEventListener("click", function (e) {
      e.preventDefault();
      addList();
    });
  };
  const addList = () => {
    const dropdown = document.querySelector("#dropdown-item");
    const input = document.querySelector(".input-expense");
    const newDiv = document.createElement("div");
    newDiv.className = "expense-result";
    const newDiv2 = document.createElement("div");
    newDiv2.className = "icon";
    if (dropdown.value === "Food") {
      newDiv2.innerHTML =
        '<i class="fa fa-cutlery" style="background-color:#9828ec"></i>';
    } else if (dropdown.value === "Rent") {
      newDiv2.innerHTML =
        '<i class="fa fa-institution" style="background-color:#CE8676"></i>';
    } else if (dropdown.value === "Other") {
      newDiv2.innerHTML =
        '<i class="fa fa-shopping-bag" style="background-color:#AF601A "></i>';
    } else if (dropdown.value === "Clothes") {
      newDiv2.innerHTML =
        '<i class="fa fa-female" style="background-color:#FD8450"></i>';
    } else {
      newDiv2.innerHTML = '<i class="fa fa-automobile"></i>';
    }
    const newDiv1 = document.createElement("div");
    newDiv1.className = "desc";
    const newPara = document.createElement("p");
    newPara.textContent = dropdown.value;
    const newPara1 = document.createElement("p");
    if (input.value.length === 0) {
      alert("Please enter valid amount");
      return;
    } else {
      newPara1.textContent = "Rs" + input.value;
    }
    expenseScore += parseInt(input.value);
    newDiv1.appendChild(newPara);
    newDiv1.appendChild(newPara1);
    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newDiv1);
    document.getElementsByClassName("expenses")[0].appendChild(newDiv);
    console.log(expenseScore);
  };

  //add income
  const addIncome = () => {
    const save = document.querySelector(".save1");
    save.addEventListener("click", function (e) {
      e.preventDefault();
      addIncomeList();
    });
  };
  const addIncomeList = () => {
    const input = document.querySelector(".input-income");
    const newDiv = document.createElement("div");
    newDiv.className = "expense-result";
    const newDiv2 = document.createElement("div");
    newDiv2.className = "icon";
    newDiv2.innerHTML = '<i class="fa fa-inr"></i>';
    const newDiv1 = document.createElement("div");
    newDiv1.className = "desc";
    const newPara = document.createElement("p");
    newPara.textContent = "Salary";
    const newPara1 = document.createElement("p");
    if (input.value.length === 0) {
      alert("Please enter valid amount");
      return;
    } else {
      newPara1.textContent = "Rs" + input.value;
    }
    incomeScore += parseInt(input.value);
    newDiv1.appendChild(newPara);
    newDiv1.appendChild(newPara1);
    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newDiv1);
    document.getElementsByClassName("income")[0].appendChild(newDiv);
    console.log(incomeScore);
  };
  //track result
  const trackResult = () => {
    const track = document.querySelector(".track");
    let result = document.querySelector(".result");
    let spend = document.querySelector(".spend");
    let profit = document.querySelector(".profit");
    track.addEventListener("click", () => {
      result.textContent = "Rs" + (incomeScore - expenseScore);
      spend.textContent = "Rs" + expenseScore;
      profit.textContent = "Rs" + incomeScore;
    });
  };
  addIncome();
  addExpenses();
  trackResult();
}
app();
