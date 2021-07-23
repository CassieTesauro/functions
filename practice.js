
//AGE IN DOG YEARS==================================

//const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7
//     return ageInDogYears
// }

// calculateAgeInDogYears(22)
// console.log(dogAge)


//BEST IN SHOW========================================

// const shareFavoriteDogBreed = (breedName) => {
//     if (breedName === "meow") {
//     const sentenceFrame = `I like cats`
//     return sentenceFrame
//     } else {
//         const sentenceFrame = `My favorite dog is the ${breedName}`
//         return sentenceFrame
//     }
    
// }

// const finalSentence = shareFavoriteDogBreed("schnauzer")
// console.log(`When it comes to pets, ${finalSentence}.`)


//1. the breedName is required.
//2. yes, the functionneeds to return a value
//3. yes I am referencing (storing) the return value with the sentence frame variable.
//4. the return value referenced in the function block is then accessed by the JS when the function is called with an input argument.  the value becomes part of the function's output.  the output is referenced in the final sentence variable outside of the codeblock.  that value is then interpolated into a sentence that is logged to the console.
//5.  the sentence is logged but the finalsentence area says undefined.
//6. "error- breed name is not defined"
 

//ADDITION ====================================


// const add = (num1, num2, num3) => {
//     const sum = num2 + num1 + num3
//     return sum
// }

// const answerToAddFunction = add(17, 4, 11)
// console.log(answerToAddFunction)


//SELF-DRIVING CARS============================

//vvvvvv refactered the function to be less lines.  instatiate the sentence variable with let instead of const in the function block with an empty string as its value.  Then, add the if...else consitional that reasigns the sentence variable.  outside of the if...else block but inside the function block, return the sentence variable.  in the global scope, instatiate a variable and put the function call inside of it so the output can be stored/accessed in the global scope.  console.log the variable holding the function output to make sure the function is working correctly.

    // Const go = (direction, speed) => {
    //     let sentence = "         "
    //     if (speed > 75) {
    //         sentence = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`   
    //     } else {
    //     sentence = `The car is moving ${direction} at ${speed} mph.`
    //     }
    //     return sentence
    // }

    // const sentenceToLog = go("forward", 75)
    // console.log(sentenceToLog)


//EVENS OR ODDS ======================================

//instantiate a function ven or odd' that takes in one number
//check for divisible by 2 and return string even or odd
//log the result

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
    return "even"
    } else {
    return "odd"
    }
}

const evenOrOddResult = evenOrOdd(4)
console.log(evenOrOddResult)




