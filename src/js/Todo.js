import { useState } from 'react';
import '../css/App.css'
import TodoList from './TodoList';
/**
 * 
 * Forms - Input field
 */
export default function Todo()
{
    const [item,setItem] = useState('')
    const [todos,setTodos] = useState([]);

    const inputChange = (e) =>
    {
        setItem(e.target.value)
    }

    const addItem = () =>
    {
        setTodos(todos => [...todos,{text:item,id:Math.random()*1000,completed:false}])
        setItem('');
    }

    return(
        <div className="form">
        <input type="text" value={item} onChange={inputChange}/>
        <button onClick={addItem}>Add</button>   
        <TodoList todos={todos} setTodos={setTodos}/> 
        </div>
    );
}