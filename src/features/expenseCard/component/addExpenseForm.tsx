import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type Expense = {
  id: string;
  description: string;
  amount: number;
  payer: string;
  participants: string[];
};

type User = {
  id: string;
  name: string;
};

const AddExpenseForm: React.FC<{ users: User[]; onAddExpense: (expense: Expense) => void }> = ({ users, onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddExpense = () => {
    if (description && amount && payer && participants.length > 0) {
      const newExpense: Expense = {
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
    <div>
      <h2>Add Expense</h2>
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
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      {users.length > 0 && (
        <div>
          <span>Select Participants: </span>
          {users.map((user) => (
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
  );
};

export default AddExpenseForm;
