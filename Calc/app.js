// window.onload = function(){
//     document.getElementById('results').style.display = 'none';
// };



// Listen for submit
document.getElementById('financeForm').addEventListener('submit', function(e) {
    calculateResults();

    e.preventDefault(); 
});

// CALCULATE RESULTS
function calculateResults(){
    // UI Vars
let netIncome = document.querySelector('#card_input_netIncome');
let mortgagePayment = document.querySelector('#card_input_mortgagePayment');
let results = document.querySelector('.card_output_results');
let message = document.querySelector('.card_output_message');
let message2 = document.querySelector('.card_output_message2');

let income = parseInt(netIncome.value);
let payment = parseInt(mortgagePayment.value);

    // Find percentage of current mortgagePayment against netIncome
    if(payment >= income){
        message.textContent = `Your mortgage is more than your income.`;
    } else if (income > payment) {
        let calculatedPercentage = ((payment / income) * 100);
        message.textContent = ('Your mortage is');
        results.style.color= 'green';
        results.textContent = (`${calculatedPercentage}%`);
        message2.textContent = ('of your net income.')
    } else {
        message.style.color = 'red';
        message.innerHTML = "Please Enter Your Values";
    }

};