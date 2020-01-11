import { h } from "hyperapp";
import picostyle from "picostyle";

const styled = picostyle(h);

const Container = styled("ul")({
  minHeight: "240px"
});

const TodoItem = styled("li")({
  fontSize: "24px"
});

const TodoList = ({ todos }) => {
  return (
    <Container>
      {todos.map((todo, i) => (
        <TodoItem key={i}>{todo}</TodoItem>
      ))}
    </Container>
  );
};

export default TodoList;
