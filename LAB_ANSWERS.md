# เฉลยและสรุปเนื้อหาใบงานปฏิบัติการ Next.js และ TypeScript พื้นฐาน
**ชื่อผู้จัดทำ:** นางสาวณฐิกา จันทร์เสถียร รหัส 6804101319

---

## 1.1 ตรวจสอบ Node.js และ npm
- คำสั่ง: `node --version` และ `npm --version`

## 1.2 ตัวเลือกในการสร้างโปรเจกต์ (npx create-next-app@latest next-course-hub)
- **TypeScript:** `Yes` (ตรวจจับ Type ช่วยลดบั๊ก)
- **ESLint:** `Yes` (ตรวจสอบรูปแบบและคุณภาพโค้ด)
- **Tailwind CSS:** `Yes` (แต่งสไตล์ UI ด้วย Utility CSS)
- **src directory:** `Yes` (แยกซอร์สโค้ดไว้ในโฟลเดอร์ src/)
- **App Router:** `Yes` (สถาปัตยกรรม Routing ใหม่ของ Next.js)
- **Import alias:** `Yes` (`@/*` กำหนด Alias สำหรับอ้างอิงไฟล์)

---

## 2.1 ไฟล์สำคัญในช่วงเริ่มต้น
- `src/app/page.tsx`: หน้าแรกของเว็บไซต์ (Home Page)
- `src/app/layout.tsx`: โครงสร้างหลัก (Root Layout) ครอบทุกหน้าเพจ
- `src/app/globals.css`: ไฟล์จัดการสไตล์ CSS หลักสำหรับทั้งเว็บไซต์
- `package.json`: ข้อมูลโปรเจกต์ และ Dependencies
- `tsconfig.json`: ไฟล์ตั้งค่าคอนฟิกสำหรับ TypeScript

## 2.2 โครงสร้างพื้นฐานของไฟล์ .tsx
- `export default`: ส่งออก Component เป็นค่าเริ่มต้นให้ Next.js ดึงไปใช้งาน
- `function HomePage()`: ประกาศฟังก์ชัน Component สำหรับสร้างส่วนแสดงผล
- `const siteName`: ตัวแปรเก็บค่าข้อความชื่อเว็บไซต์
- `return (...)`: คำสั่งคืนค่าโครงสร้าง JSX ที่ต้องการแสดงบนเบราว์เซอร์
- `{siteName}`: ไวยากรณ์ใน JSX สำหรับนำค่าตัวแปรมาแสดงผล

---

## 3.1 ชนิดข้อมูลพื้นฐาน
- `string`: ข้อความ (เช่น `"Web Technology"`)
- `number`: ตัวเลข (เช่น `3`)
- `boolean`: จริงหรือเท็จ (เช่น `true` หรือ `false`)
- `string[]`: Array ของข้อความ (เช่น `["HTML", "CSS"]`)

## 3.3 ตรวจสอบความถูกต้องของ Object
1. **เปลี่ยน `id` จาก `1` เป็น `"1"`:**
   - Error: `error TS2322: Type 'string' is not assignable to type 'number'.`
2. **เปลี่ยน `credits` จาก `3` เป็น `"สาม"`:**
   - Error: `error TS2322: Type 'string' is not assignable to type 'number'.`
3. **ลบ Property `isOpen` ออกจาก Object:**
   - Error: `error TS2741: Property 'isOpen' is missing in type ...`
4. **เรียก `course.name` ที่ไม่มีใน `type Course`:**
   - Error: `error TS2339: Property 'name' does not exist on type 'Course'.`

**สรุปว่า `type Course` ช่วยตรวจสอบ:**
1. ตรวจสอบชนิดข้อมูล (Data Type Checking)
2. ตรวจสอบความครบถ้วนของ Property (Required Property Checking)
3. ป้องกันการเข้าถึง Property ที่ไม่มีจริง (Prevent Invalid Property Access)

---

## 4. คำถามวิเคราะห์ Routing
1. **สิ่งใดเป็นตัวกำหนด URL `/courses`:** ชื่อโฟลเดอร์ `courses` ภายใน `src/app/`
2. **ชื่อฟังก์ชัน `CoursesPage` มีผลต่อ URL หรือไม่:** ไม่มีผล มีไว้สื่อความหมายในโค้ดเท่านั้น
3. **หากมีโฟลเดอร์ `courses` แต่ไม่มี `page.tsx`:** เกิดข้อผิดพลาด 404 Not Found
4. **เพราะเหตุใดทุก Route จึงควรเปิดได้เมื่อพิมพ์ URL โดยตรง:** เพื่อรองรับ Direct Navigation, Deep Linking, การแชร์ URL และส่งผลดีต่อ SEO

---

## 5.2 & 5.3 Navbar & CSS Starter
- `import Navbar from "@/components/Navbar";`
- แท็กใน layout.tsx: `<header className="siteHeader"><Navbar /></header>`

---

## 6.1 ผลการทดสอบก่อนส่ง
- `npx tsc --noEmit`: **ผ่าน (Exit Code: 0)**
- `npm run build`: **ผ่าน (Compiled successfully)**

## 6.2 บันทึกปัญหาและการแก้ไข
| ปัญหา/Error ที่พบ | สาเหตุที่ตรวจพบ | วิธีแก้และผลหลังแก้ |
| :--- | :--- | :--- |
| `error TS2322: Type 'string' is not assignable to type 'number'.` | ใส่ข้อมูลผิดชนิดใน Object (เช่น `id: "1"`) | แก้เป็นชนิดตัวเลข `number` (`id: 1`) ผลคือผ่านการตรวจ Type |
| `error TS2741: Property 'isOpen' is missing ...` | ข้อมูล Object มี Property ไม่ครบตาม `type Course` | เติม `isOpen: true` ให้ครบ ผลคือโครงสร้างข้อมูลสมบูรณ์ |
| `error TS2339: Property 'name' does not exist on type 'Course'.` | อ้างอิง Property ที่ไม่มีจริงใน JSX | เปลี่ยนเป็น `{course.title}` ผลคือแสดงชื่อวิชาได้ถูกต้อง |
