class Person {
    constructor(age, name, surname, gender) {
        this.age = age;
        this.name = name;
    }

    fullname() {
        return name + " " +surname
    }

    run() {
        return "I am running";
    }
}

let vasya = {
    age: 15,
    name: "vasua",
    surname: "petkin",
    gender: "male",

    fullName: function() {
        return name + " " +surname
    },

    run: function() {
        return "I am running";
    }
}

var kesha = {
    age: 20,
    name: "kesha",
    surname: "petkin",
    gender: "male",

    fullName: function() {
        return name + " " +surname
    },

    run: function() {
        return "I am running";
    }
}