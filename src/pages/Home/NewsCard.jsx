import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, author, total_view, thumbnail_url, image_url, details } =
    aNews;
  console.log(aNews);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex justify-between">
        <div className="flex justify-center gap-2">
          <img
            className="w-[41px] h-[41px] rounded-full"
            src={author.img}
            alt=""
          />
          <div className="flex flex-col">
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322V3.322Z"
                stroke="#706F6F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.21701 10.907C6.97487 10.4713 6.59491 10.1283 6.13678 9.93196C5.67864 9.73558 5.16826 9.69689 4.68576 9.82196C4.20325 9.94703 3.77594 10.2288 3.47089 10.623C3.16584 11.0172 3.00032 11.5015 3.00032 12C3.00032 12.4984 3.16584 12.9828 3.47089 13.377C3.77594 13.7712 4.20325 14.0529 4.68576 14.178C5.16826 14.3031 5.67864 14.2644 6.13678 14.068C6.59491 13.8716 6.97487 13.5287 7.21701 13.093M7.21701 10.907C7.39701 11.231 7.50001 11.603 7.50001 12C7.50001 12.397 7.39701 12.77 7.21701 13.093M7.21701 10.907L16.783 5.59298M7.21701 13.093L16.783 18.407M16.783 18.407C16.6395 18.6654 16.5482 18.9495 16.5145 19.2431C16.4808 19.5367 16.5052 19.8341 16.5864 20.1183C16.6676 20.4025 16.804 20.668 16.9878 20.8994C17.1716 21.1309 17.3991 21.3239 17.6575 21.4675C17.9159 21.611 18.2 21.7023 18.4936 21.736C18.7873 21.7697 19.0847 21.7453 19.3689 21.6641C19.6531 21.5829 19.9185 21.4465 20.15 21.2627C20.3815 21.0789 20.5745 20.8514 20.718 20.593C21.0079 20.0712 21.0786 19.4556 20.9146 18.8816C20.7506 18.3077 20.3653 17.8224 19.8435 17.5325C19.3217 17.2426 18.7061 17.1719 18.1321 17.3359C17.5582 17.4999 17.0729 17.8852 16.783 18.407V18.407ZM16.783 5.59298C16.9233 5.85712 17.1148 6.09064 17.3463 6.27991C17.5779 6.46917 17.8449 6.61037 18.1316 6.69525C18.4184 6.78014 18.7192 6.807 19.0165 6.77427C19.3137 6.74154 19.6015 6.64988 19.8629 6.50464C20.1244 6.3594 20.3542 6.1635 20.539 5.92839C20.7239 5.69328 20.86 5.42369 20.9394 5.13536C21.0189 4.84704 21.04 4.54577 21.0016 4.24917C20.9633 3.95258 20.8662 3.66661 20.716 3.40798C20.4201 2.89832 19.936 2.52511 19.3678 2.36859C18.7996 2.21207 18.1927 2.28472 17.6775 2.57093C17.1624 2.85714 16.78 3.33406 16.6128 3.89917C16.4455 4.46428 16.5066 5.07246 16.783 5.59298V5.59298Z"
                stroke="#706F6F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <h2 className="card-title mt-2 mb-4">{title}</h2>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        
        <p>{details.length > 200}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
