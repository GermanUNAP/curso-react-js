import './css/CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" 
      onClick={()=> console.log("Le diste click alboton")}
    >+</button>
  );
}

export { CreateTodoButton };