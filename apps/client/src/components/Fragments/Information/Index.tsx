import { Link } from "react-router-dom";
const Information = () => {
  return (
    <>
      <div>
          <div className="flex-none p-2">
            <Link to="add" className="bg-orange-300 px-2 font-bold text-center align-middle rounded-lg text-white text-xl font-sans">
              + TAMBAH
            </Link>
          </div>
        <div className="md:flex justify-center items-center md:justify-start md:items-start space-y-4 md:space-y-0 md:space-x-4 p-2">
          <div className="bg-slate-100 w-60 p-10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80"
              className="w-40 rounded-lg"
              alt=""
            />
            <div className="mt-4 flex">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  className="rounded-full w-5"
                  alt=""
                />
              </div>
              <div className=" ml-2 ">
                <h1 className="text-md">Alexander Robert</h1>
                <h3 className="text-sm text-slate-400">siswa</h3>
              </div>
            </div>
            <h1 className="mt-4 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing ....
            </h1>
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 w-full text-white p-2 rounded-lg mt-4">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-slate-100 w-60 p-10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80"
              className="w-40 rounded-lg"
              alt=""
            />
            <div className="mt-4 flex">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  className="rounded-full w-5"
                  alt=""
                />
              </div>
              <div className=" ml-2 ">
                <h1 className="text-md">Alexander Robert</h1>
                <h3 className="text-sm text-slate-400">siswa</h3>
              </div>
            </div>
            <h1 className="mt-4 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing ....
            </h1>
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 w-full text-white p-2 rounded-lg mt-4">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Information;
