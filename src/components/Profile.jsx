import "../css/profile.css";
import imageProfile from "../assets/avatar-michelle.jpg";
import iconShare from "../assets/icon-share.svg";

const Profile = ({ state, func }) => {
  return (
    <div className="profile">
      <div>
        <img
          className="profile__image"
          src={imageProfile}
          alt="Avatar Michelle"
        />
        <div>
          <p className="profile__name">Michelle Appleton</p>
          <p className="profile__date">28 Jun 2020</p>
        </div>
      </div>
      <img
        onClick={() => func(!state)}
        className="profile__share"
        src={iconShare}
        alt="Icon Share"
      />
    </div>
  );
};

export default Profile;
