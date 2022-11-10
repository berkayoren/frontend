import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { legacy_createStore as createStore } from "redux";
import reducer from "./redux";
import { Provider } from "react";

function App() {
  const store = createStore(reducer);
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* <Todo /> */}
    </div>
  );
}

export default App;