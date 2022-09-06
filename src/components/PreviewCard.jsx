import { useContext } from "react";
import { ApiContext } from "../context/LoadData";

function PreviewCard() {
  const data = useContext(ApiContext);
  return (
    <div className="cards-container">
      {data.characters.map((item, index) => (
        <div key={index} className="container">
          <div className="image-container">
            <img className="image-card" src={item.image} alt="" />
          </div>
          <h1 className="character-title">{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default PreviewCard;
