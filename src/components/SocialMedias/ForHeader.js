import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
const ForHeader = () => {
  return (
    <div className="socials_for_header">
      <a href="https://linkedin.com" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="https://github.com" target={"_blank"}>
        <BsGithub />
      </a>
      <a href="https://twitter.com" target={"_blank"}>
        <BsTwitter />
      </a>
      <a href="https://facebook.com" target={"_blank"}>
        <BsFacebook />
      </a>
    </div>
  );
};

export default ForHeader;
