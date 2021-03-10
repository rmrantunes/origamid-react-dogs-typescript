import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { UserHeaderNav } from "./UserHeaderNav";
import { PROFILE_PATHS } from "src/routes/paths";

import styles from "./UserHeader.module.css";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case PROFILE_PATHS.MY_PHOTOS:
        setTitle("Minhas Fotos");
        break;
      case PROFILE_PATHS.STATS:
        setTitle("Estatísticas");
        break;
      case PROFILE_PATHS.POST_PHOTO:
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
