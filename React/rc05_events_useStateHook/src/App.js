import Events from "./1-events/Events";
import Counter from "./2-classComponent/Counter";
import UseStateCounter from "./3-useState/UseStateCounter";

function App() {
  return (
    <div>
      <h1>
        <Events />
        <Counter />
        <Counter count={5} />
        <UseStateCounter />
      </h1>
    </div>
  );
}
export default App;
