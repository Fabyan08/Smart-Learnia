import { useEffect, useState } from "react";

import Home from "./pages/Home";
function App() {
  const [welcome, setWelcome] = useState("");

  // Fetch data api nest JS
  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setWelcome);
  }, []);

  return (
    <>
    
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <Home></Home>
      </div>
      <h1>{welcome}</h1>
    </>
  );
}

export default App;
