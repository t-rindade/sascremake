import "./style.menu.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/LogoSASCBasic1 2.svg";

export default function Menu() {
  return (
    <>
      <div id="menu">
        <div id="logo">
          <img src={logo} alt="" />
          <h1>SASC</h1>
        </div>
        <div id="linksPrincipal">
          <Link to="home">Visão Geral</Link>
          <Link to="home">Equipamentos</Link>
          <Link to="home">Dashboards</Link>
          <Link to="home">Usuários</Link>
        </div>
        <div id="sairSeparador">
          <Link to="home">Sair</Link>
        </div>
      </div>
    </>
  );
}
