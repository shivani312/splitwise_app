import { useEffect, useState } from "react";

import ExpenseList from "../component/expenseList";
import { useLocation, useNavigate } from 'react-router-dom';
import ExpenseForm from "../../../shared/components/modal/expenseFormModal";
import { IExpense } from "../interface/expense.interface";
 
const Expense:React.FC =() => {
    const [expenses, setExpenses] = useState<IExpense[]>([]);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const {state}  = useLocation();
    useEffect(() => {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
          setExpenses(JSON.parse(storedExpenses));
        }
      }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense: IExpense) => {
    setExpenses([...expenses, expense]);
  };

  // const handleSettleExpense = (expenseId: string) => {
  //   setExpenses((prevExpenses) =>
  //     prevExpenses.map((expense) =>
  //       expense.id === expenseId ? { ...expense, participants: [expense.payer] } : expense
  //     )
  //   );
  // };

const closeModel = () => {
  setIsModalOpen(false);
}

  // const calculateSettledExpenses = (): number => {
  //   const settledExpenses = expenses.filter((expense) => expense.participants.length === 1);
  //   return settledExpenses.reduce((total, expense) => total + expense.amount, 0);
  // };

  // const calculatePendingExpenses = (): number => {
  //   const pendingExpenses = expenses.filter((expense) => expense.participants.length > 1);
  //   return pendingExpenses.reduce((total, expense) => total + expense.amount, 0);
  // };

    return (
        <>
        <div className="container">
        <button className="btn back-btn" onClick={() => navigate(-1)}>Back</button>
        <div className="flex align-items--center justify-content--between mb--30">
          <p className="font--semi-bold">Expense List</p>
          <button className="btn btn--bg font--bold" onClick={() => setIsModalOpen(true)}>Add Expense</button>
        </div>
          <ExpenseList expenses={expenses}/>
        </div>
        {
          isModalOpen && (
            <ExpenseForm isModalOpen={isModalOpen} member={state?.members} onAddExpense={handleAddExpense} closeModel={closeModel}/>
          )
        }
        </>
    )

}
export default Expense