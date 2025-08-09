import axios from "axios";
import { use, useState } from "react";
import Swal from "sweetalert2";
import OrderTable from "./OrderTable";

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
      const res = await axios.delete(`https://bite-and-bliss-server-side.vercel.app/purchase/${id}`);

      if (res.data.deletedCount > 0) {
        setOrders(prev => prev.filter(order => order._id !== id));

        await axios.patch(`https://bite-and-bliss-server-side.vercel.app/foods/${orderToDelete.foodId}/restore`, {
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
      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4 px-4 py-6">
        {orders.length === 0 ? (
          <div className="text-center py-8 text-white">
            <p className="text-lg">No orders found.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div key={order._id} className="bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={order.foodPhoto || "/default-food.png"}
                  alt={order.foodName}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{order.foodName}</h3>
                  <p className="text-sm text-gray-600">{order.buyerName}</p>
                  <p className="text-lg font-bold text-green-600">{order.foodPrice} BDT</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <span className="font-semibold">Quantity:</span> {order.quantity}
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {new Date(order.buyingDate).toLocaleDateString()}
                </div>
              </div>
              
              <button
                onClick={() => handleDelete(order._id)}
                className="btn btn-sm btn-error w-full"
              >
                Cancel Order
              </button>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden lg:block overflow-x-auto my-10 mx-auto max-w-full px-4">
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