import "./App.css";
import Header from "./Header";
import Courses from "./Courses";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <>
      <div className=" px-10 mx-auto">
        <Header></Header>
        <div className="md:flex gap-4 items-start justify-between">
          <Courses handleSelect={handleSelect}></Courses>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
