import "./Profile.scss";
import profile from "../../assets/images/Profile.jpg";
import qr from "../../assets/images/qr.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__imgWrapper imgWrapper">
        <img className="imgWrapper__img" src={profile} alt="profile" />
      </div>
      <div className="profile__infoBlock infoBlock">
        <h3 className="infoBlock__name">PERSONAL</h3>
        <ul className="infoBlock__list">
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Name</span>
            <span className="infoBlock__itemInfo">Sergey Voitkevich</span>
          </li>
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Date of birth</span>
            <span className="infoBlock__itemInfo">28 May 1998</span>
          </li>
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Gender</span>
            <span className="infoBlock__itemInfo">Male</span>
          </li>
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Nationality</span>
            <span className="infoBlock__itemInfo">Belarusian</span>
          </li>
        </ul>
      </div>
      <div className="profile__infoBlock infoBlock">
        <h3 className="infoBlock__name">CONTACT</h3>
        <ul className="infoBlock__list">
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Mobile</span>
            <span className="infoBlock__itemInfo">+375 (29) 502 38 08</span>
            <span className="infoBlock__itemInfo">+375 (44) 559 69 65</span>
          </li>
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Mail</span>
            <span className="infoBlock__itemInfo">
              sergeyvoitkevich@mail.ru
            </span>
          </li>
          <li className="infoBlock__item">
            <span className="infoBlock__itemName">Address</span>
            <span className="infoBlock__itemInfo">Minsk, Vasnecova, 8/3</span>
          </li>
        </ul>
      </div>
      <div className="flex-center">
        <a href="https://www.linkedin.com/in/sergey-voitkevich-441ba1217">
          <i className="fa fa-linkedin fa-2x icon-3d"></i>
        </a>
        <a href="https://join.skype.com/invite/Mr8NRNYuOGRb">
          <i className="fa fa-skype fa-2x icon-3d"></i>
        </a>
        <a href="https://github.com/v0idman7/">
          <i className="fa fa-github fa-2x icon-3d"></i>
        </a>
        <a href="https://www.instagram.com/voitkevich_sergey/">
          <i className="fa fa-instagram fa-2x icon-3d"></i>
        </a>
      </div>
      <a href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/45ac2325-a5f8-44a5-96f8-37d92614ff7a?view=html">
        <img className="qrCode" src={qr} alt="code" />
      </a>
    </div>
  );
};

export default Profile;
