import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "./Course";

Courses.propTypes = {
  handleSelect: PropTypes.func,
};

function Courses({ handleSelect }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mx-auto w-1/2 lg:w-3/4">
      <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3 px-2 py-5">
        {courses.map((course) => (
          <Course
            key={course.id}
            handleSelect={handleSelect}
            course={course}
          ></Course>
        ))}
      </div>
    </div>
  );
}

export default Courses;
