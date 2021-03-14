import { useEffect, useState } from "react";
import { Stats } from "src/adapters";

import styles from "./UserStatsGraphs.module.css";

interface UserStatsGraphsProps {
  stats: Stats[];
}

export const UserStatsGraphs = ({ stats }: UserStatsGraphsProps) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalOfAccess = stats.reduce((returned, { acessos }) => {
      return Number(acessos) + returned;
    }, 0);

    setTotal(totalOfAccess);
  }, [stats]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div>
        <p className={styles.total}>Acessos: {total}</p>
      </div>
    </section>
  );
};
