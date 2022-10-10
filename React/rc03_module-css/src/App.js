import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  return (
    <>
      {data.map((item) => {
        const { id, language, img, btnName } = item; //! Destr
        return <Card />;
      })}
    </>
  );
}

export default App;
