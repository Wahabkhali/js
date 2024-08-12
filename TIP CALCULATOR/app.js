function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for both fields.");
    }
    document.getElementById('tipAmount').innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
}