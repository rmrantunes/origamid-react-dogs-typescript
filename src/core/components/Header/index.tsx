import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};
