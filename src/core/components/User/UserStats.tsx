import { useContext, useEffect } from "react";
import { GET_STATS_FETCH_CONFIG, Stats } from "src/adapters";
import {
  Head,
  Loading,
  ErrorMessage,
  UserStatsGraphs,
} from "src/core/components";
import { UserContext } from "src/core/contexts";
import { useFetch } from "src/core/hooks";

export const UserStats = () => {
  const { token } = useContext(UserContext);
  const { data: stats, error, loading, request } = useFetch<Stats[]>();

  useEffect(() => {
    async function getStatistics() {
      if (!token) return;
      const { url, options } = GET_STATS_FETCH_CONFIG(token);

      await request(url, options);
    }
    getStatistics();
  }, [request, token]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage {...{ error }} />;
  if (stats)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs {...{ stats }} />
      </div>
    );
  return <></>;
};
