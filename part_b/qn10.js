// creating a variable using const

// const my_name =  'Dorothy'

// // reassigning it
// my_name = "Dorah"

/* 
what happens:
it gives TypeError: Assignment to constant variable.
This error happens because when you use const to declare a variable, the variable becomes immutable
Therefore, i can not change my_name from 'Dorothy' to 'Dorah' since a const variable is immutable.
*/

// creating a variable using const
const my_name =  'Dorothy'

// reassigning it
let my_name = "Dorah"

/*
The terminal shows Cannot redeclare block-scoped variable 'my_name'.
The terminal gives a SyntaxError: Identifier 'my_name' has already been declared
This is because when you use const to declare a variable, the variable becomes immutable */