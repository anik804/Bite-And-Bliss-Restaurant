import React, { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Foods from "./Foods";
import { foodCreatedByPromise } from "../../Api/FoodsApi";

const MyFood = () => {
  const { user } = UseAuth();

  return (
    <div>
      
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <Foods foodCreatedByPromise={foodCreatedByPromise(user.email)} userEmail={user.email}></Foods>
      </Suspense>
    </div>
  );
};

export default MyFood;
