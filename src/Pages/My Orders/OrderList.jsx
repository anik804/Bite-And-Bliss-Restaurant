import React, { use } from "react";
import OrderTable from "./OrderTable";

const OrderList = ({ myOrderPromise }) => {
  const orders = use(myOrderPromise);

  return (
    <div>
      <h3>orders done : {orders.length}</h3>
      <div className="overflow-x-auto my-10 w-3/5 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
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
                order={order}
                index={index + 1}
                key={order._id}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
