import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  let detailId = id;
  return (
    <div>
      <div className={style.card}>
        <div>
          <img className={style.foto} src={image} alt="una imagen" />
        </div>

        <div className={`${style.info} ${style.text}`}>
        <Link to={`/detail/${detailId}`}>
          <h2>{`- ${id} -`}</h2>
          </Link>
          <h2>{`Name: ${name}`}</h2>          
          <h2>{`Gender: ${gender}`}</h2>
          <h2>{`Species: ${species}`}</h2>
          <button
            onClick={(e) => {
              onClose(id);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
