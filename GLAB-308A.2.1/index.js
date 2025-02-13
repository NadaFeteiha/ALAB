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

    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
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

//==================================================================
console.log("=============  Part 3: Class Features ===============")
// Part 3: Class Features
// TODO: What else should an adventurer be able to do? 
// TODO: What other properties should they have?
// TODO: Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.

class Adventurer extends Character {

    static ROLES = ["FIGHTER", "HEALER", "WIZARD"];

    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        //!(role.toUpperCase() in Adventurer.ROLES) why this not working?!
        if (!Adventurer.ROLES.includes(role.toUpperCase())) {
            console.log(`Error role => ${role}`)
            console.log(`roles => ${Adventurer.ROLES}`)
            // throw new Error(`Invalid role: ${role}`);
        } else {
            this.role = role;
        }

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }


    // TODO: Accept an Adventurer as a parameter.
    duel(opponent) {
        console.log(`${this.name} <=== VS ===> ${opponent.name}`);
        let round = 1;
        // TODO: Repeat this process until one of the two adventurers reaches 50 health.
        while (this.health > 50 && opponent.health > 50) {

            // TODO: Use the roll() to create opposing rolls for each adventurer.
            const roll1 = this.roll();
            const roll2 = opponent.roll();

            if (roll1 > roll2) {
                opponent.health -= 1;  // TODO: <= Subtract 1 from the adventurer
                console.log(`${this.name} wins round ${round}!`);

            } else if (roll2 > roll1) {
                this.health -= 1; // TODO: <= Subtract 1 from the adventurer
                console.log(`${opponent.name} wins round ${round}!`);
            } else {
                opponent.health -= 1;
                this.health -= 1;
                console.log("No weiners!");
            }

            // TODO: Log the results of this “round” of the duel, 
            // TODO: including the rolls and current health values.
            console.log(`${this.name} health: ${this.health}`);
            console.log(`${opponent.name} health: ${opponent.health}`);
            round++;
            console.log(`==================********* New Round #${round} ************======================`)
        }

        // TODO: Log the winner of the duel: the adventurer still above 50 health.
        if (this.health > 50) {
            console.log(`${this.name} wins!`);
        } else {
            console.log(`${opponent.name} wins!`);
        }
    }
}

// Test role no in the list
console.log("===============wrong role===============")
try {
    const robin3 = new Adventurer("Robin", "Test");
    console.log(robin3);
} catch (e) {
    console.log(`HEREEEE => ${e}`);
}

console.log("========================================")

// TODO: create a Companion class with properties and 
// TODO: methods specific to the companions.

class Companion extends Character {

    constructor(name, type) {
        super(name);
    }
}

// TODO: change the declaration of Robin and the companions 
// TODO: to use the new Adventurer and Companion classes.
const robin2 = new Adventurer("Robin", "Rogue");
robin2.inventory = ["sword", "potion", "artifact"];

robin2.companion = new Companion("Leo", "Cat");
robin2.companion.type = "Cat";

robin2.companion.companion = new Companion("Frank", "Flea");
robin2.companion.companion.type = "Flea";
robin2.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin2);

// =============================================
console.log("=================== Gather your party =====================")
// Part 5: Gather your party
class AdventurerFactory {

    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        console.log(`From generate ${this.role}`)
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
console.log(healers);

const robin55 = healers.generate("Robin");
const robin60 = healers.generate("Robin60");

// =======================================================================
console.log("=================== Part 6: Developing Skills =====================")
// Part 6: Developing Skills
robin55.duel(robin60);

// =======================================================================
console.log("=================== Part 7: Adventure Forth =====================")
// Part 7: Adventure Forth
// TODO: Generate a whole host of adventurers and their companions, 
// TODO: and have them interact using the instance methods you have developed.


// TODO: create other classes that can interact with your characters
// TODO: but in a diﬀerent direction from adventurers or companions – dragons, orcs, elves, vampires




// TODO: You can also create classes for the inventory itself, and include inventory methods such as adding,
// TODO:  removing, searching, selling, trading. Even individual items could be their own classes, and have
// TODO: properties and methods specific to the type of item.