import PropTypes from "prop-types";
import dollarSign from "./assets/dollarsign.jpg";
import bookSign from "./assets/Frame.jpg";

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

function Course({ course, handleSelect }) {
  //   console.log(course);
  const { course_name, course_description, image, price, credit } = course;

  return (
    <div className="mx-auto">
      <div className="card mx-auto bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl w-full h-52" />
        </figure>
        <div className="card-body min-h-[350px]">
          <h2 className="card-title">{course_name}</h2>
          <p>{course_description}</p>
          <div className=" flex  text-gray-500 font-semibold ">
            <p className="flex items-center">
              <span className="mr-2">
                <img src={dollarSign} alt="" />
              </span>
              Price: {price}
            </p>

            <p className="flex items-center">
              <span className="mr-2">
                <img src={bookSign} alt="" />
              </span>
              Credit: {credit}hr
            </p>
          </div>

          <button
            onClick={() => handleSelect(course)}
            className="btn-sm mt-4 rounded bg-[#2F80ED] text-white font-semibold text-lg"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
