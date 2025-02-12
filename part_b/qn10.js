// creating a variable using const
const my_name =  'Dorothy'

// reassigning it
my_name = "Dorah"

/* 
what happens:
it gives TypeError: Assignment to constant variable.
This error happens because when you use const to declare a variable, the variable becomes immutable
Therefore, i can not change my_name from 'Dorothy' to 'Dorah' since a const variable is immutable.
*/