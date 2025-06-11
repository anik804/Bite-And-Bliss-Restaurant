import Lottie from "lottie-react";
import { use } from "react";
import login_lottie from "../../assets/Lottie Animation/login.json";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {

  const {signInUser} = use(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password)


    // login user
    signInUser(email,password)
    .then(result =>
      {
        const user = result.user;
        console.log(user);
        })
        .catch(err =>
          {
            console.error(err);
            })
    
  }
  
  return (
    <div className="hero bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-500 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={login_lottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">
              Let’s get you signed in...!
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email" />
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
