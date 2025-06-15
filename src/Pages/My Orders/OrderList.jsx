import { use, useState } from "react";
import OrderTable from "./OrderTable";
import axios from "axios";
import Swal from "sweetalert2";

const OrderList = ({ myOrderPromise }) => {
  const initialOrders = use(myOrderPromise);
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to cancel this order?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it'
    });

    if (!result.isConfirmed) return;

    const orderToDelete = orders.find(order => order._id === id);
    if (!orderToDelete) return;

    try {
      const res = await axios.delete(`http://localhost:3000/purchase/${id}`);

      if (res.data.deletedCount > 0) {
        setOrders(prev => prev.filter(order => order._id !== id));

        await axios.patch(`http://localhost:3000/foods/${orderToDelete.foodId}/restore`, {
          quantity: orderToDelete.quantity
        });

        Swal.fire('Cancelled!', 'Your order has been cancelled.', 'success');
      }
    } catch (err) {
      console.error("Delete failed:", err);
      Swal.fire('Error', 'Failed to cancel the order.', 'error');
    }
  };

  return (
    <div>
      <div className="overflow-x-auto my-10 mx-auto max-w-full px-4">
        <table className="table min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2 border border-gray-400 text-center">#</th>
              <th className="p-2 border border-gray-400 text-left">Food Name</th>
              <th className="p-2 border border-gray-400 text-right">Food Price</th>
              <th className="p-2 border border-gray-400 text-center">Quantity</th>
              <th className="p-2 border border-gray-400 text-left">Buying Date</th>
              <th className="p-2 border border-gray-400 text-left">Buyer Name</th>
              <th className="p-2 border border-gray-400 text-center">Remove Items</th>
            </tr>
          </thead>
          <tbody className="bg-slate-600 text-white">
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <OrderTable
                  key={order._id}
                  order={order}
                  index={index + 1}
                  onDelete={handleDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
