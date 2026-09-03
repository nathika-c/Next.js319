//หน้าเว็บหลักของแต่ละวง
import { BANDS } from "@/data/bands";
import Link from "next/link";
import { Band } from "@/types/band";

export default function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>Favorite Bands</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
        {BANDS.map((band: Band) => (
          <Link //เมื่อผู้ใช้กดปุ่มจะแสดงหน้าเว็บของแต่ละวง
            key={band.id} 
            href={`/bands/${band.id}`} 
            style={{
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <h2>{band.name}</h2>
            <p>แนวเพลง: {band.genre}</p>
            <span style={{ color: "#00b78dff", fontSize: "14px" }}>เพิ่มเติม →</span> 
          </Link>
        ))}
      </div>
    </main>
  );
}