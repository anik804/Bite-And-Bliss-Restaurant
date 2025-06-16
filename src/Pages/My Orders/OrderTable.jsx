const OrderTable = ({ order, index, onDelete }) => {
  const { _id, foodName, foodPrice, quantity, buyingDate, buyerName } = order;

  return (
    <tr className="bg-slate-600">
      <th>{index}</th>
      <td>{foodName}</td>
      <td>{foodPrice} BDT</td>
      <td>{quantity}</td>
      <td>{buyingDate}</td>
      <td>{buyerName}</td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          className="btn btn-outline btn-error my-2 text-xs"
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;