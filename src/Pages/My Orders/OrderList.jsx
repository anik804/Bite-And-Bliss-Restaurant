// import React, { use, useState } from "react";
import { use, useState } from "react";
import OrderTable from "./OrderTable";
import axios from "axios";

const OrderList = ({ myOrderPromise }) => {
  const initialOrders = use(myOrderPromise);
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this order?");
    if (!confirm) return;

    // Find the order to delete (to get foodId and quantity)
    const orderToDelete = orders.find(order => order._id === id);
    if (!orderToDelete) return;

    axios.delete(`http://localhost:3000/purchase/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          // Remove from UI
          setOrders(prev => prev.filter(order => order._id !== id));

          // Restore quantity in menu
          axios.patch(`http://localhost:3000/foods/${orderToDelete.foodId}/restore`, {
            quantity: orderToDelete.quantity
          })
          .then(() => {
            console.log("Quantity restored in menu.");
          })
          .catch(err => {
            console.error("Failed to restore quantity:", err);
          });
        }
      })
      .catch(err => {
        console.error("Delete failed:", err);
      });
  };

  return (
    <div>
      <h3>Orders done: {orders.length}</h3>
      <div className="overflow-x-auto my-10 w-3/5 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Name</th>
              <th>Food Price</th>
              <th>Quantity</th>
              <th>Buying Date</th>
              <th>Buyer Name</th>
              <th>Remove Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderTable
                key={order._id}
                order={order}
                index={index + 1}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
