const user ={
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
    // key: 'JaAEEE',
};

// For IN : Loop through Object
// for (let <key_variable> in <obj>) {}

for (let key in user) {
    
    console.log(key); //dynamics assign by JS in <string>
    //1st : let key = "firstName"
    //2nd : let key = "lastName"
    //3rd : let key = "age"

    console.log(user[key]); // need to access by bracket , computed key
    //1st : user[key] == ['firstName'] ==> Codecamp
    //2nd : user[key] == ['lastName'] ==> Software Park
    //3rd : user[key] == ['age'] ==> 15
}
// let key ="firstName"
// user.key ===""

// 'firstNanme' in user; //true
// 'age' in user; //true
// 'phone' in user; // false