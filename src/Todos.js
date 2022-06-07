
import {useState} from 'react';

function Todos() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDos((cuurentArray) => [toDo, ...cuurentArray])
        console.log(toDos);
    }
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
                <button>Add to Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </div>
    );
}

export default Todos;