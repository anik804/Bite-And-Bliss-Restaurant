import React, { Suspense } from 'react';
import OrderList from './OrderList';
import UseAuth from '../../Hooks/UseAuth';
import { myOrderPromise } from '../../Api/OrdersApi';
import { motion } from 'framer-motion';
import bgImage from '../../assets/bg.jpg';  // Import the image

const MyOrders = () => {
  const { user } = UseAuth();

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',   // ensure full viewport height
        padding: '2rem',
      }}
      className="text-white" // adjust text color if needed for visibility
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        animate={{
          color: [
            "#f87171", // red-400
            "#fbbf24", // yellow-400
            "#34d399", // green-400
            "#60a5fa", // blue-400
            "#c084fc", // purple-400
            "#f87171", // back to red
          ],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        My Orders
      </motion.h1>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <OrderList myOrderPromise={myOrderPromise(user.email)}></OrderList>
      </Suspense>
    </div>
  );
};

export default MyOrders;
