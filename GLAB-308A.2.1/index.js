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

    }
}
