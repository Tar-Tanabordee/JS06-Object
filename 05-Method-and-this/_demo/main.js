const log = console.log;
log('Method and this keyword');

// #############################
// #############################
// #############################


// each record => called property
// each propert => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของObject
const programmer = {
    name: 'Tar',
    age: 23,
    dev: devWebsite,
    meet: meeting,
    sleep: sleeping,
}

function devWebsite() {
    console.log("I'm working");
}
function meeting() {
    console.log("I'm meeting");
}
function sleep() {
    console.log("I'm sleeping";)
}
//property
// Syntax <obj><key>
log(programmer.name);
log(programmer.age);

//method
// Syntax : <obj>,<method>()
programmer.dev();
programmer.meet();
programmer.dev();
programmer.meet();
programmer.sleep(),
};

// เพิ่มMethod ให้ programmer 1 อย่าง และลองเรียกใช้งาน

//#################################
//############2 .Alternative Syntax
// ################################

const.programmer = {
    name: 'Tar',
    age: 23,
    dev: function () {
        console.log("I'm working");
    },
    meet: () {
         console.log("i'm meeting");
    // methodshorthand
    }
    sleep() {
        console.log("I'm sleeping")
    },
    // sleep : () => console.log ("I'm sleeping")

};

programmer.dev();
programmer.meet();
programmer.sleep();


function playchess (type) {
    console.log("I'm playing chess");
}

const me = {
    name: 'Tar',
    hair: 'Black',
    eye: 'Brown',
    gender: 'Male',
    myEx:['Fon','Namfon'],
    chess: playchess,
    sleepAllDay : function (){
    },
    eatAllNight: (menu) => console.log("I'm eating ${menu} all the time"),
    focus(task) {
        console.log("I'm working on ${task} in Focus mode");
    }

};
  
me.Chess();
me.sleepAllDay();
me.eatAllNight('TAX');
me.focus('javascript lab');

//OOP : Object Oriented Program
const car = {
    brand: 'Mercedes',
    model: 'C',
    drive: () => console.log('Driving'),
};

log(car.brand, car.model);

// Caller.Method
car.drive();
car['auto pilot']();

const calculator = {
    sum:(x, y) => x + y,
    minus: (x, y) => x - y,
};

let r1 = calculator.sum(5, 7);
let r2 = calculator.sum(7, 3);
log(r1, r2);

log(car.speed);
car.speed= calculator.sum(car.newSpeed,20);
log(car,speed);

// ##########################
// ########## 4. This Keyword
// ##########################

//JS Keyword : if,else, for ,while,do switch, this

const user = {
    name: 'codecamp',
    age: 15,
    sayHi: function() {
        console.log (`Hello ${this.name}`);
    },
    growOld: function (){
        console.log(this);
        // this == user, this.age -- user.age
        this.age++;
    },
};

// Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้
// ีีีีีuser.saHi();
// user,name='software park';
// user.sayHi;

// log(user.age);
// user.growOld();
// log(user.age);

// Q : ค่าของ this ถูก Solve ตั้งแต่ตอนที่เขียน function รึป่าว ?
// A : ไม่
function dev() {
    console.log(`This feature developed by ${this.name}`);
}

const programmer1 = {
    name: 'John',
    develop: dev,
};

const programmer2 = {
    name: 'Jane',
    develop: dev,
};

// A : this ถูก solve ตอนเรียกใช้ Method
// Caller.metthod => this == Caller == Object before the dot
// Checkpoint-1 :this == object ที่เรียกใช้ method
programmer1.develop();
programmer2.develop();



// Private Property

let d = {
    name: 'Cidecamp'
}



// Global(Browser) : window object

//window.alert("I'm Global");
//this.alert("I'm Global this");
//alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
function sayHi() {
    console.log(this);
}

// Execute Context = Window
window.sayHi();
this.sayHi();
sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

sayHello();
window.sayHello()

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    srcm: function () {
        console.log(`scream by ${this.name}`);
    },
};

// user Caller
user.say();

// this == Object Caller
