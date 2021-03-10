import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import { ReactComponent as Dogs } from "src/assets/dogs.svg";
import { UserContext } from "src/core/contexts";
import { ROOT, PROFILE_PATH, LOGIN_PATH } from "src/routes/paths";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to={ROOT} aria-label="Ir para Início" className={styles.logo}>
          <Dogs />
        </Link>
        {user.nome && (
          <Link to={PROFILE_PATH} className={styles.login}>
            {user.nome}
          </Link>
        )}
        {!user.nome && (
          <Link to={LOGIN_PATH} className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
