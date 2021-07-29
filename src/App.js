import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

import Header from './components/Header';
import Nav from './components/Nav';
import { NBA_ELO_CSV, NBA_ELO_LATEST_CSV } from './constants';

import Graph from './components/Graph';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const getData = async (file) => {
    const latestEloData = await csv(file);

    setData(latestEloData);
  }

  useEffect(() => {
    try {
      getData(NBA_ELO_LATEST_CSV);
    } catch (e) {
      console.error(e);
      setError(e);
    }
  }, []);

  return (
    <main className="md:px-4 lg:px-8 w-full px-2 pb-8 mx-auto">
      <Header />
      <Nav />
      <section className="">
        { error && (
          <div>There was an error loading the data</div>
        )}

        {!error && data.length && (
          <Graph data={data} />
        )}
      </section>
    </main>
  );
}

export default App;
