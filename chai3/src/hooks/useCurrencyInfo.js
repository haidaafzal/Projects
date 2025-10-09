import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
        );

        if (!res.ok) throw new Error("Network error");

        const allCurrencies = await res.json();

        // store only the rates of selected currency
        setData(allCurrencies[currency.toLowerCase()] || {});
      } catch (err) {
        console.error("Error fetching currency data:", err);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
