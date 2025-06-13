import React, { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Foods from "./Foods";
import { foodCreatedByPromise } from "../../Api/FoodsApi";

const MyFood = () => {
  const { user } = UseAuth();

  return (
    <div>
      <Suspense>
        <Foods foodCreatedByPromise={foodCreatedByPromise(user.email)}></Foods>
      </Suspense>
    </div>
  );
};

export default MyFood;
