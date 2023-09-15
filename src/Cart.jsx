import PropTypes from "prop-types";
Cart.propTypes = {
  cart: PropTypes.array,
};

function Cart({ cart, totalCredit, remaining, prices }) {
  console.log(cart);
  return (
    <div className="py-5 mx-auto md:w-full lg:w-2/5">
      <div className="card  bg-base-100 shadow-xl px-5 space-y-5 py-5">
        <h2 className=" pt-3 text-lg text-[#2F80ED]  font-semibold">
          Credit Hour Remaining: {remaining} hr
        </h2>
        <hr className="border border-solid border-gray-400 my-4" />

        <div className="min-h-16">
          <h2 className="card-title">Course Names</h2>
          <ol className=" list-decimal pl-5 font-medium py-2">
            {cart.map((item, idx) => (
              <li key={idx}>{item.course_name}</li>
            ))}
          </ol>
        </div>
        <hr className="border border-solid border-gray-400 my-4" />
        <p className="text-lg font-medium">Total Credit Hour: {totalCredit}</p>
        <hr className="border border-solid border-gray-400 my-4" />
        <p className="text-lg font-semibold">Total Price: {prices} USD</p>
      </div>
    </div>
  );
}

export default Cart;
