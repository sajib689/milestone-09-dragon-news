import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold">All Caterogy</h2>
      <div className="flex flex-col">
        {categories.map((category) => (
          <Link
          to={`category/${category.id}`}
            className="text-[#9F9F9F] mt-3 hover:text-green-500 hover:underline"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
