'this' inside global scope.
			'this' inside object.
			'this' inside method.
			'this' inside a function.
'this' inside an inner function		
			'this' inside a constructor.
			'this' inside a class.



2. // this inside a global scope
this.garage = {
    table: 'garage table'
}
console.log(this.garage.table)
console.log(window.garage.table)



// this inside a object.
let johnsRoom = {
    table: 'Johns Table'
}
console.log(johnsRoom.table)



//this inside a function
'use strict'
this.table = 'window table'
const cleanTable = function () {
    console.log(`cleaning ${this.table}`)
}

cleanTable.call(this)



//this inside a method
let johnsRoom = {
    table: 'Johns Table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }

}

johnsRoom.cleanTable()



//this inside an inner function

this.table = 'window table'
const cleanTable = function () {
    const innerFunction = () => {
        console.log(`cleaning ${this.table}`)
    }
    innerFunction()
}

cleanTable.call(this)



//this inside a constructor

const cleanTable = function () {
    console.log(`cleaning ${this.table}`)
}





let createRoom = function (name) {
    this.table = `${name}'s table`
}

const myRoom = new createRoom('Chirag');



cleanTable.call(myRoom)



//this inside a class



class createRoom {
    constructor(name) {
        this.table = `${name}'s table`;
    }

    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }

}

const myRoom = new createRoom('Chirag');

myRoom.cleanTable()



3, 4, 5. class Student {
    constructor(names, age, phn_num, boardmarks) {
        this.names = `${names}`,
            this.age = `${age}`,
            this.phn_num = `${phn_num}`
        this.boardmarks = `${boardmarks}`

    }

    checkMarks() {

        if (this.boardmarks > 40) {
            console.log(`${this.names} is eligible`)
        } else {
            console.log(`${this.names} is not eligible`)

        }

    }

}



const student1 = new Student('Chirag', 22, 7067345600, 100);
const student2 = new Student('Ram', 20, 7067345600, 98);
const student3 = new Student('shyam', 21, 7067345600, 39);
const student4 = new Student('Rahul', 23, 7067345600, 27);
const student5 = new Student('Shourya', 24, 7067345600, 88);





student1.checkMarks()
student2.checkMarks()
student3.checkMarks()
student4.checkMarks()
student5.checkMarks()



6. class Student {
    static count = 0;
    constructor(names, age, phn_num, boardmarks) {
        this.names = `${names}`;
        this.age = `${age}`;
        this.phn_num = `${phn_num}`;
        this.boardmarks = `${boardmarks}`;
        Student.countStudent();

    }

    // checkMarks() {
    //     if(this.boardmarks>40) {
    //         console.log(`${this.names} is eligible`)
    //     } else {
    //         console.log(`${this.names} is not eligible`)
    //     }

    // }

    static countStudent() {
        return (Student.count++)
    }

}



const student1 = new Student('Chirag', 22, 7067345600, 100);
const student2 = new Student('Ram', 20, 7067345600, 98);
const student3 = new Student('shyam', 21, 7067345600, 39);
const student4 = new Student('Rahul', 23, 7067345600, 27);
const student5 = new Student('Shourya', 24, 7067345600, 88);
console.log(Student.countStudent())





'use strict'
// let square = (a) => { return a*a }
// console.log(square(2))

// var a = 4;
// let mult = (a,b) => { return a*b };

// console.log(mult(2, 4))

// var x = function() {
//     var that = this;
//     this.val = 1;
//     setTimeout(function() {
//         that.val++;
//         console.log(that.val);
//     }, 1);
// };
// var xx = new x();

// var x = function() {
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1);
// };
// var xx = new x();





var x = (...n) => {
    console.log(n[0]) //n acts as an array
};

x(1, 2, 3)'use strict'

// let square = (a) => { return a*a }
// console.log(square(2))



// var a = 4;
// let mult = (a,b) => { return a*b };
// console.log(mult(2, 4))
// var x = function() {
//     var that = this;
//     this.val = 1;
//     setTimeout(function() {
//         that.val++;
//         console.log(that.val);
//     }, 1);
// };

// var xx = new x();


// var x = function() {
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1);
// };

// var xx = new x();


var x = (...n) => {
    console.log(n[0]) //n acts as an array
};


x(1, 2, 3)

2, 3.
class Student {
    constructor(names, age, phn_num, boardmarks) {
        this.names = names
        this.age = age
        this.phn_num = phn_num
        this.boardmarks = boardmarks
    }

    eligibleForPlacements(minAge) {
        console.log(this) //the fat arrow function looks at 'this' and takes it as object passed into it.
        return (minMarks) => {
            if (this.boardmarks > minMarks && this.age > minAge) {
                console.log(this.names + ' is ready for placements')
            } else {
                console.log(this.names + ' is not ready for placements')
            }
        }
    }
}

const student1 = new Student('Chirag', 22, 7067345600, 100);
const student2 = new Student('Ram', 20, 7067345600, 98);
const student3 = new Student('shyam', 21, 7067345600, 39);
const student4 = new Student('Rahul', 23, 7067345600, 27);
const student5 = new Student('Shourya', 24, 7067345600, 88);

student1.eligibleForPlacements(18)(40)
student2.eligibleForPlacements(18)(40)
student3.eligibleForPlacements(18)(40)
student4.eligibleForPlacements(18)(40)
student5.eligibleForPlacements(18)(40)

//fat arrow function looks at the object which is in its lexical scope ie its parent scopes

//normal functions look at the current object thats calling the function

// use fat arrow function when we want to invoke parent function's 'this'.

// fat arrow looks just in its lexical scope.