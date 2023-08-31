function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function (input) {
        this.currentValue += input;
    };

    this.show = function () {
        alert(this.currentValue);
    };
}

// สร้าง Object จาก Constructor Function โดยกำหนดค่าเริ่มต้นเป็น 5
const accumulator = new Accumulator(5);

// ใช้ method read() เพื่อบวกค่า input เข้ากับ currentValue
accumulator.read(10);

// ใช้ method show() เพื่อแสดงค่า currentValue ด้วย alert
accumulator.show(); // แสดง alert ค่าเป็น 15

