import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import LeftSideNav from './../../shared/LeftSideNav/LeftSideNav';
import BreakingNews from "./BreakingNews";



const Home = () => {
    return (
        <div>
           <Header/>
           <BreakingNews/>
           <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideNav/>
                </div>
                <div className="col-span-2">
                    <h1>News Comming soon!</h1>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;