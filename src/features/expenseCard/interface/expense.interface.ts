export interface IExpense {
    id: string;
    description: string;
    amount: number;
    payer: string;
    participants: string[];
};

export interface IUser {
    id: string;
    name: string;
  };

  export interface IGroup {
    id: string
    name: string
    members: IUser[]
  }


export const ExpenseListColumns = [
	{
		key: 'description',
		sortable: false,
		heading: 'Description',
		className: 'width--12'
	},
    {
		key: 'payer',
		sortable: false,
		heading: 'Payer',
		className: 'width--12'
	},
	{
		key: 'participant',
		sortable: false,
		heading: 'Participant',
		className: 'width--12'
	},
	{
		key: 'amount',
		sortable: false,
		heading: 'Amount',
		className: 'width--12'
	},
	{
		key: 'hr',
		sortable: false,
		heading: '',
		className: 'width--0'
	},
	{
		key: 'options',
		sortable: false,
		heading: '',
		className: 'width--10'
	}
];