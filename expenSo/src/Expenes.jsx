import { useState } from "react";
import './App.css'

function Expenses({expenses, onDelete, onEdit}){ {
        
    }
    return(
        <div>
            {expenses.map(expense=> <li key={expense.id}>{expense.title} - Rs{expense.amount}<span className="btn" onClick={()=>onDelete(expense.id)}>Dlt</span><span className='btn' onClick={()=>onEdit(expense.id)}>edit</span></li>)}
        </div>
    )
}

export default Expenses