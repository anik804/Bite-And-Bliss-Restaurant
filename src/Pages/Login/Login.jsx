import Lottie from "lottie-react";
import { use } from "react";
import login_lottie from "../../assets/Lottie Animation/login.json";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.email || "User"}!`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message || "Something went wrong during login.",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 pt-32 sm:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Lottie Animation Section with margin-top on small devices */}
          <div className="w-full lg:w-1/2 flex flex-col items-center mt-24 lg:mt-0 order-1 lg:order-none">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-4 md:mb-6">
              <Lottie animationData={login_lottie} className="w-full h-auto" loop={true} />
            </div>
            <div className="text-center mt-2 md:mt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 font-serif">
                Welcome Back to Bite & Bliss!
              </h2>
              <p className="text-amber-600 mt-1 md:mt-2 text-sm sm:text-base">
                Sign in to continue your culinary journey
              </p>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="w-full lg:w-1/2 max-w-md order-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200">
              <div className="bg-amber-700 py-3 md:py-4 px-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-white text-center font-serif">
                  Sign In to Your Account
                </h1>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleLogin}>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label className="block text-amber-800 font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        name="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-medium mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Enter Password"
                        name="password"
                        required
                      />
                      <div className="flex justify-end mt-1">
                        <a className="text-sm text-amber-600 hover:text-amber-800 hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 md:mt-6 bg-gradient-to-r from-amber-600 to-amber-800 text-white py-2 md:py-3 rounded-lg font-bold hover:from-amber-700 hover:to-amber-900 transition-all duration-300 shadow-md"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-4 md:mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-amber-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-amber-600">
                        Or
                      </span>
                    </div>
                  </div>

                  <SocialLogin from={from} />

                  <div className="mt-3 md:mt-4 text-center">
                    <p className="text-amber-700 text-sm md:text-base">
                      Don't have an account?{" "}
                      <a
                        href="/register"
                        className="font-bold text-amber-800 hover:underline"
                      >
                        Register now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
