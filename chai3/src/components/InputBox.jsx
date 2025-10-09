import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  // Currency codes → name + flag emoji
  const currencyData = {
    usd: { name: "US Dollar", flag: "🇺🇸" },
    inr: { name: "Indian Rupee", flag: "🇮🇳" },
    eur: { name: "Euro", flag: "🇪🇺" },
    gbp: { name: "British Pound", flag: "🇬🇧" },
    aud: { name: "Australian Dollar", flag: "🇦🇺" },
    cad: { name: "Canadian Dollar", flag: "🇨🇦" },
    jpy: { name: "Japanese Yen", flag: "🇯🇵" },
    cny: { name: "Chinese Yuan", flag: "🇨🇳" },
  };

  return (
    <div className="flex items-center justify-between bg-white/20 backdrop-blur-md p-3 rounded-lg shadow-md">
      {/* Label + Input */}
      <div className="flex flex-col w-1/2">
        <label className="text-sm text-gray-200 mb-1">{label}</label>
        <input
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full px-2 py-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-900"
        />
      </div>

      {/* Currency Dropdown */}
      <div className="flex flex-col w-1/2 ml-2">
        <label className="text-sm text-gray-200 mb-1">Currency</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full px-2 py-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-900"
        >
          {currencyOptions.map((currency) => {
            const data = currencyData[currency.toLowerCase()] || { name: currency, flag: "" };
            return (
              <option key={currency} value={currency}>
                {data.flag} {currency.toUpperCase()} - {data.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
