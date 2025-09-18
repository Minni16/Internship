import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const {filteredTransactions, filterRangeDays, setFilterRangeDays} = useContext(GlobalContext);
  // gives the values from the GlobalContext.Provider that wraps the app
  // filteredTransactions → array of transactions that are already filtered by date.
  // filterDate → the currently selected date (comes from state).
  // setFilterDate → function to update the date.

  return (
    <>
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>History</span>
        <span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              className="btn"
              style={{ padding: '4px 8px', opacity: filterRangeDays === 7 ? 1 : 0.8 }}
              onClick={() => { setFilterRangeDays(7); }}
            >7d</button>
            <button
              className="btn"
              style={{ padding: '4px 8px', opacity: filterRangeDays === 15 ? 1 : 0.8 }}
              onClick={() => { setFilterRangeDays(15); }}
            >15d</button>
            <button
              className="btn"
              style={{ padding: '4px 8px', opacity: filterRangeDays === 30 ? 1 : 0.8 }}
              onClick={() => { setFilterRangeDays(30); }}
            >1m</button>
            <button
              className="btn"
              style={{ padding: '4px 8px', opacity: filterRangeDays === 0 ? 1 : 0.8 }}
              onClick={() => { setFilterRangeDays(0); }}
            >All</button>
          </div>
        </span>
      </h3>
      <ul className="list">
        {filteredTransactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList
