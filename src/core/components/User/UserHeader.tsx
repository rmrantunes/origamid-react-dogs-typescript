import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { UserHeaderNav } from "./UserHeaderNav";
import { MY_ACCOUNT_PATHS, MY_ACCOUNT } from "src/routes/paths";

import styles from "./UserHeader.module.css";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case MY_ACCOUNT:
        setTitle("Minhas Fotos");
        break;
      case MY_ACCOUNT_PATHS.STATS:
        setTitle("Estatísticas");
        break;
      case MY_ACCOUNT_PATHS.POST_PHOTO:
        setTitle("Adicionar Foto");
        break;
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
