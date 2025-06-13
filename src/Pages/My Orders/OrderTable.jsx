import React from "react";

const OrderTable = ({ order,index }) => {
  const { foodName, foodPrice, quantity, buyingDate, buyerName } = order;
  return (
    <tr className="bg-base-200">
      <th>
        <label>
          {index}
        </label>
      </th>
      <td>{foodName}</td>
      <td>{foodPrice} BDT</td>
      <td>{quantity}</td>
      <td>{buyingDate}</td>
      <td>{buyerName}</td>
      <td className="px-2o"><button className="btn btn-outline btn-error my-2 text-xs">Cancel Order</button></td>
      

    </tr>
  );
};

export default OrderTable;
