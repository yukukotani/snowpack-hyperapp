import { h } from "hyperapp";
import picostyle from "picostyle";

const styled = picostyle(h);

const Container = styled("div")({
  marginTop: "24px"
});

const AddTodoInput = styled("input")({
  height: "24px"
});
const AddTodoButton = styled("button")({
  height: "24px",
  marginLeft: "8px"
});

const AddTodo = ({ currentInput, addTodo, updateInput }) => (
  <Container>
    <AddTodoInput
      value={currentInput}
      oninput={event => updateInput(event.target.value)}
    ></AddTodoInput>
    <AddTodoButton onclick={() => addTodo(currentInput)}>
      Add Todo
    </AddTodoButton>
  </Container>
);

export default AddTodo;
