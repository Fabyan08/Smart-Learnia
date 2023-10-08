import Aside from "../components/Fragments/Aside";
import Chat from "../components/Fragments/Chat/Index";
import Header from "../components/Fragments/Header";
const Home = () => {
  return (
    <>
      <div className="h-screen w-full text-black bg-white relative flex overflow-hidden">
        <Aside></Aside>
        <div className="w-full h-full flex-col justify-between">
          <Header></Header>
          <Chat />
          {/* <Main></Main> */}
        </div>
      </div>
    </>
  );
};

export default Home;
