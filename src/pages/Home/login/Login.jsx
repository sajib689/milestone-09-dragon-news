import { Link } from "react-router-dom";
import Navbar from "../../../shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value 
        const password = form.password.value

    }
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <>
        <div className="hero min-h-screen bg-base-200">
          <div className="">
            <div className="card lg:p-10 md:p-10 shrink-0  shadow-2xl bg-base-100">
              <h1 className="text-center mb-3 mt-3 text-[#403F3F] text-4xl font-bold">
                Login your account
              </h1>
              <hr />
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                  name="email"
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
                  name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] text-white">Login</button>
                </div>
                
                    <Link to='/register' className="text-sm text-center label-text-alt link link-hover">
                    Dont’t Have An Account ? <span className="text-orange-400">Register</span>
                    </Link>
                  
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
