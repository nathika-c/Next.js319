// ข้อมูลวงดนตรี 
import { Band } from "@/types/band";
export const BANDS: Band[] = [
  {
    id: 1,
    name: "LITTLE JOHN",
    genre: "Indie Rock / Alternative",
    imageUrl: "/image/little-john.jpg",
    members: [
      { id: 101, name: "โอ๊ค", role: "Vocal" },
      { id: 102, name: "ปอนด์", role: "Guitar" },
      { id: 103, name: "แฟ้ม", role: "Guitar" },
      { id: 104, name: "มิว", role: "Bass" },
      { id: 105, name: "มีน", role: "Drums" }
    ]
  },
  {
    id: 2,
    name: "PURPEECH",
    genre: "Indie Pop",
    imageUrl: "/image/purpeech.jpg",
    members: [
      { id: 201, name: "เรโอส", role: "Vocal" },
      { id: 202, name: "ยีนส์", role: "Guitar" },
      { id: 203, name: "เซนต์", role: "Bass" },
      { id: 204, name: "คอมม่อน", role: "Drums" },
      { id: 205, name: "สไปร์ท", role: "Keyboard" }
    ]
  },
  {
    id: 3,
    name: "CARABAO",
    genre: "Songs for Life / Rock",
    imageUrl: "/image/carabao.jpg",
    members: [
      { id: 301, name: "ยืนยง โอภากุล (แอ๊ด)", role: "Vocal / Guitar" },
      { id: 302, name: "ปรีชา ชนะภัย (เล็ก)", role: "Guitar / Vocal" },
      { id: 303, name: "เทียรี่ เมฆวัฒนา (เทียรี่)", role: "Guitar / Vocal" },
      { id: 304, name: "เกริกกำพล ประสิทธิ์เมฆ (อ๊อด)", role: "Bass" },
      { id: 305, name: "ลือชัย งามสม (ดุก)", role: "Keyboard" },
      { id: 306, name: "ขอนแก่น เวชรังษี (หมี)", role: "Guitar" },
      { id: 307, name: "อภิชาติ พรมรักษา (อ้วน)", role: "Percussion" },
      { id: 308, name: "ศิริพงษ์ หรเวชกุล (โก้)", role: "Drums" }
    ]
  }
];