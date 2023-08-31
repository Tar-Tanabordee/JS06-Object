function Calculator() {
    this.firstNumber = 0;
    this.secondNumber = 0;

    this.read = function (a, b) {
        this.firstNumber = a;
        this.secondNumber = b;
    };

    this.sum = function () {
        return this.firstNumber + this.secondNumber;
    };

    this.mul = function () {
        return this.firstNumber * this.secondNumber;
    };
}

// สร้าง Object จาก Constructor Function
const calculator = new Calculator();

// ใช้ method read() เพื่อรับค่า input 2 ค่า
calculator.read(5, 7);

// เรียกใช้ method sum() และ method mul() และแสดงผลลัพธ์
console.log('Sum:', calculator.sum()); // Sum: 12
console.log('Multiply:', calculator.mul()); // Multiply: 35
