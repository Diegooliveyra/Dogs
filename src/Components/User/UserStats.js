import React from 'react';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { STATS_GET } from '../../Api/api';
const UserStatsGraphs = React.lazy(()=> import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatistica" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
