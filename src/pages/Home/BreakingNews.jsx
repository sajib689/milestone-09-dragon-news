
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] rounded-lg mt-7 mb-[50px] flex justify-center items-center">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;