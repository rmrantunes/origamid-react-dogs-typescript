import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { Stats } from "src/adapters";

import styles from "./UserStatsGraphs.module.css";

interface UserStatsGraphsProps {
  stats: Stats[];
}

interface Graph {
  x: string;
  y: number;
}

export const UserStatsGraphs: React.FC<UserStatsGraphsProps> = ({ stats }) => {
  const [graph, setGraph] = useState<Graph[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = stats.map(({ title, acessos }) => {
      return { x: title, y: Number(acessos) };
    });

    const totalOfAccess = stats.reduce((returned, { acessos }) => {
      return Number(acessos) + returned;
    }, 0);

    setTotal(totalOfAccess);
    setGraph(graphData);
  }, [stats]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>
      <div>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
