const log = console.log;
log('Constructor Function');

const dev1 = {
    name: 'john',
    age: 23,
    role: 'dev',
    salary: 40_00,
    dev: function () {
        console.log('im sevelop some features');
    },
};


// Object Creators == Constructor Function

function Developer (name, age){
    //this = {}
    this.name = name; // {name:"Tar"}
    this.age = age // {name:"Tar", age : 23}
    this.role ='dev'; // {name:"Tar", age : 23, role : "dev"}
    this.salary= 40_000;// {name:"Tar", age23, role: "dev",salary:40_000}
    this.dev = function () {
        console.log('${this.name} develop some features');
    };// {name..., dev : fn()}

    //Implicit Return this
    //return {name...,dev : fn()}
}

//this == dev2
// [3] this === Instance
const dev2 = new Developer('Tar', 23);
// log(dev2)
log(dev2);3

const dev3 = new Developer('Tea', 25);
//
log(dev3);

