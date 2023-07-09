import { Fragment, useState } from "react";
import moment from "moment";
import isEmpty from "lodash/isEmpty";

import { CTable, CTableBody, CTableCell, CTableEmptyContainer, CTableHead, CTableHeader, CTableRow } from "../../../shared/components/table";
import { ExpenseListColumns, IExpense } from "../interface/expense.interface";
import { formatValue } from "../../../shared/util/utility";
import SettleUpExpense from "../../../shared/components/modal/settleUpexpenseModal";

interface IProps {
  expenses: IExpense[];
  onSettleExpense?: (expenseId: string) => void; 
}

const ExpenseList: React.FC<IProps> = (props) => {
  const {expenses} = props;
  const [isSettleUp,setIsSettleUp] = useState(false);

  return (
    <>
    <CTable>
    <CTableHead className='table-sticky--header'>
      <CTableRow>
        {ExpenseListColumns.map((column) => (
          <CTableHeader
            key={column.key}
            sortable={column.sortable}
            columnKey={column.key || ''}
            className={column.className}
            heading={column.heading}
          />
        ))}
      </CTableRow>
    </CTableHead>
    <CTableBody>
       <>
        {
          !isEmpty(expenses) &&
          expenses.map((expense: IExpense) => (
            <Fragment key={expense.id}>
              <CTableRow className='animated animate__fadeIn'>
                <CTableCell>
                <p className='text--capitalize table-cell-info'>
                    {formatValue(expense.description)}
                  </p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(expense.payer)}</p>
                </CTableCell>
                <CTableCell>
                  <div>
                  {
                    expense.participants.length > 0 && expense.participants.map((name: string,index:number) => (
                      <p key={index} className="table-cell-info">{name}</p>
                    ))
                  }
                  </div>
                </CTableCell>
                <CTableCell>
                  <p className='text--capitalize table-cell-info'>
                    ${formatValue(expense.amount)}
                  </p>
                </CTableCell>
                <CTableCell>
                  <p className='text--capitalize table-cell-info'>
                    {moment(expense.createdDate).format('DD/MM/YYYY')}
                  </p>
                </CTableCell>
                <CTableCell>
                  <hr className='hr width--0 no--margin' />
                </CTableCell>
                <CTableCell>
                  <div className='ref-close flex justify-content--center align-items--center position--relative'>
                   <button className="btn btn--width bg--transparent font--semi-bold" onClick={() => setIsSettleUp(true)}>Settle Up</button>
                  </div>
                </CTableCell>
              </CTableRow>
             
            </Fragment>
          ))} 
        {isEmpty(expenses) && (
          <CTableEmptyContainer colSpan={ExpenseListColumns.length} text='No Expense Available' />
        )}
      </> 
    </CTableBody>
  </CTable>
  {
    isSettleUp && (
      <SettleUpExpense isModalOpen={isSettleUp} closeModel={() => setIsSettleUp(false)}/>
    )
  }
  </>
  );
};

export default ExpenseList;