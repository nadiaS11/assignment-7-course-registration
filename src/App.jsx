import "./App.css";
import Header from "./Header";
import Courses from "./Courses";
import Cart from "./Cart";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [prices, setPrices] = useState(0);
  //button handler
  const handleSelect = (course) => {
    console.log(course);
    let newCredit = 0;
    const ifExists = cart.find((c) => c.id === course.id);
    if (!ifExists) {
      cart.forEach((item) => (newCredit += item.credit));
      if (newCredit <= 20) {
        newCredit += course.credit;

        const newRemainingCredit = 20 - newCredit;
        const newPrice = course.price;
        if (newRemainingCredit >= 0) {
          setTotalCredit(newCredit);
          setRemaining(newRemainingCredit);
          setPrices(prices + newPrice);
          setCart([...cart, course]);
        } else {
          toast("You don't have enough credit.");
        }
      }
      // else {
      //   alert("You cannot register for more than 20 credit");
      // }
    } else {
      toast("You have already added this course.");
    }
  };
  //
  return (
    <>
      <div className=" px-10 mx-auto">
        <ToastContainer limit={1} />
        <Header></Header>
        <div className="md:flex gap-4 items-start justify-between">
          <Courses handleSelect={handleSelect}></Courses>
          <Cart
            cart={cart}
            totalCredit={totalCredit}
            remaining={remaining}
            prices={prices}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
