type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

// สมาชิกทุกตัวใน Array สอดคล้องตามชนิด Course[]
const courses: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database System",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301233",
    title: "Data Structures and Algorithms",
    credits: 3,
    isOpen: true,
  },
  {
    id: 4,
    code: "10301234",
    title: "Object-Oriented Programming",
    credits: 3,
    isOpen: true,
  },
  {
    id: 5,
    code: "10301235",
    title: "Software Engineering",
    credits: 3,
    isOpen: false,
  },
];

export default function CoursesPage() {
  return (
    <main className="page">
      <h1>รายวิชาทั้งหมด</h1>

      <section className="courseGrid">
        {/* วนลูปสร้าง Element จาก Array ของ Object ด้วย map() */}
        {courses.map((course) => (
          <article key={course.id} className="courseCard">
            <h2>{course.id}. {course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
