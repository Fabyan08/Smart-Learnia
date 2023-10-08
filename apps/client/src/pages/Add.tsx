import Aside from "../components/Fragments/Aside";
import Add from "../components/Fragments/Information/Add";
import Header from "../components/Fragments/Header";
const Home = () => {
  return (
    <>
      <div className="h-screen w-full text-black bg-white relative flex overflow-hidden">
        <Aside></Aside>
        <div className="w-full h-full flex-col justify-between">
          <Header></Header>
          <Add />
          {/* <Main></Main> */}
        </div>
      </div>
    </>
  );
};

export default Home;
