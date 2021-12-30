import './Info.css';

const Info = ({ brand, model, price }) => (
  <div className="infoContainer">
    <h1 className="infoModel">
      {brand} {model}
    </h1>
    {price ? (
      <p className="infoPrice">{price} €</p>
    ) : (
      <p className="info-sold-out">SOLD OUT</p>
    )}
  </div>
);

export default Info;