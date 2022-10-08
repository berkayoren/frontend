import "./../scss/Card.scss";

const Card = ({ title, desc, image, video }) => {
  console.log(title);
  return (
    <div className="cityCards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src="{image}" alt="" />
      <div className="overview">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
