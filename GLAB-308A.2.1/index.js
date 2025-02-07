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


