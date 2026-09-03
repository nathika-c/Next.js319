import CourseCard from "../../components/CourseCard"; 
import Link from "next/link";
import { courses } from "@/data/coursesdata";

export default function CoursesPage() {
  return (
    <>
      <div className="courseList">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h1>รายวิชาทั้งหมด</h1>
        </div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
