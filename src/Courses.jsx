import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "./Course";

Courses.propTypes = {};

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 px-2">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
}

export default Courses;
