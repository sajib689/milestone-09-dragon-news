import { FaGoogle, FaGithub } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import Qzone from "../Qzone/Qzone";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const { handleGoogleLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  const google = () => {
      handleGoogleLogin()
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
          }
          navigate('/')
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
    <div>
      <h2 className="text-2xl font-bold">Login With</h2>
      <div className="mt-5">
        <button onClick={google} className="w-full btn btn-outline btn-success hover:text-white flex justify-center items-center">
          <FaGoogle /> Login With Google
        </button>
        <button className="w-full btn btn-outline mt-2 flex justify-center items-center">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
      <SocialLogin/>
      <Qzone/>
    </div>
  );
};

export default RightSideNav;
