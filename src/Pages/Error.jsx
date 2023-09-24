import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-36">
      <div>
        <h1 className="text-5xl my-5">Oppppsss</h1>
      </div>
      <div>
        <Link to={"/"}>
          <button className="btn btn-error text-white font-bold">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
