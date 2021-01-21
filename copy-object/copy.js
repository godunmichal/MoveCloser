let myObject = {
    name: "Michal",
    age: 25
}
let copiedObject = {}
const copyObject = (object) => {

    for (let index in object) {
        copiedObject[index] = object[index]
    }
}
console.log(myObject)
console.log(copiedObject)