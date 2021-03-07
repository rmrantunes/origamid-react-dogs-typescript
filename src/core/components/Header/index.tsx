import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import { ReactComponent as Dogs } from "src/assets/dogs.svg";
import { UserContext } from "src/core/contexts";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Ir para Início" className={styles.logo}>
          <Dogs />
        </Link>
        {user ? (
          <Link to="/profile" className={styles.login}>
            {user.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
