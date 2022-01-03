import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as Fotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatistica } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobilemenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobilemenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMobilemenu(!mobileMenu);
          }}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.mobileButtonActive
        }`}
      >
        <NavLink to="/conta">
          <Fotos /> {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <Estatistica /> {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar /> {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
