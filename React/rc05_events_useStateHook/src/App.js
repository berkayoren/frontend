import Events from "./1-events/Events";
import Counter from "./2-classComponent/Counter";

function App() {
  return (
    <div>
      <h1>
        <Events />
        <Counter />
        <Counter count={5} />
      </h1>
    </div>
  );
}
export default App;