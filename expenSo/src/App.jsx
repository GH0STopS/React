import { use, useState } from 'react'
import './App.css'
import Expenses from './Expenes'

function App() {
  const [expenses, setExpenses] = useState([])
  const [form,setForm]=useState(true)
  const [id,setId]=useState(null)
  const balance = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0)
  function handleDelete(id){
    setExpenses(expenses.filter(ex=>ex.id!==id))
  }

  function handleEdit(id){
    // setExpenses(expenses.map(ex=>ex.id===id?{...ex,title:"Able to edit"}:ex))
    setId(id)
    setForm(false)
  }
  

  return (
    <>
      <div>
        
        <form onSubmit={
          (
            e => {
              // e.preventDefault() 
              // console.log(e.target.title.value)
              
              e.preventDefault()
              const newExpense = {
                id: crypto.randomUUID(),
                title: e.target.title.value,
                amount: e.target.amount.value
              }              
              form?setExpenses([...expenses, newExpense]):setExpenses(expenses.map(ex=>ex.id===id?{...ex,title:e.target.title.value,amount:e.target.amount.value}:ex));setForm(true)
              e.target.reset()
            }
          )
        }>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" required />
          <button type="submit">{form?"Add Expense":"Edit"}</button>
        </form>

        <div>
          <h2>Expenses</h2>
          <h3>Total Balance: Rs {balance}</h3>
          <Expenses expenses={expenses} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
      </div>  
    </>
  )
}

export default App
