const user = {};

// เพิ่ม property ชื่อ name และ surname
user.name = "John";
user.surname = "Doe";

console.log("ข้อมูล user หลังเพิ่ม properties:", user);

// Update property name ให้เป็น "Matt"
user.name = "Matt";

console.log("ข้อมูล user หลังการอัปเดต properties:", user);

// ลบ property name
delete user.name;

console.log("ข้อมูล user หลังการลบ properties:", user);
