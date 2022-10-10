import CardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, name, job, comment, img } = item;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div>
              <button>Small</button>
              <button>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
