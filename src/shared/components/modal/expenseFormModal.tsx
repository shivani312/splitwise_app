import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'antd';
import { IExpense, IUser } from '../../../features/expenseCard/interface/expense.interface';

interface IProps {
    isModalOpen:boolean;
    handleCancel:() => void;
    handleSubmit: () => void;
    onAddExpense: (value: IExpense) => void;
    member: IUser[];
}

const ExpenseForm: React.FC<IProps> = (props) => {
    const {isModalOpen ,handleCancel, handleSubmit ,onAddExpense,member} = props 

    const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddExpense = () => {
    if (description && amount && payer && participants.length > 0) {
      const newExpense: IExpense = {
        id: uuidv4(),
        description,
        amount: parseFloat(amount),
        payer,
        participants,
      };

      onAddExpense(newExpense);
      setDescription('');
      setAmount('');
      setPayer('');
      setParticipants([]);
    }
  };

  return (
    <>
      <Modal title="Add Expense" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
      <div>
      <input
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="">Select Payer</option>
        {member.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      {member.length > 0 && (
        <div>
          <span>Select Participants: </span>
          {member.map((user) => (
            <label key={user.id}>
              <input
                type="checkbox"
                value={user.name}
                checked={participants.includes(user.name)}
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setParticipants((prevParticipants) =>
                    checked ? [...prevParticipants, value] : prevParticipants.filter((participant) => participant !== value)
                  );
                }}
              />
              {user.name}
            </label>
          ))}
        </div>
      )}
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
      </Modal>
    </>
  );
};

export default ExpenseForm;