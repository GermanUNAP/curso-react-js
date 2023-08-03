function TodoItem(props){
    return  (
        <li>
          <span>{props.name}</span>
          <p>{props.completed}</p>
          <span>X</span>
        </li>
    );
}
export { TodoItem };