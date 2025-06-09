import Lottie from "lottie-react";
import React from "react";
import register_lottie from "../../assets/Lottie Animation/register.json";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Register = () => {

  const {createUser} = use(AuthContext)

  const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);

    createUser(email,password)
    .then(result =>{
      console.log("login success",result.user)
    })
    .catch(error =>{
      console.log(error)
      })
  }

  return (
    <div className="hero bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={register_lottie}
            style={{ width: "600px" }}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">
              Join Our Foodie Family...!
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
