import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const { orders } = useContext(OrderContext);

  if (orders.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <p className="text-white text-xl font-semibold bg-white/20 backdrop-blur-lg px-6 py-3 rounded-xl shadow-lg">
          No orders placed yet.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
        Order History
      </h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/30 hover:scale-[1.02] hover:shadow-2xl transition-all"
          >
            {/* Order Header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-bold text-white">
                Order ID: #{order.id}
              </p>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow">
                {order.date}
              </span>
            </div>

            {/* Customer + Total */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-white font-medium">
                👤 Customer:{" "}
                <span className="font-semibold">{order.customer.name}</span>
              </p>
              <p className="text-white font-semibold text-lg">
                💰 Total: ${order.total}
              </p>
            </div>

            {/* Items */}
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-bold mb-2">🛒 Items:</h3>
              <ul className="space-y-1 text-white/90">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b border-white/10 py-1 last:border-0"
                  >
                    <span>
                      {item.name} × {item.qty || 1}
                    </span>
                    <span className="font-semibold">
                      ${item.price * (item.qty || 1)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
