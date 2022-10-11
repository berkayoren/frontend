import "./Main.scss";
import { data } from "../../helper/data";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <h1>Harwey</h1>
      ))}
    </div>
  );
};

export default Main;
