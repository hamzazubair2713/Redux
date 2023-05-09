import logo from "./logo.svg";
import User from "./User";
import "./App.css";
import TodoApp from "./components/TodoApp";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./redux/todoApp/Actions/todoAction";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/ShoppingCart/Home";
import Cart from "./components/ShoppingCart/Cart";
import Navbar from "./components/ShoppingCart/Navbar";
import { Provider } from "react-redux";
import store from "./components/ShoppingCart/store";

function App() {
  // const todoitems = useSelector((state) => state.todoReducer);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <TodoApp /> */}
        {/* <Form />
      <Todo />
      {todoitems.length > 1 && (
        <button onClick={() => dispatch(deleteTodo())}>Delete All</button>
      )} */}
      </Provider>
    </div>
  );
}

export default App;
