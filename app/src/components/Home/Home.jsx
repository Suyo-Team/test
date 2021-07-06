import { useContext, useEffect, useState } from 'react';

import Map from '../Maps/Map';
import Plots from './Plots';

import '../../styles/Home.css';

import { getPlotCoords } from '../../services/getPlotCoords';
import { createPlot, getAllPlots } from '../../services/plots';

import AuthContext from '../../context/AuthContext';

const Home = () => {
  const [plots, setPlots] = useState([]);
  const { user } = useContext(AuthContext);
  const { token } = user;

  useEffect(() => {
    getAllPlots({ token })
      .then(setPlots);
  }, [token]);

  const addPlot = (plot) => {
    const { address } = plot;
    getPlotCoords({ query: address })
      .then((data) => {
        const { position: coords } = data;
        createPlot({ token, plot: { ...plot, coords } })
          .then((newPlot) => {
            setPlots([...plots, newPlot]);
          });
      });
  };

  return (
    <div className="home">
      <div className="plots">
        <Plots addPlot={addPlot} />
        <div className="plots__map">
          <Map plots={plots} />
        </div>
      </div>
    </div>
  );
};

export default Home;
