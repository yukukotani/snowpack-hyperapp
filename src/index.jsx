import { h, app } from "hyperapp";
import picostyle from "picostyle";
import TodoList from "./components/TodoList.js";
import AddTodo from "./components/AddTodo.js";

const styled = picostyle(h);

const Container = styled("div")({
  padding: "0 30px"
});

const state = {
  todos: ["First ToDo"],
  currentInput: ""
};

const actions = {
  addTodo: value => state => ({ ...state, todos: [...state.todos, value] }),
  updateInput: value => state => ({ ...state, currentInput: value })
};

const view = (state, actions) => {
  return (
    <Container>
      <h1>Non-deletable ToDo List Build with Snowpack and Hyperapp</h1>
      <TodoList todos={state.todos} />
      <AddTodo
        currentInput={state.currentInput}
        addTodo={actions.addTodo}
        updateInput={actions.updateInput}
      />
    </Container>
  );
};

app(state, actions, view, document.getElementById("app"));
