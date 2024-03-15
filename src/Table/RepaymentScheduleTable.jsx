import React from 'react';
import './RepaymentTable.css';

function RepaymentScheduleTable({ repaymentSchedule }) {
    return (
        <div className="repayment-schedule">
            <table className='schedule-table' >
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>EMI</th>
                        <th>Principal</th>
                        <th>Monthly Interest</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {repaymentSchedule.map((payment, index) => (
                        <tr key={index}>
                            <td>{`${payment.month} ${payment.year}`}</td>
                            <td>{payment.payment}</td>
                            <td>{payment.principal}</td>
                            <td>{payment.interest}</td>
                            <td>{payment.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RepaymentScheduleTable;
