import Lottie from "lottie-react";
import React from "react";
import register_lottie from "../../assets/Lottie Animation/register.json";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../Shared/SocialLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must have at least 6 characters, including uppercase and lowercase letters.",
        toast: true,
        position: "top-end",
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL || null,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: "You have registered successfully! Please login now.",
              confirmButtonText: "OK",
            }).then(() => {
              navigate("/");
            });
          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          toast: true,
          position: "top-end",
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 pt-32 sm:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Lottie Animation Section - with responsive top margin */}
          <div className="w-full lg:w-1/2 flex flex-col items-center mt-24 lg:mt-0">
            <div className="w-full max-w-md mb-6">
              <Lottie animationData={register_lottie} className="w-full" loop={true} />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold text-amber-800 font-serif">
                Welcome to Bite & Bliss!
              </h2>
              <p className="text-amber-600 mt-2">
                Join our culinary community and explore a world of flavors!
              </p>
            </div>
          </div>

          {/* Registration Form Section */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200">
              <div className="bg-amber-700 py-4 px-6">
                <h1 className="text-3xl font-bold text-white text-center font-serif">
                  Create Your Account
                </h1>
              </div>
              <div className="p-6 sm:p-8">
                <form onSubmit={handleRegister}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-amber-800 font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-amber-800 font-medium mb-1">
                        Photo URL
                      </label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        name="photo"
                        placeholder="Enter Photo URL (optional)"
                      />
                    </div>
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
                        placeholder="Create Password"
                        name="password"
                        required
                      />
                      <p className="text-xs text-amber-600 mt-1">
                        Password must be at least 6 characters with uppercase and lowercase letters
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 rounded-lg font-bold hover:from-amber-700 hover:to-amber-900 transition-all duration-300 shadow-md"
                  >
                    Register Now
                  </button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-amber-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-amber-600">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <SocialLogin />

                  <div className="mt-4 text-center">
                    <p className="text-amber-700">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="font-bold text-amber-800 hover:underline"
                      >
                        Sign in
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

export default Register;
