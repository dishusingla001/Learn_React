import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoitems from "./components/ToDoItems";
import "./App.css";
import Container from "./components/Container";
import EnjoyMessage from "./components/EnjoyMessage";
import ToDoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <ToDoItemsContextProvider>
      <Container>
        <AppName />
        <AddToDo />
        <EnjoyMessage />
        <ToDoitems />
      </Container>
    </ToDoItemsContextProvider>
  );
}

export default App;
