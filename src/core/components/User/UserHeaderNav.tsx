import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "src/core/contexts";

import { ReactComponent as MyPhotos } from "src/assets/feed.svg";
import { ReactComponent as Stats } from "src/assets/estatisticas.svg";
import { ReactComponent as PostPhoto } from "src/assets/adicionar.svg";
import { ReactComponent as Logout } from "src/assets/sair.svg";

import styles from "./UserHeaderNav.module.css";

export const UserHeaderNav = () => {
  const { logoutUser } = useContext(UserContext);

  const [mobile, setMobile] = useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/profile" exact activeClassName={styles.active}>
        <MyPhotos />
        {mobile && <span>Minhas fotos</span>}
      </NavLink>
      <NavLink to="/profile/stats" activeClassName={styles.active}>
        <Stats />
        {mobile && <span>Estatísticas</span>}
      </NavLink>
      <NavLink to="/profile/post-photo" activeClassName={styles.active}>
        <PostPhoto />
        {mobile && <span>Adicionar Foto</span>}
      </NavLink>
      <button onClick={logoutUser}>
        <Logout />
        {mobile && <span>Sair</span>}
      </button>
    </nav>
  );
};
