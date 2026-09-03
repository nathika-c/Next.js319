export type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
  description?: string;
};

type CourseCardProps = {
  course: Course;
  description?: string;
};

export default function CourseCard({ course, description }: CourseCardProps) {
  return (
    <>
      <article key={course.id}
        className="border p-4 rounded-lg shadow-md ">
        <h2>{course.title}</h2>
        <p>รหัสวิชา: {course.code}</p>
        <p>{course.credits} หน่วยกิต</p>
        <p className={course.isOpen ? "font-bold text-green-500" : "font-bold text-red-500"}>
          {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </p>
        <p>{course.description}</p>
      </article>
    </>
  );
}