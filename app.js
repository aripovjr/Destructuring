//Destructuring
//this is the faster and easeir way to unpack values from array
//array
const fruits = ['watermelon', 'banana', 'orange', 'kiwi']
console.log(fruits)

const watermelon = fruits[0]
const banana = fruits[1]
const orange = fruits[2]
const kiwi = fruits[3]
console.log(watermelon, banana, orange, kiwi)
//or
fruits.map(fruit => console.log(fruit))
//or
fruits.forEach(element => console.log(element));
//or
console.log(fruits[0], fruits[1], fruits[2], fruits[3])

//or we have another effective way of accessing values in array
//that's destructuring, let's go
//so we have already array

const [a, b, c, d] = fruits
console.log(a,c)
//beautiful, clear, logical, easy

//now
//Destructuring swap variables
//array
let firstCar = 'BMW'
let secondCar = 'Mercedes'
console.log(firstCar, secondCar)
let temp = secondCar    
secondCar = firstCar
firstCar = temp
console.log(firstCar, secondCar)
//faster way of code above
let cadillac = 'Cadillac';
let lexus = 'Lexus';
console.log(cadillac, lexus);
[lexus, cadillac] = [cadillac, lexus];
console.log(cadillac, lexus);//Lexus Cadillac

//Destructuring
//objects

const Jasur = {
    name: 'Jasur',
    surname: 'Aripov',
    age: 20,
    position: 'Frontend Developer'
}

const {age, surname, name, position} = Jasur
console.log(`${name} ${surname} is ${age}, he is a ${position}`)