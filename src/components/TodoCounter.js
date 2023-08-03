function TodoCounter(props){
    return(
      <h2>Has completado {props.completed} de {props.total} TODOS</h2>
    );
}
export { TodoCounter };