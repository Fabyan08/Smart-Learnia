import Aside from "../components/Fragments/Aside";
import Header from "../components/Fragments/Header";
import Welcome from "../components/Fragments/Home/Index";
// import Main from "../components/Fragments/Main";
const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <Aside></Aside>
        <div className="w-full h-full flex-col justify-between">
          <Header></Header>
          <Welcome />
          {/* <Main></Main> */}
        </div>
      </div>
    </>
  );
};

export default Home;
