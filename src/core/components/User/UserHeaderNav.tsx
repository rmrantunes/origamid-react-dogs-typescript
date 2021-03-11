import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "src/core/contexts";
import { useMedia } from "src/core/hooks";
import { MY_ACCOUNT, MY_ACCOUNT_PATHS } from "src/routes/paths";

import { ReactComponent as MyPhotos } from "src/assets/feed.svg";
import { ReactComponent as Stats } from "src/assets/estatisticas.svg";
import { ReactComponent as PostPhoto } from "src/assets/adicionar.svg";
import { ReactComponent as Logout } from "src/assets/sair.svg";

import styles from "./UserHeaderNav.module.css";

export const UserHeaderNav = () => {
  const { logoutUser } = useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu ? styles.mobileButtonActive : ""
          }`}
          onClick={() => setMobileMenu((state) => !state)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu ? styles.navMobileActive : ""
        }`}
      >
        <NavLink to={MY_ACCOUNT} exact activeClassName={styles.active}>
          <MyPhotos />
          {mobile && <span>Minhas fotos</span>}
        </NavLink>
        <NavLink to={MY_ACCOUNT_PATHS.STATS} activeClassName={styles.active}>
          <Stats />
          {mobile && <span>Estatísticas</span>}
        </NavLink>
        <NavLink
          to={MY_ACCOUNT_PATHS.POST_PHOTO}
          activeClassName={styles.active}
        >
          <PostPhoto />
          {mobile && <span>Adicionar Foto</span>}
        </NavLink>
        <button onClick={logoutUser}>
          <Logout />
          {mobile && <span>Sair</span>}
        </button>
      </nav>
    </>
  );
};
