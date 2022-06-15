const number=['1','2','3','4','5','6','7','8','9','10']
const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',]

//destructing
// const [a,b,c]=alphabet
// console.log(a);
// console.log(b);
// console.log(c);

//if i want a and c only, need to skip b

// const [a,,c]=alphabet
// console.log(a);
// console.log(c);


//uses of rest operator //can call reminding values using rest operator

// const [a,,c,...rest]=alphabet
// console.log(a);
// console.log(c);
// console.log(rest);

// merging new array using spread operator //alternate way to concat-spread operator

// const newArray=[...number,...alphabet]
// console.log(newArray);

// in concat
// const newArray=alphabet.concat(number)
// console.log(newArray);

//same results

//in functions

// function plusAndMulti(a,b){
//     return [a+b,a*b,a/b]
// }
//destructing and default parameter in division
// const[plus,multiplication,division=50]= plusAndMulti(10,5)
// console.log("plus",plus);
// console.log('multiplication',multiplication);
// console.log('division',division);


//destructing in object

// const personOne={
//     firstName:"balaji",
//     lastName:"baskar",
//     age:29,
//     place:"coimbatore",
//     studies:"MBA",
//     favFood:"orange",
//     address:{
//         street:'ramanathanNagar',
//         state:'Tamilnadu'
//     }

// }

// const {firstName,lastName}=personOne
// console.log(firstName,lastName);

//i want keep fav food as default parameter
//i value is not in the object then default parameter will show the value

// const {favFood="apple"}=personOne
// console.log(favFood);

//now usage of rest parameter

// const {firstName,lastName,...rest}=personOne
// console.log(firstName);     //balaji
// console.log(lastName);      //baskar
// console.log(rest);      //{age: 29, place: 'coimbatore', studies: 'MBA', favFood: 'orange'}

//can able to change tha value in destructing

// const {firstName:name}=personOne
// console.log(name);

//nesting from object
// const{address:{state}}=personOne
// console.log(state);



// const personTwo={
//     firstName:"aleena",
//     lastName:"arunKumar",
//     age:30,
//     place:"alapuzha",
//     studies:"airhost",
//     favFood:"chocopie"
// }

//combine the two objects (using spread operator)

// const personThree={...personOne,...personTwo}
// console.log(personThree);   //personTwo over writes in personOne 

// example- with personOne

// function check(user){
//     return user
// }
// const result=check(personOne)
// console.log(result);

//result

//address: {street: 'ramanathanNagar', state: 'Tamilnadu'}
// age: 29
// favFood: "orange"
// firstName: "balaji"
// lastName: "baskar"
// place: "coimbatore"
// studies: "MBA"

// example  with personTwo

// function destructure({firstName,lastName,favFood="biriyani"}){
//     console.log(`firstName is ${firstName} and lastName is ${lastName} and my fav food is ${favFood}`);
// }
// destructure(personTwo)


