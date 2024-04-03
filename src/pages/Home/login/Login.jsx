import { Link } from "react-router-dom";
import Navbar from "../../../shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
    const handleLoginn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value 
        const password = form.password.value
        handleLogin(email, password)
        .then( result => {
          const user = result.user 
          if(user) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Login Success!",
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
          }
          
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        })
       
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
              <form onSubmit={handleLoginn} className="card-body">
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
