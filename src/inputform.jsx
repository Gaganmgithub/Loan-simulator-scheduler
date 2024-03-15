// import React, { useState } from 'react';
// import './LoanInputForm.css';
// import RepaymentScheduleTable from '../Table/RepaymentScheduleTable';
// import AmortizationChart from '../Chart/AmortizationChart';
// import PieChart from '../Chart/PieChart';

// function LoanInputForm() {
//     const [loanAmount, setLoanAmount] = useState(7500000);
//     const [loanTerm, setLoanTerm] = useState(10);
//     const [interestRate, setInterestRate] = useState(9.55);
//     const [startDate, setStartDate] = useState('');
//     const [repaymentSchedule, setRepaymentSchedule] = useState([]);
//     const [emi, setEMI] = useState(0);
//     const [totalInterest, setTotalInterest] = useState(0);
//     const [totalAmountPayable, setTotalAmountPayable] = useState(0);
//     const [error, setError] = useState('');

//     const calculateRepaymentSchedule = () => {
//         if (!startDate) {
//             setError('Start Date is required.');
//             return;
//         }    

//         // Convert interest rate to decimal
//         const monthlyRate = interestRate / 100 / 12;
//         // Calculate number of payments
//         const numberOfPayments = loanTerm * 12;
//         // Calculate monthly payment
//         const monthlyPayment =
//             loanAmount *
//             monthlyRate /
//             (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

//         // Calculate total amount payable and total interest
//         const totalAmount = monthlyPayment * numberOfPayments;
//         const totalInterestAmount = totalAmount - loanAmount;

//         // Generate repayment schedule
//         const schedule = [];
//         let balance = loanAmount;
//         let currentDate = new Date(startDate);
//         for (let i = 0; i < numberOfPayments; i++) {
//             const interest = balance * monthlyRate;
//             const principal = monthlyPayment - interest;
//             balance -= principal;
//             schedule.push({
//                 month: currentDate.toLocaleString('default', { month: 'long' }),
//                 payment: monthlyPayment.toFixed(2),
//                 principal: principal.toFixed(2),
//                 interest: interest.toFixed(2),
//                 balance: balance.toFixed(2)
//             });
//             // Move to the next month
//             currentDate.setMonth(currentDate.getMonth() + 1);
//         }
//         setRepaymentSchedule(schedule);
//         setEMI(monthlyPayment.toFixed(2));
//         setTotalInterest(totalInterestAmount.toFixed(2));
//         setTotalAmountPayable(totalAmount.toFixed(2));
//         setError('');
//     };

//     const handleLoanAmountChange = (event) => {
//         setLoanAmount(event.target.value);
//     };

//     const handleInterestRateChange = (event) => {
//         setInterestRate(event.target.value);
//     };

//     const handleLoanTermChange = (event) => {
//         setLoanTerm(event.target.value);
//     };

//     const handleStartDateChange = (event) => {
//         setStartDate(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         calculateRepaymentSchedule();
//     };

//     return (
//         <div className='inputForm-container'>
//             <h2>Loan Repayment Schedule Simulator</h2>
//             <label>Loan Repayment Scheduler is a basic calculator that helps you to calculate the EMI, 
//                 monthly interest and monthly reducing balance on the basis of principal amount, 
//                 loan tenure and interest rate.
//             </label>

//             <div className='input-body'>
//                 <form className='input-form' onSubmit={handleSubmit}>
//                     <div className='input-loanAmount'>
//                         <div>
//                             <label>Loan Amount: </label>
//                             <span>₹</span>
//                             <input type="number" value={loanAmount} onChange={handleLoanAmountChange} />                    
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="20000000" step="500000" value={loanAmount} onChange={handleLoanAmountChange} />
//                     </div>

//                     <div className='input-interestRate'>
//                         <div>
//                             <label>Interest Rate (% per year): </label>
//                             <input type="number" value={interestRate} onChange={handleInterestRateChange} />
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="20" step="0.1" value={interestRate} onChange={handleInterestRateChange} />
//                     </div>

//                     <div className='input-loanTerm'>
//                         <div>
//                             <label>Loan Term (years): </label>
//                             <input type="number" value={loanTerm} onChange={handleLoanTermChange} />
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="30" value={loanTerm} onChange={handleLoanTermChange} />
//                     </div>

//                     <div className='input-startDate'>
//                         <label>Start Date: </label>
//                         <input type="date" value={startDate} onChange={handleStartDateChange} />
//                     </div>

//                     {error && <p className="error-message">{error}</p>}

//                     <button type="submit">Calculate Repayment Schedule</button>
//                 </form>

//                 <div className="calculation-summary">
//                     <h3>Calculation Summary</h3>
//                     <div>
//                         <p>EMI: ₹ {emi}</p>
//                         <p>Total Interest: ₹ {totalInterest}</p>
//                         <p>Total Amount Payable: ₹ {totalAmountPayable}</p>
//                     </div>
//                 </div>

//                 <div className="payment-breakup-chart">
//                     <h3>Payment Breakup</h3>
//                     <PieChart principalLoanAmount={loanAmount} totalInterest={totalInterest} />
//                 </div>

//             </div>           

//             <div className="amortization-chart">
//                 <h3>Amortization Chart</h3>
//                 <AmortizationChart repaymentSchedule={repaymentSchedule} />
//             </div>
    
//             <div className="repayment-schedule">
//                 <h3>Repayment Schedule</h3>
//                 <RepaymentScheduleTable repaymentSchedule={repaymentSchedule} />
//             </div>
//         </div>
//     );
// }

// export default LoanInputForm;


// import React, { useState } from 'react';
// import './LoanInputForm.css';
// import RepaymentScheduleTable from '../Table/RepaymentScheduleTable';
// import AmortizationChart from '../Chart/AmortizationChart';
// import PieChart from '../Chart/PieChart';

// function LoanInputForm() {
//     const [loanAmount, setLoanAmount] = useState(7500000);
//     const [loanTerm, setLoanTerm] = useState(10);
//     const [interestRate, setInterestRate] = useState(9.55);
//     const [startDate, setStartDate] = useState('');
//     const [repaymentSchedule, setRepaymentSchedule] = useState([]);
//     const [emi, setEMI] = useState(0);
//     const [totalInterest, setTotalInterest] = useState(0);
//     const [totalAmountPayable, setTotalAmountPayable] = useState(0);
//     const [error, setError] = useState('');

//     const calculateRepaymentSchedule = () => {
//         if (!startDate) {
//             setError('Start Date is required.');
//             return;
//         }

//         // Convert interest rate to decimal
//         const monthlyRate = interestRate / 100 / 12;
//         // Calculate number of payments
//         const numberOfPayments = loanTerm * 12;
//         // Calculate monthly payment
//         const monthlyPayment =
//             loanAmount *
//             monthlyRate /
//             (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

//         // Calculate total amount payable and total interest
//         const totalAmount = monthlyPayment * numberOfPayments;
//         const totalInterestAmount = totalAmount - loanAmount;

//         // Generate repayment schedule
//         const schedule = [];
//         let balance = loanAmount;
//         let currentDate = new Date(startDate);
//         for (let i = 0; i < numberOfPayments; i++) {
//             const interest = balance * monthlyRate;
//             const principal = monthlyPayment - interest;
//             balance -= principal;
//             schedule.push({
//                 month: currentDate.toLocaleString('default', { month: 'long' }),
//                 year: currentDate.getFullYear(),
//                 payment: monthlyPayment.toFixed(2),
//                 principal: principal.toFixed(2),
//                 interest: interest.toFixed(2),
//                 balance: balance.toFixed(2)
//             });
//             // Move to the next month
//             currentDate.setMonth(currentDate.getMonth() + 1);
//         }
//         setRepaymentSchedule(schedule);
//         setEMI(monthlyPayment.toFixed(2));
//         setTotalInterest(totalInterestAmount.toFixed(2));
//         setTotalAmountPayable(totalAmount.toFixed(2));
//         setError('');
//     };

//     const handleLoanAmountChange = (event) => {
//         setLoanAmount(event.target.value);
//     };

//     const handleInterestRateChange = (event) => {
//         setInterestRate(event.target.value);
//     };

//     const handleLoanTermChange = (event) => {
//         setLoanTerm(event.target.value);
//     };

//     const handleStartDateChange = (event) => {
//         setStartDate(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         calculateRepaymentSchedule();
//     };

//     return (
//         <div className='inputForm-container'>
//             <h2>Loan Repayment Schedule Simulator</h2>
//             <label>Loan Repayment Scheduler is a basic calculator that helps you to calculate the EMI, 
//                 monthly interest and monthly reducing balance on the basis of principal amount, 
//                 loan tenure and interest rate.
//             </label>

//             <div className='input-body'>
//                 <form className='input-form' onSubmit={handleSubmit}>
//                     <div className='input-loanAmount'>
//                         <div>
//                             <label>Loan Amount: </label>
//                             <span>₹</span>
//                             <input type="number" value={loanAmount} onChange={handleLoanAmountChange} />                    
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="20000000" step="500000" value={loanAmount} onChange={handleLoanAmountChange} />
//                     </div>

//                     <div className='input-interestRate'>
//                         <div>
//                             <label>Interest Rate (% per year): </label>
//                             <input type="number" value={interestRate} onChange={handleInterestRateChange} />
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="20" step="0.1" value={interestRate} onChange={handleInterestRateChange} />
//                     </div>

//                     <div className='input-loanTerm'>
//                         <div>
//                             <label>Loan Term (years): </label>
//                             <input type="number" value={loanTerm} onChange={handleLoanTermChange} />
//                         </div>
//                         <input className='input-slider' type="range" min="0" max="30" value={loanTerm} onChange={handleLoanTermChange} />
//                     </div>

//                     <div className='input-startDate'>
//                         <label>Start Date: </label>
//                         <input type="date" value={startDate} onChange={handleStartDateChange} />
//                     </div>

//                     {error && <p className="error-message">{error}</p>}

//                     <button type="submit">Calculate Repayment Schedule</button>
//                 </form>

//                 <div className="calculation-summary">
//                     <h3>Calculation Summary</h3>
//                     <div>
//                         <p>EMI: ₹ {emi}</p>
//                         <p>Total Interest: ₹ {totalInterest}</p>
//                         <p>Total Amount Payable: ₹ {totalAmountPayable}</p>
//                     </div>
//                 </div>

//                 <div className="payment-breakup-chart">
//                     <h3>Payment Breakup</h3>
//                     <PieChart principalLoanAmount={loanAmount} totalInterest={totalInterest} />
//                 </div>

//             </div>           

//             <div className="amortization-chart">
//                 <h3>Amortization Chart</h3>
//                 <AmortizationChart repaymentSchedule={repaymentSchedule} />
//             </div>
    
//             <div className="repayment-schedule">
//                 <h3>Repayment Schedule</h3>
//                 <RepaymentScheduleTable repaymentSchedule={repaymentSchedule} />
//             </div>
//         </div>
//     );
// }

// export default LoanInputForm;

