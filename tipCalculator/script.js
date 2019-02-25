function calculateTip() {
  // Collect the html elements
  let billAmt = document.getElementById("billamt").value;
  let tipPercent = document.getElementById("myNumber").value;

  // Convert the billAmt and tipPercent to int for calculations
  let billAmtNum = parseInt(billAmt);
  let tipPercentNum = parseInt(tipPercent);

  // Calculate the tip
  tipPercentNum = tipPercentNum / 100;
  let tip = billAmtNum * tipPercentNum;
  console.log(tip);
  let total = tip + billAmtNum;
  // total = Math.round(total * 100) / 100;
  console.log(total);

  let tipAmount = document.querySelector("#tipAmount");
  let totalBillWithTip = document.querySelector("#totalBillWithTip");

  tipAmount.value = Math.ceil(tip).toFixed(2);
  totalBillWithTip.value = Math.ceil(total).toFixed(2);

  document.getElementById("results").style.display = "block";
}

// Add the range slider and calculate using VUE
console.clear();

var app = new Vue({
  el: "#app",
  data: {
    myNumber: 0
  }
});

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};