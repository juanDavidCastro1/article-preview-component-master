import "../css/card-article.css";
import illustrationDrawers from "../assets/drawers.jpg";
import Profile from "./Profile";
import Share from "./Share";
import { useState } from "react";

const CardArticle = () => {
  const [isShare, setIsShare] = useState(false);

  return (
    <article className="card-article">
      <div className="card-article__illustration">
        <img
          className="card-article__illustration-image"
          src={illustrationDrawers}
          alt="Illustration Drawers"
        />
      </div>
      <div>
        <div className="card-article__details">
          <h1 className="card-article__title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>

          <p className="card-article__description">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <Profile state={isShare} func={setIsShare} />
        <Share state={isShare} func={setIsShare} />
      </div>
    </article>
  );
};

export default CardArticle;
