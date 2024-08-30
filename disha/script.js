function updateValue(id, value) {
    document.getElementById(id).textContent = value;
}

function calculateFD() {
    let investment = parseFloat(document.getElementById('investment').value);
    let tenure = parseFloat(document.getElementById('tenure').value);
    let rate = parseFloat(document.getElementById('rate').value);

    let ratePerMonth = rate / (12 * 100);
    let maturityAmount = investment * Math.pow(1 + ratePerMonth, tenure);
    let totalInterest = maturityAmount - investment;

    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
    document.getElementById('investmentAmount').textContent = investment.toFixed(2);
    document.getElementById('maturityAmount').textContent = maturityAmount.toFixed(2);
}
