

export default function RandomNumber(max = 9, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
