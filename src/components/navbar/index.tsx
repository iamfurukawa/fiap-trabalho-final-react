import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Content, Links, Pill } from "./styles";

const Navbar = () => {
  return (
    <Content>
      <Link to={'/'}>
        <h2>Freelas</h2>
      </Link>

      <Links>
        <Link to={"/our-works"}>Top Trabalhos</Link>
        <Link to={"/freelas"}>Sobre nós</Link>
        <Link to={"/contact-us"}>Contate-nos</Link>
        <Link to={"/partners"}>Parceiros</Link>
      </Links>

      <Link to={"/contact-us"}>
        <Pill>
          <BsTelephoneFill size={25} />
          <h2>Entre em contato</h2>
        </Pill>
      </Link>
    </Content>
  );
};

export default Navbar;
