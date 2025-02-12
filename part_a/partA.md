# Theory Questions

## No. 1
 List all the primitive data types in JavaScript and give a brief explanation of each.

- String : 
    It involves characters enclosed in either single or double quotes

- Number:
    It includes numeric values (both integers and decimals)

- BigInt : 
    It is used to store big integer values that are too big to be represented as a normal javascript number

- Boolean: 
    It is like binary. It has only two possible values e.g. True/False , Yes/No, On/ Off

- Object:
    Object data type stores data in form of key-value or name-value pairs

- Symbol:
    Symbols are used to create unique property keys for objects

- Null:
    Null defines an intentionally empty value. It tells that the variable has no value right now, but it might have one later.

- Undefined
    It represents a variable that has been declared but has not been assigned a value



## No.2
 What is the difference between null and undefined in JavaScript?

    Undefined is when a value is declared but not assigned a value while  null is assigned to a variable to show that it has no value


## No.3
 Explain the difference between primitive and reference data types in JavaScript.

    - Primitive data types are the built-in data types stored by value while reference data types are stored by reference
    - Primitive data types are immutable while reference data tpes are mutable

## No.4
 What is the typeof operator used for? Provide two examples

    The typeof operator helps to find the data type of a JavaScript variable
    E.g typeof "Dorothy"     // Returns "string"
        typeof 90            // Returns "number"


## No.5
 Explain the concept of type coercion in JavaScript. Provide an example of implicit type coercion.

    Type coercion is the automatic or implicit conversion of one data type to another
    -Implicit type coercion is where JavaScript automatically converts a value to the required type for an operation without you doing anything.
    e.g let result = 16 + "Volvo", 16 is converted to string to give output "16Volvo"

## No.6
 What is the difference between == and === in JavaScript?

    The == operator compares values of two operands, but it does not consider their types
                    while  
    the === operator compares both the value and the type of the two operands


## No.7
Define and differentiate between mutable and immutable data types in JavaScript, providing one example for each.

    Mutable data types are those whose values can be changed or modified after the variable is created e.g objects
                    while
    Immutable data types are those whose values cannot be changed once they are created e.g strings 
    
