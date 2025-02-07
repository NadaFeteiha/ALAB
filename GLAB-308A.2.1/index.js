// adventuring game using object-oriented programming

// Part 1: Humble Beginnings
// give Robin’s feline friend a friend of his own:
// TODO: Add a “companion” sub-object to “Leo” with the following properties:
// TODO: The companion’s name is “Frank.”
// TODO: The companion’s type is “Flea.”
// TODO: The companion has its own belongings, which includes a small hat and sunglasses.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// TODO: Test this method by calling adventurer.roll() a few times
for (i = 0; i < 5; i++) {
    adventurer.roll(i);
}

console.log("=============  Part 2: Class Fantasy ===============")
// =======================================================================
// Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
robin.roll();