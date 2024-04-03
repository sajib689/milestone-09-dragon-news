import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const Register = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="">
            <div className="card mt-3 lg:p-10 md:p-10 shrink-0  shadow-2xl bg-base-100">
              <h1 className="text-center mb-3 mt-3 text-[#403F3F] text-4xl font-bold">
                Register your account
              </h1>
              <hr />
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="label cursor-pointer flex justify-start">
                  <input type="checkbox"  className="checkbox" />
                  <Link className="label-text ms-1">Accept Term & Conditions</Link>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] text-white">
                    Register
                  </button>
                </div>

                <Link
                  to="/login"
                  className="text-sm text-center label-text-alt link link-hover"
                >
                  Already Have An Account ?{" "}
                  <span className="text-orange-400">Register</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
