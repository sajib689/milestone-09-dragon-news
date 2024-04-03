import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {handlerRegister} = useContext(AuthContext)

  
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        handlerRegister(email, password)
        .then( result => {
          const user = result.user 
          if(user) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Registration Success!",
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
        <div className="hero min-h-screen bg-base-200 ">
          <div className="">
            <div className="card mt-3 lg:p-10 md:p-10 shrink-0  shadow-2xl bg-base-100">
              <h1 className="text-center mb-3 mt-3 text-[#403F3F] text-4xl font-bold">
                Register your account
              </h1>
              <hr />
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                  name="name"
                    type="text"
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
                  name="photoUrl"
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
                <label className="label cursor-pointer flex justify-start">
                  <input type="checkbox"  className="checkbox" />
                  <Link className="label-text ms-1">Accept Term & Conditions</Link>
                </label>
                <div className="form-control mt-6">
                  <button className="btn hover:bg-black bg-[#403F3F] text-white">
                    Register
                  </button>
                </div>

                <Link
                  to="/login"
                  className="text-sm text-center label-text-alt link link-hover "
                >
                  Already Have An Account ?{" "}
                  <span className="text-orange-400">Login</span>
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
