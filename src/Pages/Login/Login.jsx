import Lottie from "lottie-react";
import login_lottie from "../../assets/Lottie Animation/login.json";

const Login = () => {
  return (
    <div className="hero bg-amber-600 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={login_lottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">
              Let’s get you signed in...!
            </h1>
            <form>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
