import "../css/share.css";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import IconShare from "./IconShare";

const Share = ({ state, func }) => {
  const visibleClass = state ? "share--visible" : "";

  return (
    <div className={`share ${visibleClass}`}>
      <div className="share__details">
        <span className="share__title">Share</span>

        <div className="share__icons">
          <img className="share__icon" src={iconFacebook} alt="Icon Facebook" />
          <img className="share__icon" src={iconTwitter} alt="Icon Twitter" />
          <img
            className="share__icon"
            src={iconPinterest}
            alt="Icon Pinterest"
          />
        </div>
      </div>

      <div className="share__button" onClick={() => func(!state)}>
        <IconShare color={"white"} />
      </div>
    </div>
  );
};

export default Share;
