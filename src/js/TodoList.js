import '../css/App.css'


export default function TodoList({todos,setTodos})
{
    const ListItems = () =>
    {
        return todos.map(todo => {
            return (
            <div key={todo.id} className="grid">
                <span style={{ textDecoration : todo.completed == true ? 'line-through': 
                 'none'}} onClick={(e) => {toggleList(e,todo.id)}} >
                {todo.text}
                </span>
                <span onClick={(e)=> {removeFromList(e,todo.id)}}>X</span>
            </div>)
        });
    }

    const removeFromList = (e,id) =>
    {
        e.preventDefault();
        todos = todos.filter(todo => todo.id !== id);
        setTodos([...todos])
    }

    const toggleList = (e,id) =>
    {
        e.preventDefault()
        todos.map((todo)=>
        {
            if(todo.id === id)
            {
                todo.completed = !todo.completed;
            }
        });
        setTodos([...todos])
    }
 
    return (
        <div className="list">
        List
        <ul className='list-items'>
            <ListItems /> 
        </ul>
        </div>
    );
}