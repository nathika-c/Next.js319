// component ใช้แสดงข้อมูลวง แบบการ์ด
import Image from "next/image";
import { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card"> 
      {band.imageUrl && (
        <div className="image-wrapper">  //แสดงรูปภาพ
          <Image
            src={band.imageUrl}
            alt={band.name}
            width={300}
            height={200}
          />
        </div>
      )}
      <h2>{band.name}</h2> //แสดงชื่อวง
      <p><strong>แนวเพลง:</strong> {band.genre}</p>  //แสดงแนวเพลง

      <div className="members-section">  
        <h3>สมาชิก:</h3>
        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              {member.name} ({member.role})//แสดงชื่อสมาชิก+ตำแหน่ง
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}