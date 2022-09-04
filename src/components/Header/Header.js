import ActionBtn from "../ActionBtn/ActionBtn";
import "./header.scss";
import pp from '../../assets/pp.png'
import ForHeader from '../SocialMedias/ForHeader'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Umur Utkan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <ActionBtn />
        <ForHeader />
        <div className="profile">
          <img src={pp} alt="" />
        </div>
        <a href="#contacts" className="go_bottom">Go Down</a>
      </div>
    </header>
  );
};

export default Header;
