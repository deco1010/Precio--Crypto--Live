import React from "react";
import { useQuery } from "react-query";

import { getAllCoins } from "./API/API";

const Home = () => {
  const { data } = useQuery("Coins", getAllCoins, {
    refetchInterval: 1000 * 60,
  });

  //   console.log(data);

  return (
    <div>
      <h1>Home</h1>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} width="50" />
              <h3>{item.name}</h3>
              <div>{item.symbol}</div>
              <div>
                <b> {item.current_price}</b>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      {}
    </div>
  );
};

export default Home;
