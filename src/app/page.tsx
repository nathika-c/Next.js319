export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const description: string = "ศูนย์รวมคอร์สเรียนออนไลน์ด้านเว็บเทคโนโลยีเพื่อการเรียนรู้และพัฒนาทักษะของนักศึกษา";
  const courseCount: number = 5;
  const isOpen: boolean = true;

  const topics: string[] = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Next.js",
    "Tailwind CSS",
  ];

  return (
    <main className="page">
      <h1>{siteName}</h1>
      <p>{description}</p>
      <p>จำนวนรายวิชาในระบบ: {courseCount} วิชา</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>

      <section>
        <h2>หัวข้อที่เปิดสอนในคอร์ส</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>กลุ่มผู้ใช้งานที่เหมาะสม</h2>
        <p>เว็บไซต์นี้ออกแบบและพัฒนาขึ้นมาเพื่อเหมาะสำหรับกลุ่มผู้ใช้งานดังต่อไปนี้:</p>
        <ul>
          <li>นักศึกษาที่ต้องการศึกษาและฝึกฝนการพัฒนาเว็บแอปพลิเคชันด้วย Next.js และ TypeScript</li>
          <li>ผู้ที่ต้องการเริ่มต้นเรียนรู้โครงสร้างโปรเจกต์สมัยใหม่ (App Router, Tailwind CSS)</li>
          <li>ผู้ที่สนใจพัฒนาทักษะการเขียนโปรแกรมฝั่ง Frontend และ Full-stack</li>
        </ul>
      </section>
    </main>
  );
}


