import isEmpty from "lodash/isEmpty";
import { CTable, CTableBody, CTableCell, CTableEmptyContainer, CTableHead, CTableHeader, CTableRow, CTableSpinner } from "../../../shared/components/table";
import { Fragment } from "react";
import { ExpenseListColumns, IExpense } from "../interface/expense.interface";

const ExpenseList: React.FC<{ expenses: IExpense[]; onSettleExpense: (expenseId: string) => void }> = ({
  expenses,
  onSettleExpense,
}) => {
  console.log(expenses,'expense');
  return (
    <>
     {/* <div>
       <ul>
         {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - Amount: {expense.amount.toFixed(2)} - Payer: {expense.payer} - Participants:{' '}
             {expense.participants.join(', ')}
          <button onClick={() => onSettleExpense(expense.id)}>Settle Payment</button>
          </li>
         ))}
      </ul>
     </div> */}
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
        {/* {
          !isEmpty(allPlayersData) &&
          allPlayersData.map((player: IPlayerInfo) => (
            <Fragment key={player.playerId}>
              <CTableRow className='animated animate__fadeIn'>
                <CTableCell>
                  <div className='flex align-items--center ml--15'>
                    <div
                      className='profile-collapse cursor--pointer flex justify-content--center align-items--center bg--grey-100 mr--20'
                      onClick={() => {
                        setExpandedPlayerId(
                          expandedPlayerId === player.playerId ? '' : player.playerId
                        );
                      }}
                    >
                      <DownArrowIcon
                        className={`icon stroke--white ${
                          expandedPlayerId === player.playerId ? 'rotate--180' : ''
                        }`}
                      />
                    </div>
                    <div
                      className='flex align-items--center'
                      id={`profile-${player.playerAvatar}`}
                    >
                      <img
                        src={player.playerAvatar || profilePlaceholder}
                        alt='/player.avatar'
                        className='player-image mr--20 object-fit--cover'
                      />
                      <p className='table-cell-info text--left text--capitalize'>
                        {formatValue(player.playerFirstName)}&nbsp;
                        {formatValue(player.playerLastName)}
                      </p>
                    </div>
                    <ToolTip
                      id={`profile-${player.playerFirstName}`}
                      content='View full profile'
                    />
                  </div>
                </CTableCell>
                <CTableCell>
                  <p className='text--capitalize table-cell-info'>
                    {formatValue(player.primaryPosition)}
                  </p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(player.classOf)}</p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(player.clearingHouse)}</p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info break-word--word'>
                    {formatValue(player.playerEmail)}
                  </p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(player.jerseyNumber)}</p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(player.optInRecruiting)}</p>
                </CTableCell>
                <CTableCell>
                  <TrendingCount score={player.igaScore || 0} />
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info'>{formatValue(player.primaryGuardianName)}</p>
                </CTableCell>
                <CTableCell>
                  <p className='table-cell-info break-word--word'>
                    {formatValue(player.primaryGuardianEmail)}
                  </p>
                </CTableCell>
                <CTableCell>
                  <hr className='hr width--0 no--margin' />
                </CTableCell>
                <CTableCell>
                  <div className='ref-close flex justify-content--center align-items--center position--relative'>
                    <div
                      className='profile-actions cursor--pointer flex justify-content--center align-items--center bg--grey-100 mr--10'
                      id={`action-${player.playerId}`}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setPlayerId(player.playerId);
                        setQuickActionId(
                          quickActionId !== player.playerId ? player.playerId : ''
                        );
                      }}
                    >
                      <DotMenuIcon className='menu--icon fill--white' />
                    </div>
                    {quickActionId !== player.playerId && (
                      <ToolTip id={`action-${player.playerId}`} content='Actions' />
                    )}
                    <div className='profile-actions cursor--pointer flex justify-content--center align-items--center bg--grey-100 mr--5'>
                      <EmailComposeIcon className='mail--icon stroke--white fill--grey-100' />
                    </div>
                    {quickActionId === player.playerId && (
                      <QuickActionsMenu
                        actionMenuCallBack={() => setQuickActionId('')}
                        handleActionSelect={handleActionSelect}
                      />
                    )}
                  </div>
                </CTableCell>
              </CTableRow>
              {expandedPlayerId === player.playerId && (
                <PlayerExpand player={player} columnLength={PlayerListColumns.length} />
              )}
            </Fragment>
          ))} */}
        {isEmpty(expenses) && (
          <CTableEmptyContainer colSpan={ExpenseListColumns.length} text='No Expense Available' />
        )}
      </> 
    </CTableBody>
  </CTable>
  </>
  );
};

export default ExpenseList;