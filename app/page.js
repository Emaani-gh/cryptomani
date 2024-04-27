"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [cryptos, setCryptos] = useState([]);

  const fetchCryptos = () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-w7s4dBRSN8tu7QSCBucphDoS",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setCryptos(json))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <main className=" px-4 md:px-0 md:container mx-auto">
      <table className="w-full table-auto">
        <thead className=" text-cebter border-2 border-gray-400 mb-4 ">
          <tr className="">
            <th className="p-2">Asset</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Total Volume</th>
            <th className="p-2">Market cap </th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr className="text-center border-gray-300 border-2">
              <td>{crypto.symbol}</td>
              <td>{crypto.name}</td>
              <td>{`$ ${crypto.current_price}`}</td>
              <td>{crypto.total_volume}</td>
              <td>{crypto.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
