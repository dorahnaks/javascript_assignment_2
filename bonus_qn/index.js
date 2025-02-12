/* function that takes two different data types and checks if they are strictly equal (===). 
If they are not, explain why in a return message.*/
function strictEqualityCheck(a, b) {
    if (a === b)
        {return `The variables are strictly equal.`; }
    else 
        {let type_of_a = typeof a;
         let type_of_b = typeof b;
        return `${a} and ${b} are not strictly equal because one is ${type_of_a} and the other is a ${type_of_b}.`;
    }
    }
console.log(strictEqualityCheck(5, "5")); 
