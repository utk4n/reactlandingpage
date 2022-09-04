import "./navbar.scss";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiMessage2Line } from "react-icons/ri";
const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("home")}
        className={active === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        onClick={() => setActive("experiences")}
        className={active === "experiences" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("portfolio")}
        className={active === "portfolio" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#contacts"
        onClick={() => setActive("contacts")}
        className={active === "contacts" ? "active" : ""}
      >
        <RiMessage2Line />
      </a>
    </nav>
  );
};

export default Navbar;
