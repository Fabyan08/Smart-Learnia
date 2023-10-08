const Add = () => {
  return (
    <>
      <div>
        <div className="text-center text-black font-mono text-2xl font-bold">
          Add Info
        </div>
        <div className="m-2">
          <form action="" className="text-black ">
            <div className="flex flex-row w-full">
              <div className="space-x-2 w-1/2">
                <label htmlFor="nama">Judul</label>
                <input
                  className="w-[90%] border border-blue-400 rounded-lg h-10"
                  type="text"
                />
              </div>
              <div className="space-x-5 w-1/2">
                <label htmlFor="nama">Tanggal</label>
                <input
                  className=" border border-blue-400 rounded-lg h-10"
                  type="date"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Bacaan</label>
              <textarea className="w-full border border-blue-400 rounded-lg h-60"></textarea>
            </div>
            <button className="bg-blue-400 text-white p-2 rounded-lg shadow-xl">
              Tambahkan
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
