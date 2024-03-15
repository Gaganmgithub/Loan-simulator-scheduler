// import React, { useState } from 'react';

// function LoanRepaymentSchedule() {
//     const [loanAmount, setLoanAmount] = useState('');
//     const [interestRate, setInterestRate] = useState('');
//     const [loanTerm, setLoanTerm] = useState('');
//     const [schedule, setSchedule] = useState('');

//     const generateSchedule = () => {
//         const loanAmountFloat = parseFloat(loanAmount);
//         const interestRateFloat = parseFloat(interestRate) / 100 / 12; // monthly interest rate
//         const loanTermInt = parseInt(loanTerm);
//         const monthlyPayment = (loanAmountFloat * interestRateFloat) / (1 - Math.pow(1 + interestRateFloat, -loanTermInt));
        
//         let remainingBalance = loanAmountFloat;
//         let scheduleHTML = "<h2>Repayment Schedule</h2>";
//         scheduleHTML += "<table><tr><th>Month</th><th>Payment</th><th>Interest</th><th>Principal</th><th>Remaining Balance</th></tr>";
        
//         for (let month = 1; month <= loanTermInt; month++) {
//             const interestPayment = remainingBalance * interestRateFloat;
//             const principalPayment = monthlyPayment - interestPayment;
//             remainingBalance -= principalPayment;

//             scheduleHTML += `<tr><td>${month}</td><td>${monthlyPayment.toFixed(2)}</td><td>${interestPayment.toFixed(2)}</td><td>${principalPayment.toFixed(2)}</td><td>${remainingBalance.toFixed(2)}</td></tr>`;
            
//             if (remainingBalance <= 0) break; // Loan fully paid
//         }

//         scheduleHTML += "</table>";
//         setSchedule(scheduleHTML);
//     };

//     return (
//         <div>
//             <h1>Loan Repayment Schedule Simulator</h1>
//             <label htmlFor="loanAmount">Loan Amount:</label>
//             <input type="number" id="loanAmount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="Enter loan amount" />

//             <label htmlFor="interestRate">Interest Rate (% per year):</label>
//             <input type="number" id="interestRate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="Enter interest rate" />

//             <label htmlFor="loanTerm">Loan Term (months):</label>
//             <input type="number" id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} placeholder="Enter loan term" />

//             <button onClick={generateSchedule}>Generate Schedule</button>

//             <div dangerouslySetInnerHTML={{ __html: schedule }}></div>
//         </div>
//     );
// }

// export default LoanRepaymentSchedule;
