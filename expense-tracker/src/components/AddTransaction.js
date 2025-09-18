import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      text: '',
      amount: '',
      date: '',
      type: 'expense'
    }
  }); // form hook, aba mathi value ma vako sabai access garna pauxa

  const onSubmit = (data) => {
    const dateString = data.date || new Date().toISOString().slice(0, 10); // if user le date input gareko xaina vane automatically aja ko date linxa

    const unsignedAmount = Math.abs(parseFloat(data.amount) || 0);
    const signedAmount = data.type === 'expense' ? -unsignedAmount : unsignedAmount;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      amount: signedAmount, // amount sign based on selected type.
      date: dateString
    }

    addTransaction(newTransaction);
    reset(); // Form reset garxa after submit.
  }

  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            {...register('text', { required: true })} // spreads props (onCHange, onBlur, ref, etc.)
          />
          {errors.text && <span style={{ color: '#e74c3c', fontSize: '12px' }}>Text is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" {...register('date')} />
        </div>
        <div className="form-control">
          <label>Type</label>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input type="radio" value="expense" {...register('type')} />
              Expense
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input type="radio" value="income" {...register('type')} />
              Income
            </label>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter amount..."
            {...register('amount', {
              required: true,
              validate: (v) => {
                const num = parseFloat(v);
                return !isNaN(num) && num >= 0;
              }
            })}
          />
          {errors.amount && <span style={{ color: '#e74c3c', fontSize: '12px' }}>Enter a valid non-negative amount</span>}
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
