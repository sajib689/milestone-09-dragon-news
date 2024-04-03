import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../../shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2">
          {
            news.map( aNews => <NewsCard aNews={aNews} key={aNews._id}></NewsCard>)
          }
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
