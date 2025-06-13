import React, { Suspense } from 'react';
import OrderList from './OrderList';
import UseAuth from '../../Hooks/UseAuth';
import { myOrderPromise } from '../../Api/OrdersApi';



const MyOrders = () => {

  // const myOrderPromise = fetch(``)
  const {user} = UseAuth();


  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <OrderList myOrderPromise={myOrderPromise(user.email)}></OrderList>
      </Suspense>
    </div>
  );
};

export default MyOrders;