export function handleMC() {//this
    localStorage.removeItem("calculationOutput");
  }


export function handleClosingHistorySection() {//this
    document.getElementsByClassName("text-box")[0].style.display = "flex";
    document.getElementsByClassName("advanced-operations")[0].style.display =
      "block";
    document.getElementsByClassName("calculator-buttons")[0].style.display =
      "grid";
  
    document.getElementsByClassName("close-history")[0].remove();
    document.getElementsByClassName("history-section")[0].remove();
  }