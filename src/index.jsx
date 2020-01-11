import { h, app } from "hyperapp";
import picostyle from "picostyle";
import TodoList from "./components/TodoList.js";
import AddTodo from "./components/AddTodo.js";

const styled = picostyle(h);

const Container = styled("div")({
  padding: "0 30px"
});

const Footer = styled("div")({
  color: "gray",
  marginTop: "32px"
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
      <Footer>
        <a href="https://github.com/Monchi/snowpack-hyperapp">
          https://github.com/Monchi/snowpack-hyperapp
        </a>
      </Footer>
    </Container>
  );
};

app(state, actions, view, document.getElementById("app"));
