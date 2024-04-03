import { CiFacebook } from "react-icons/ci";
import { FaTwitter,FaInstagram  } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold">Find Us On</h2>
            <div className="mt-2 rounded-lg border">
                <div className="flex border p-2 items-center text-base gap-2">
                <CiFacebook className="text-xl" /> <p>Facebook</p>
                </div>
              
                <div className="flex border p-2 items-center text-base gap-2">
                <FaTwitter className="text-xl" /> <p>Twitter</p>
                </div>
            
                <div className="flex border p-2 items-center text-base gap-2">
                <FaInstagram  className="text-xl" /> <p>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;