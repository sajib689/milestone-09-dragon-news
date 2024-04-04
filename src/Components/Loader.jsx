import {
  CircularLoading,
  SpinLoading,
} from "respinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinners ">
        <SpinLoading fill="#777" borderRadius={4} count={12} />
        <CircularLoading />
      </div>
    </div>
  );
};

export default Loader;
