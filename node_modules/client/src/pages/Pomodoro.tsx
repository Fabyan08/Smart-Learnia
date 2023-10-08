import Aside from "../components/Fragments/Aside";
import Header from "../components/Fragments/Header";
import Pomodoro from "../components/Fragments/Pomodoro/Index";
import "../components/Fragments/Pomodoro/pomodoro.css";
import "../components/Fragments/Pomodoro/main.js";

const Home = () => {
  return (
    <>
      <div className="h-screen text-black w-full bg-white relative flex overflow-hidden">
        <Aside></Aside>
        <div className="w-full h-full flex-col justify-between">
          <Header></Header>
          <Pomodoro />
          {/* <Main></Main> */}
        </div>
      </div>
    </>
  );
};

export default Home;
