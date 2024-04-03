import { FaGoogle, FaGithub } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import Qzone from "../Qzone/Qzone";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Login With</h2>
      <div className="mt-5">
        <button className="w-full btn btn-outline btn-success hover:text-white flex justify-center items-center">
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
