import PropTypes from "prop-types";

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

function Course({ course }) {
  console.log(course);

  return (
    <div className="mx-auto">
      <div className="card mx-auto bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
