
import './App.css';
import { TodoCounter} from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoCreateButton } from './components/TodoCreateButton';

const defaultTodos =[
  {name:'Cortar cebolla', completed:false },
  {name:'Ordenar cuarto', completed:false },
  {name:'lavar sofa', completed:true},
  {name:'temrinar curso de react-js', completed:false},
];



function App() {
  return (

  <div className="App">
      <TodoCounter completed="16" total='23'/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.name}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoCreateButton/>
    </div>
  );
}


export default App;