import { Link, useNavigate } from 'react-router-dom';
import userImg from '../../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';
const Navbar = () => {
  const {user,handleSignOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const logOut = () => {
    handleSignOut()
    .then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Log Out Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch(err => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  const links = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <a>About</a>
      </li>
      <li>
        <a>Career</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
        {
          user ? 
          <img className='w-[41px] h-[41px]' src={user?.photoURL} alt="" />
        :
        <img className='w-[41px] h-[41px]' src={userImg} alt="" />
        }{
          user ?
          <Link onClick={logOut} className='btn bg-[#403F3F] text-white ms-2 hover:bg-[#403F3F]'>Sign Out</Link>
          :
          <Link to='/login' className='btn bg-[#403F3F] text-white ms-2 hover:bg-[#403F3F]'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
