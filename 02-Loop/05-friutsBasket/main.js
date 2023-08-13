const TERMINATE = 'stop';
const fruits = {};

let key;
let value;

do {
    key = prompt('Enter fruit');

    // ตรวจสอบว่าผู้ใช้ป้อนค่าที่ไม่ใช่ 'stop' ก่อนที่จะดำเนินการต่อ
    if (key !== TERMINATE) {
        value = +prompt('Enter Quantity');

        if (value === 1) {
            fruits[key] = value;
        } else if (value > 1) {
            // ใช้เครื่องหมาย + เพื่อแปลง key เป็น string
            fruits[`${key}s`] = value;
        }

        console.log(key, value);
    }
} while (key !== TERMINATE && value !== TERMINATE);

// แสดงผล Object ที่เก็บข้อมูลผลไม้
console.log("ข้อมูลผลไม้:");
for (const fruit in fruits) {
    console.log(`${fruit}: ${fruits[fruit]} ผล`);
}
