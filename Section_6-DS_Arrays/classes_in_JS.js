// <---------- referrence type ----------> //
// objects are called reference type
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

// obj1 === obj2;
// -> true

// obj1 === obj3;
// -> false


// <---------- Context ----------> //
const obj4 = {
    a: function() {
        console.log(this);
    }
}
// -> {a: f}  f in this instant stands for function


// <---------- Instantiation ----------> //
class Player {
    constructor(name, type) {
        console.log('plyer', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hello I am ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Kelly", "healer");
const wizard2 = new Wizard("Shaq", "Killer");

// const player1 = new Player("Mira", "chef")
// player1.introduce()
wizard1.play()