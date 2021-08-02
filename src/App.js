import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

import Header from './components/Header';
import { BACKUP_LATEST_CSV, NBA_ELO_LATEST_CSV } from './constants';

import Graph from './components/Graph';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const getData = async (file) => {
    const latestEloData = await csv(file);

    setData(latestEloData);
    setError(null);
  }

  useEffect(() => {
    try {
      getData(NBA_ELO_LATEST_CSV);
    } catch (e) {
      console.error(e);
      setError(e);
      getData(BACKUP_LATEST_CSV);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="md:px-4 lg:px-8 w-full px-2 pb-8 mx-auto">
        <section className="">
          { error && (
            <div>There was an error loading the data from fivethirtyeight.com. Attempting to use local copy...</div>
          )}

          {!error && data.length && (
            <Graph data={data} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
